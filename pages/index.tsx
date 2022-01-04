import type { NextPage } from 'next'
import React from 'react';
import Router from "next/router";
const Home: NextPage = () => {  
  React.useEffect(() => {
    Router.push("/glory");
  });
  return <></>;
}
export default Home
