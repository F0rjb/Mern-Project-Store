import { combineReducers } from "redux";
import { productreducers } from "./productreducers";
import { reviewreducers } from "./reviewreducer";

export const rootereducer = combineReducers({
  prod: productreducers,
  rev: reviewreducers,
});
