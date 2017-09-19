import {
  TagsLoadedAction,
  TagsLoadedActionHandler,
  TagsLoadedActionType
} from './tagsLoaded.action';
import { testUser } from '../../auth/signedIn/authSignedIn.action.spec';
describe('tagsLoaded.action.ts', () => {
  const tags = ['one', 'two', 'three'];

  describe('Action', () => {
    let action: TagsLoadedAction;
    beforeEach(() => {
      action = new TagsLoadedAction(tags);
    });

    it('should have proper type', () => {
      expect(action.type).toEqual(TagsLoadedActionType);
    });

    it('should have proper payload', () => {
      expect(action.payload).toEqual(tags);
    });
  });

  describe('Handler', () => {
    it('should fill empty tags array in the state', () => {
      expect(TagsLoadedActionHandler({
        auth: {},
        tags: []
      }, new TagsLoadedAction(tags)))
        .toEqual({auth: {}, tags: tags} as any);
    });
    it('should only fill tags array in the state', () => {
      const state = {items: [], auth: {user: testUser}, tags: []};
      const expectedState = {items: [], auth: {user: testUser}, tags: tags};
      expect(TagsLoadedActionHandler(state, new TagsLoadedAction(tags)))
        .toEqual(expectedState);
    });
    it('should rewrite tags array in the state', () => {
      const state = {auth: {}, tags: ['five', 'six']};
      expect(TagsLoadedActionHandler(state, new TagsLoadedAction(tags)))
        .toEqual({auth: {}, tags: tags});
    });
  });
});
