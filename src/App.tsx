import UnitForm from "./components/UnitForm";
import "./App.css";
import Page from "./components/Page";
import { createContext, ReactNode, useReducer } from "react";
import Changelog from "./components/Changelog";
import VehicleClass, { LightBattleVehicle } from "./models/vehicle-class";
import Unit from "./models/unit";

interface AppState {
  unitFormState: {
    vehicleClass: VehicleClass;
    unit: Unit;
  };
  pageState: {
    currentPage: string;
    previousPage: string | null;
  };
}

type AppAction =
  | { type: "vehicle-class-change"; vehicleClass: VehicleClass }
  | { type: "unit-change"; unit: Unit }
  | { type: "page-change"; newPage: string };

const initialState: AppState = {
  unitFormState: {
    vehicleClass: LightBattleVehicle,
    unit: new Unit(LightBattleVehicle),
  },
  pageState: {
    currentPage: "",
    previousPage: null,
  },
};

function AppReducer(state: AppState, action: AppAction) {
  switch (action.type) {
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
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

const defaultDispatch = function () {
  throw new Error("Dispatch context misconfigured");
};

export const DispatchContext =
  createContext<(action: AppAction) => void>(defaultDispatch);

function App() {
  const [appState, dispatch] = useReducer(AppReducer, initialState);

  let pageContent: ReactNode;
  if (appState.pageState.currentPage === "changelog") {
    pageContent = <Changelog />;
  } else {
    pageContent = <UnitForm />;
  }

  return (
    <DispatchContext.Provider value={dispatch}>
      <Page page={appState.pageState.currentPage}>{pageContent}</Page>
    </DispatchContext.Provider>
  );
}

export default App;
