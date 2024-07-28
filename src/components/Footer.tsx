import { ReactNode } from "react";

interface FooterProps {
  page: string;
  handlePageChange(page: string): void;
}

export default function Footer({ page, handlePageChange }: FooterProps) {
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
