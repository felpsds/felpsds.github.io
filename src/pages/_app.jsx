import React from "react";
import "@/styles/global.css";
import NoSSR from "@/components/NoSSR";

const App = ({ Component, pageProps }) => {
  return (
    <NoSSR>
      <Component {...pageProps} />
    </NoSSR>
  )
};


export default App;
