import Head from "next/head";
import React from "react";
import Header from "../components/header/header";
import Main from "../components/main/main";

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Obridge</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Main />
    </React.Fragment>
  );
}
