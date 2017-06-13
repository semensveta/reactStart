/* eslint-disable */
import { compose, createStore, combineReducers } from 'redux';
import * as reducers from 'reducers';

console.log(reducers);

export default createStore(reducers.list, [1,2,3,4,5,6]);
