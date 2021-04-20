import React, { useEffect, useReducer } from "react";
import axios from "axios";
import RequestReducer, { REQUEST_STATUS } from "../reducers";
import {
  GET_ALL_SUCCESS,
  GET_ALL_FAILURE,
  PUT_SUCCESS,
  PUT_FAILURE,
} from "../actions";

const withRequest = (baseUrl, routeName) => (Component) => (props) => {
  const [{ records, status, error }, dispatch] = useReducer(RequestReducer, {
    records: [],
    status: REQUEST_STATUS.LOADING,
    error: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${baseUrl}/${routeName}`);
        dispatch({
          records: response.data,
          type: GET_ALL_SUCCESS,
        });
      } catch (e) {
        dispatch({
          type: GET_ALL_FAILURE,
          error: e,
        });
      }
    };
    fetchData();
  }, [baseUrl, routeName]);

  const propsLocal = {
    records,
    status,
    error,
    put: async (record) => {
      try {
        await axios.put(`${baseUrl}/${routeName}/${record.id}`, record);
        dispatch({
          type: PUT_SUCCESS,
          singleRecord: record,
        });
      } catch (e) {
        dispatch({
          type: PUT_FAILURE,
          error: e,
        });
      }
    },
  };
  return <Component {...props} {...propsLocal}></Component>;
};

export default withRequest;
