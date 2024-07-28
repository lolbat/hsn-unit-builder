import { ReactNode, useContext } from "react";
import { DispatchContext } from "../App";

interface FooterProps {
  page: string;
}

export default function Footer({ page }: FooterProps) {
  const dispatch = useContext(DispatchContext);

  function handlePageChange(page: string) {
    dispatch({
      type: "page-change",
      newPage: page,
    });
  }

  let footer: ReactNode;
  if (page === "changelog") {
    footer = (
      <footer>
        <div className="back">
          <a href="#" onClick={() => handlePageChange("")}>
            Back
          </a>
        </div>
      </footer>
    );
  } else {
    footer = (
      <footer>
        <div className="contact">
          Contact:{" "}
          <a href="mailto:hsnunitbuilder@gmail.com" target="_blank">
            hsnunitbuilder@gmail.com
          </a>
        </div>
        <div className="changelog-button">
          <a href="#" onClick={() => handlePageChange("changelog")}>
            Changelog
          </a>
        </div>
      </footer>
    );
  }

  return footer;
}
