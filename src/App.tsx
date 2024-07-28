import UnitForm from "./components/UnitForm";
import "./App.css";
import Page from "./components/Page";
import { ReactNode, useReducer } from "react";
import Changelog from "./components/Changelog";
import AppReducer, { initialAppState } from "./reducers/app-reducer";
import DispatchContext from "./contexts/dispatch-context";

function App() {
  const [appState, dispatch] = useReducer(AppReducer, initialAppState);

  let pageContent: ReactNode;
  if (appState.pageState.currentPage === "changelog") {
    pageContent = <Changelog />;
  } else {
    pageContent = (
      <UnitForm
        vehicleClass={appState.unitFormState.vehicleClass}
        unit={appState.unitFormState.unit}
      />
    );
  }

  return (
    <DispatchContext.Provider value={dispatch}>
      <Page page={appState.pageState.currentPage}>{pageContent}</Page>
    </DispatchContext.Provider>
  );
}

export default App;
