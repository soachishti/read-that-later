import {
  ItemsAddAction,
  ItemsAddActionHandler,
  ItemsAddActionType
} from './itemsAdd.action';

describe('itemsAdd.action.ts', () => {
  const newItem = 'New item';

  describe('Action', () => {
    let action: ItemsAddAction;
    beforeEach(() => {
      action = new ItemsAddAction(newItem);
    });

    it('should have proper type', () => {
      expect(action.type).toEqual(ItemsAddActionType);
    });

    it('should have proper payload', () => {
      expect(action.payload).toEqual(newItem);
    });
  });

  describe('Handler', () => {
    it('should add item to empty items array in the state', () => {
      expect(ItemsAddActionHandler({items: []}, new ItemsAddAction(newItem)))
        .toEqual({items: [newItem]});
    });
    it('should only add item to empty items array in the state', () => {
      const state = {items: [], user: {name: 'Anton'}, tags: []};
      const expectedState = {items: [newItem], user: {name: 'Anton'}, tags: []};
      expect(ItemsAddActionHandler(state, new ItemsAddAction(newItem)))
        .toEqual(expectedState);
    });
    it('should add item to non-empty items array in the state', () => {
      const state = {items: ['one', 'two']};
      expect(ItemsAddActionHandler(state, new ItemsAddAction(newItem)))
        .toEqual({items: ['one', 'two', newItem]});
    });
  });
});
