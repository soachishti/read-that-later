import {
  ItemsToggleAction,
  ItemsToggleActionHandler,
  ItemsToggleActionType
} from './toggle.action';

describe('itemsToggle.action.ts', () => {
  const toggleItem = 'item1';

  describe('Action', () => {
    let action: ItemsToggleAction;
    beforeEach(() => {
      action = new ItemsToggleAction(toggleItem);
    });

    it('should have proper type', () => {
      expect(action.type).toEqual(ItemsToggleActionType);
    });

    it('should have proper payload', () => {

      expect(action.payload).toEqual(toggleItem);
    });
  });

  describe('Handler', () => {
    it('should add selected item to empty selected array in the state', () => {
      const newState = ItemsToggleActionHandler({selected: []},
        new ItemsToggleAction(toggleItem));
      expect(newState).toEqual({selected: [toggleItem]});
    });
    it('should remove selected item from selected array in the state', () => {
      const newState = ItemsToggleActionHandler({selected: [toggleItem]},
        new ItemsToggleAction(toggleItem));
      expect(newState).toEqual({selected: []});
    });
    it('should add selected item to non-empty selected array in the state',
      () => {
        const oldState = {selected: ['1', '2']};
        const newState = ItemsToggleActionHandler(oldState,
          new ItemsToggleAction(toggleItem));
        const expectedState = {selected: ['1', '2', toggleItem]};
        expect(newState).toEqual(expectedState);
      });
    it('should remove selected item from non-empty selected array in the state',
      () => {
        const oldState = {selected: ['1', toggleItem, '2']};
        const newState = ItemsToggleActionHandler(oldState,
          new ItemsToggleAction(toggleItem));
        const expectedState = {selected: ['1', '2']};
        expect(newState).toEqual(expectedState);
      });
  });
});
