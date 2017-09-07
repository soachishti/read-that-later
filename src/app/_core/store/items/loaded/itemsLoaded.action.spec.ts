
import {
  ItemsLoadedAction, ItemsLoadedActionHandler,
  ItemsLoadedActionType
} from './itemsLoaded.action';
describe('itemsLoaded.action.ts', () => {
  const items = ['one', 'two', 'three'];

  describe('Action', () => {
    let action: ItemsLoadedAction;
    beforeEach(() => {
      action = new ItemsLoadedAction(items);
    });

    it('should have proper type', () => {
      expect(action.type).toEqual(ItemsLoadedActionType);
    });

    it('should have proper payload', () => {
      expect(action.payload).toEqual(items);
    });
  });

  describe('Handler', () => {
    it('should fill empty items array in the state', () => {
      expect(ItemsLoadedActionHandler({items: []}, new ItemsLoadedAction(items)))
        .toEqual({items: items});
    });
    it('should only fill items array in the state', () => {
      const state = {items: [], user: {name: 'Anton'}, tags: []};
      const expectedState = {items: items, user: {name: 'Anton'}, tags: []};
      expect(ItemsLoadedActionHandler(state, new ItemsLoadedAction(items)))
        .toEqual(expectedState);
    });
    it('should rewrite items array in the state', () => {
      const state = {items: ['five', 'six']};
      expect(ItemsLoadedActionHandler(state, new ItemsLoadedAction(items)))
        .toEqual({items: items});
    });
  });
});
