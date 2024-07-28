import { createContext } from "react";
import { AppAction } from "../reducers/app-reducer";

const defaultDispatch = function () {
  throw new Error("Dispatch context misconfigured");
};

const DispatchContext =
  createContext<(action: AppAction) => void>(defaultDispatch);

export default DispatchContext;
