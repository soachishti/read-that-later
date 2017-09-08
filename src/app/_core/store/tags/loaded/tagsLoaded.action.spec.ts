
import {
  TagsLoadedAction, TagsLoadedActionHandler,
  TagsLoadedActionType
} from './tagsLoaded.action';
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
      expect(TagsLoadedActionHandler({tags: []}, new TagsLoadedAction(tags)))
        .toEqual({tags: tags});
    });
    it('should only fill tags array in the state', () => {
      const state = {items: [], user: {name: 'Anton'}, tags: []};
      const expectedState = {items: [], user: {name: 'Anton'}, tags: tags};
      expect(TagsLoadedActionHandler(state, new TagsLoadedAction(tags)))
        .toEqual(expectedState);
    });
    it('should rewrite tags array in the state', () => {
      const state = {tags: ['five', 'six']};
      expect(TagsLoadedActionHandler(state, new TagsLoadedAction(tags)))
        .toEqual({tags: tags});
    });
  });
});
