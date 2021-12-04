import React, { useEffect, useState } from "react";
import Head from "next/head";
import Title from "../src/Layouts/Title";
import ErrorTitle from "../src/Layouts/ErrorTitle";
import Form from "../src/Layouts/Form";
import Cards from "../src/Layouts/Cards";


export default function Home() {
  return (
    <>
      <Head>
        <title>Bug MEMO</title>
        <link rel="icon" href="/bug.ico" />
      </Head>

      <div className="flex flex-col items-center min-h-screen py-2 bg-win98-background">
        <main className="flex flex-col items-center w-full flex-1 px-20">
          
          
          <Title styles={{zIndex:10, top: 80}}/>
          <ErrorTitle/>

          <div className="h-44"></div>
          <div className="bg-black">A</div>
        </main>
      </div>
    </>
  );
}
