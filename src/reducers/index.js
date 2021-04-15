import {
  GET_ALL_SUCCESS,
  GET_ALL_FAILURE,
  PUT_SUCESS,
  PUT_FAILURE,
} from "../actions";

export const REQUEST_STATUS = {
  LOADING: "loading",
  SUCCESS: "success",
  ERROR: "error",
};

const RequestReducer = (state, action) => {
  switch (action.type) {
    case GET_ALL_SUCCESS: {
      return {
        ...state,
        status: REQUEST_STATUS.SUCCESS,
        records: action.records,
      };
    }
    case GET_ALL_FAILURE: {
      return {
        ...state,
        status: REQUEST_STATUS.ERROR,
        error: action.error,
      };
    }
    case PUT_SUCCESS: {
      const { records } = state;
      const { singleRecord } = action;
      const recordIndex = records
        .map((single) => single.id)
        .indexOf(singleRecord.id);
      return {
        ...state,
        records: [
          ...records.slice(0, recordIndex),
          singleRecord,
          ...records.slice(recordIndex + 1),
        ],
      };
    }
    case PUT_FAILURE: {
      return {
        ...state,
        error: action.error,
      };
    }
    default:
      return state;
  }
};

export default RequestReducer;
