import React from 'react';
import { Context } from "../Provider";

const useDispatch = () => React.useContext(Context).dispatch;

export default useDispatch;