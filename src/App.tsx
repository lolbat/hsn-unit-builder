import UnitForm from "./components/UnitForm";
import "./App.css";
import Page from "./components/Page";
import { ReactNode, useState } from "react";
import Changelog from "./components/Changelog";

function App() {
  const [page, setPage] = useState("");

  let pageContent: ReactNode;
  if (page === "changelog") {
    pageContent = <Changelog />;
  } else {
    pageContent = <UnitForm />;
  }

  return (
    <Page page={page} handlePageChange={setPage}>
      {pageContent}
    </Page>
  );
}

export default App;
