import UnitForm from "./components/UnitForm";
import "./App.css";
import Page from "./components/Page";
import { ReactNode, useReducer } from "react";
import Changelog from "./components/Changelog";
import { LightBattleVehicle } from "./models/vehicle-class";
import Unit from "./models/unit";
import AppReducer, { AppState } from "./reducers/app-reducer";
import DispatchContext from "./contexts/dispatch-context";

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
