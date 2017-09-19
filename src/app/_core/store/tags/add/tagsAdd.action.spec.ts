import {
  TagsAddAction,
  TagsAddActionHandler,
  TagsAddActionType
} from './tagsAdd.action';
import { testUser } from '../../auth/signedIn/authSignedIn.action.spec';

describe('tagsAdd.action.ts', () => {
  const newTag = 'New tag';

  describe('Action', () => {
    let action: TagsAddAction;
    beforeEach(() => {
      action = new TagsAddAction(newTag);
    });

    it('should have proper type', () => {
      expect(action.type).toEqual(TagsAddActionType);
    });

    it('should have proper payload', () => {
      expect(action.payload).toEqual(newTag);
    });
  });

  describe('Handler', () => {
    it('should add tag to empty tags array in the state', () => {
      expect(TagsAddActionHandler({
        auth: {},
        tags: []
      }, new TagsAddAction(newTag)))
        .toEqual({auth: {}, tags: [newTag]} as any);
    });
    it('should only add tag to empty tags array in the state', () => {
      const state = {items: [], auth: {user: testUser}, tags: []};
      const expectedState = {items: [], auth: {user: testUser}, tags: [newTag]};
      expect(TagsAddActionHandler(state, new TagsAddAction(newTag)))
        .toEqual(expectedState);
    });
    it('should add tag to non-empty tags array in the state', () => {
      const state = {auth: {}, tags: ['one', 'two']};
      expect(TagsAddActionHandler(state, new TagsAddAction(newTag)))
        .toEqual({auth: {}, tags: ['one', 'two', newTag]});
    });
  });
});
