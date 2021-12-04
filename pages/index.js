import React, { useEffect, useState } from "react";
import Head from "next/head";
import Title from "../src/Layouts/Title";
import Form from "../src/Layouts/Form";
import Cards from "../src/Layouts/Cards";

export default function Home() {
  return (
    <>
      <Head>
        <title>Bug MEMO</title>
        <link rel="icon" href="/bug.ico" />
      </Head>

      <div className="flex flex-col items-center min-h-screen py-2 bg-gray-200">
        <main className="flex flex-col items-center w-full flex-1 px-20 text-center">
          <Title />

          <div className="bg-blueish rounded-t-lg mt-8 text-left border-t-4 border-solid border-opacity-30 border-blueish">
            <h2 className="pl-4 text-white">Funcionalidade?</h2>
            <div className="bg-secondary m-1 text-left p-3">
              <p className="text-base font-serif">
                Eu criei esse site apenas para demonstrar minhas habilidades
                tanto no frontend, quanto no backend. <br /> No frontend eu
                utilizei o Next JS, um framework do React, juntamente com o
                Tailwind CSS. <br /> E o backend esta rodando no Node JS,
                juntamente com o Express e o meu database é o da MongoDB. <br />{" "}
                Caso você queira colocar uma historia de um Bug que aconteceu
                com você sinta se avontade para contar sua historia. <br />{" "}
                Lembrando que, pedimos um email apenas para aumentar a segurança
                do nosso backend, limitando as gravações no nosso DB por email
                (3 gravações por email).
              </p>
            </div>
          </div>

          <div className="grid grid-cols-6 gap-2 w-full mt-10">
            <div className="col-span-4">
              <Cards />
            </div>
            <div className="col-span-2">
              <Form />
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
