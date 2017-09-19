import {
  ItemsLoadedAction,
  ItemsLoadedActionHandler,
  ItemsLoadedActionType
} from './itemsLoaded.action';
import { testUser } from '../../auth/signedIn/authSignedIn.action.spec';
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
      expect(ItemsLoadedActionHandler({
        auth: {},
        items: []
      }, new ItemsLoadedAction(items)))
        .toEqual({auth: {}, items: items} as any);
    });
    it('should only fill items array in the state', () => {
      const state = {items: [], auth: {user: testUser}, tags: []};
      const expectedState = {items: items, auth: {user: testUser}, tags: []};
      expect(ItemsLoadedActionHandler(state, new ItemsLoadedAction(items)))
        .toEqual(expectedState);
    });
    it('should rewrite items array in the state', () => {
      const state = {auth: {}, items: ['five', 'six']};
      expect(ItemsLoadedActionHandler(state, new ItemsLoadedAction(items)))
        .toEqual({auth: {}, items: items});
    });
  });
});
