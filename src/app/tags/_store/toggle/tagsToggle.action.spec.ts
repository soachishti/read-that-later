import {
  TagsToggleAction,
  TagsToggleActionHandler,
  TagsToggleActionType
} from './tagsToggle.action';

describe('tagsToggle.action.ts', () => {
  const toggleTag = 'tag1';

  describe('Action', () => {
    let action: TagsToggleAction;
    beforeEach(() => {
      action = new TagsToggleAction(toggleTag);
    });

    it('should have proper type', () => {
      expect(action.type).toEqual(TagsToggleActionType);
    });

    it('should have proper payload', () => {
      expect(action.payload).toEqual(toggleTag);
    });
  });

  describe('Handler', () => {
    it('should add selected tag to empty selected array in the state', () => {
      const newState = TagsToggleActionHandler({selected: []},
        new TagsToggleAction(toggleTag));
      expect(newState).toEqual({selected: [toggleTag]});
    });
    it('should remove selected tag from selected array in the state', () => {
      const newState = TagsToggleActionHandler({selected: [toggleTag]},
        new TagsToggleAction(toggleTag));
      expect(newState).toEqual({selected: []});
    });
    it('should add selected tag to non-empty selected array in the state',
      () => {
        const oldState = {selected: ['1', '2']};
        const newState = TagsToggleActionHandler(oldState,
          new TagsToggleAction(toggleTag));
        const expectedState = {selected: ['1', '2', toggleTag]};
        expect(newState).toEqual(expectedState);
      });
    it('should remove selected tag from non-empty selected array in the state',
      () => {
        const oldState = {selected: ['1', toggleTag, '2']};
        const newState = TagsToggleActionHandler(oldState,
          new TagsToggleAction(toggleTag));
        const expectedState = {selected: ['1', '2']};
        expect(newState).toEqual(expectedState);
      });
  });
});
