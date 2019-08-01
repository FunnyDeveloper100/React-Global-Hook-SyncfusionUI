import React from "react";
import useGlobalHook from "use-global-hook";
import { data } from '../components/datasource';
import * as actions from "../actions";

const initialState = {
  gird_data: null
};

const useGlobal = useGlobalHook(React, initialState, actions);

export default useGlobal;
