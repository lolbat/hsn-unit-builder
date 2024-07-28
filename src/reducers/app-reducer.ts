import VehicleClass from "../models/vehicle-class";
import Unit from "../models/unit";

export interface AppState {
  unitFormState: {
    vehicleClass: VehicleClass;
    unit: Unit;
  };
  pageState: {
    currentPage: string;
    previousPage: string | null;
  };
}

export type AppAction =
  | { type: "vehicle-class-change"; vehicleClass: VehicleClass }
  | { type: "unit-change"; unit: Unit }
  | { type: "page-change"; newPage: string };

export default function AppReducer(state: AppState, action: AppAction) {
  switch (action.type) {
    case "vehicle-class-change": {
      const newState: AppState = {
        ...state,
        unitFormState: {
          ...state.unitFormState,
          vehicleClass: action.vehicleClass,
        },
      };
      return newState;
    }
    case "unit-change": {
      const newState: AppState = {
        ...state,
        unitFormState: {
          ...state.unitFormState,
          unit: action.unit,
        },
      };
      return newState;
    }
    case "page-change": {
      const newState: AppState = {
        ...state,
        pageState: {
          currentPage: action.newPage,
          previousPage: state.pageState.currentPage,
        },
      };
      return newState;
    }
    default: {
      throw new Error(`Unhandled action: ${action}`);
    }
  }
}
