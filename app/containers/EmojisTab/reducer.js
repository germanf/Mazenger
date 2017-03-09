import {fromJS} from "immutable";
import {INSERT_EMOJI, OPEN_EMOJI_GROUP} from "./actions";
import {FAVORITES, OPEN_GROUPS} from "./constants";
import {CLEAR_SETTINGS} from "../PrivacySettings/actions";

const initState = fromJS({});

export default function (state = initState, action, curUserID) {
  switch (action.type) {

    case INSERT_EMOJI:
      if (!action.emoji)
        return state;
      return state
        .updateIn([curUserID, FAVORITES, action.emoji], count => count ? count + 1 : 1);

    case OPEN_EMOJI_GROUP:
      return state
        .updateIn([curUserID, OPEN_GROUPS, action.index], state => !state);

    case CLEAR_SETTINGS:
      return state
        .set(curUserID, initState);
  }
}
