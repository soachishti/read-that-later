import { TagsState } from '../tags.state';
import { Action } from '@ngrx/store';

export const TagsToggleActionType = 'TAGS_TOGGLE';

export class TagsToggleAction implements Action {
  readonly type = TagsToggleActionType;

  constructor (public payload: string) {
  }
}

export const TagsToggleActionHandler = (state: TagsState,
                                        action: TagsToggleAction) => {
  const index = state.selected.indexOf(action.payload);
  let newSelected;
  if (index >= 0) {
    newSelected = state.selected.filter((item, indexx) => indexx !== index);
  } else {
    newSelected = [...state.selected, action.payload];
  }
  return Object.assign({}, state, {selected: newSelected});
};
