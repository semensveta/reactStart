import {
  ADD_ITEM
} from 'constants/list';

export function addItem (item) {
  return {
    type    : ADD_ITEM,
    payload : { item }
  };
}
