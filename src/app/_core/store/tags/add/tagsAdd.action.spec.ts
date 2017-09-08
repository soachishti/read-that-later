import {
  TagsAddAction,
  TagsAddActionHandler,
  TagsAddActionType
} from './tagsAdd.action';

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
      expect(TagsAddActionHandler({tags: []}, new TagsAddAction(newTag)))
        .toEqual({tags: [newTag]});
    });
    it('should only add tag to empty tags array in the state', () => {
      const state = {items: [], user: {name: 'Anton'}, tags: []};
      const expectedState = {items: [], user: {name: 'Anton'}, tags: [newTag]};
      expect(TagsAddActionHandler(state, new TagsAddAction(newTag)))
        .toEqual(expectedState);
    });
    it('should add tag to non-empty tags array in the state', () => {
      const state = {tags: ['one', 'two']};
      expect(TagsAddActionHandler(state, new TagsAddAction(newTag)))
        .toEqual({tags: ['one', 'two', newTag]});
    });
  });
});
