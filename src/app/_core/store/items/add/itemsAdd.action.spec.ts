import {
  ItemsAddAction,
  ItemsAddActionHandler,
  ItemsAddActionType
} from './itemsAdd.action';
import { testUser } from '../../auth/signedIn/authSignedIn.action.spec';

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
      expect(ItemsAddActionHandler({
        auth: {},
        items: []
      }, new ItemsAddAction(newItem)))
        .toEqual({auth: {}, items: [newItem]} as any);
    });
    it('should only add item to empty items array in the state', () => {
      const state = {items: [], auth: {user: testUser}, tags: []};
      const expectedState = {
        items: [newItem],
        auth: {user: testUser},
        tags: []
      };
      expect(ItemsAddActionHandler(state, new ItemsAddAction(newItem)))
        .toEqual(expectedState);
    });
    it('should add item to non-empty items array in the state', () => {
      const state = {auth: {}, items: ['one', 'two']};
      expect(ItemsAddActionHandler(state, new ItemsAddAction(newItem)))
        .toEqual({auth: {}, items: ['one', 'two', newItem]});
    });
  });
});
