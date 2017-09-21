import { TagsState, TagsStateInitial } from './tags.state';
import {
  TagsToggleAction,
  TagsToggleActionHandler,
  TagsToggleActionType
} from './toggle/tagsToggle.action';

const TagsStateFromLocalStorage: TagsState =
  JSON.parse(localStorage.getItem('tags'));

export function TagsReducer (state = TagsStateFromLocalStorage || TagsStateInitial,
                             action: any): TagsState {
  switch (action.type) {
    case TagsToggleActionType:
      return TagsToggleActionHandler(state, action as TagsToggleAction);
    default:
      return state;
  }
}
