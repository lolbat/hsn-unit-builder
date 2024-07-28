import PageReducer, {
  initialPageState,
  isPageAction,
  PageAction,
  PageState,
} from "./page-reducer";
import UnitFormReducer, {
  initialUnitFormState,
  isUnitFormAction,
  UnitFormAction,
  UnitFormState,
} from "./unit-form-reducer";

export interface AppState {
  unitFormState: UnitFormState;
  pageState: PageState;
}

export const initialAppState: AppState = {
  unitFormState: initialUnitFormState,
  pageState: initialPageState,
};

export type AppAction = UnitFormAction | PageAction;

export default function AppReducer(state: AppState, action: AppAction) {
  if (isPageAction(action)) {
    return {
      ...state,
      pageState: PageReducer(state.pageState, action),
    };
  }
  if (isUnitFormAction(action)) {
    return {
      ...state,
      unitFormState: UnitFormReducer(state.unitFormState, action),
    };
  }

  throw new Error(`Unhandled action: ${action}`);
}
