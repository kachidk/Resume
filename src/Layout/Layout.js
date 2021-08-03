import React from "react";
import Footer from "./Footer";
import Header from "./Header";

function Layout(props) {
  return (
    <div className="flex flex-col justify-between h-screen">
      <div>
        <Header />
        <div>{props.children}</div>
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
