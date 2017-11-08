// import {
//   ItemsLoadAction,
//   ItemsLoadActionHandler,
//   ItemsLoadActionType
// } from './itemsLoad.action';
// import { testUser } from '../../auth/signedIn/authSignedIn.action.spec';
// describe('itemsLoad.action.ts', () => {
//   const items = ['one', 'two', 'three'];
//
//   describe('Action', () => {
//     let action: ItemsLoadAction;
//     beforeEach(() => {
//       action = new ItemsLoadAction(items);
//     });
//
//     it('should have proper type', () => {
//       expect(action.type).toEqual(ItemsLoadActionType);
//     });
//
//     it('should have proper payload', () => {
//       expect(action.payload).toEqual(items);
//     });
//   });
//
//   describe('Handler', () => {
//     it('should fill empty items array in the state', () => {
//       expect(ItemsLoadActionHandler({
//         auth: {},
//         items: []
//       }, new ItemsLoadAction(items)))
//         .toEqual({auth: {}, items: items} as any);
//     });
//     it('should only fill items array in the state', () => {
//       const state = {items: [], auth: {user: testUser}, tags: []};
//       const expectedState = {items: items, auth: {user: testUser}, tags: []};
//       expect(ItemsLoadActionHandler(state, new ItemsLoadAction(items)))
//         .toEqual(expectedState);
//     });
//     it('should rewrite items array in the state', () => {
//       const state = {auth: {}, items: ['five', 'six']};
//       expect(ItemsLoadActionHandler(state, new ItemsLoadAction(items)))
//         .toEqual({auth: {}, items: items});
//     });
//   });
// });
