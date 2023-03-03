import {
  GETPRODUCTREVIEWSSUCCESS,
  RFAILD,
  RLOADING,
} from "../actiontypes/reviewtypes";

const initialState = {
  loading: true,
  reviews: [],
  error: null,
};

export const reviewreducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case RLOADING:
      return { ...state, loading: true };

    case GETPRODUCTREVIEWSSUCCESS:
      return { ...state, reviews: payload, loading: false };
    case RFAILD:
      return { ...state, error: payload, loading: false };
    default:
      return state;
  }
};
