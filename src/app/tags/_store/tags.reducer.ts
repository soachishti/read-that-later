import { TagsState, TagsStateInitial } from './tags.state';
import {
  TagsToggleAction,
  TagsToggleActionHandler,
  TagsToggleActionType
} from './toggle/tagsToggle.action';

export function TagsReducer (state = TagsStateInitial,
                             action: any): TagsState {
  switch (action.type) {
    case TagsToggleActionType:
      return TagsToggleActionHandler(state, action as TagsToggleAction);
    default:
      return state;
  }
}
