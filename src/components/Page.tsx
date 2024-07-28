import { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";

interface PageProps {
  page: string;
  handlePageChange(page: string): void;
  children: ReactNode;
}

export default function Page({ page, handlePageChange, children }: PageProps) {
  return (
    <>
      <Header />
      {children}
      <Footer page={page} handlePageChange={handlePageChange} />
    </>
  );
}
