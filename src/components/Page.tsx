import { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";

interface PageProps {
  page: string;
  children: ReactNode;
}

export default function Page({ page, children }: PageProps) {
  return (
    <>
      <Header />
      {children}
      <Footer page={page} />
    </>
  );
}
