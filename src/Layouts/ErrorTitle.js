import React, { useEffect, useState } from "react";
import Title from "./Title";

export default function ErrorTitle() {
  const [array, setArray] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setArray([{ top: 70, left: "42%", zIndex: 9 }]);
    }, 3000);

    setTimeout(() => {
      setArray([
        { top: 70, left: "42%", zIndex: 9 },
        { top: 60, left: "41%", zIndex: 8 },
      ]);
    }, 4000);

    setTimeout(() => {
      setArray([
        { top: 70, left: "42%", zIndex: 9 },
        { top: 60, left: "41%", zIndex: 8 },
        { top: 50, left: "40%", zIndex: 7 },
        { top: 40, left: "39%", zIndex: 6 },
        { top: 30, left: "38%", zIndex: 5 },
      ]);
    }, 4500);
  }, []);

  return (
    <>
      {array.map((e) => (
        <Title key={e.zIndex} styles={e} />
      ))}
      {/* <Title styles={styles} /> */}

      {/* <div className="bg-blueish rounded-t-lg mt-8 text-left border-t-4 border-solid border-opacity-30 border-blueish">
            <div className="bg-secondary m-1 text-left p-3">
              <h1 className="text-6xl font-bold inline-flex">
                B<div className="relative top-4">u</div>g M
                <div className="relative bottom-5">E</div>MO
              </h1>
            </div>
    
            <div className="z-50 relative">
              <div className="absolute -top-32 -left-0 bg-blueish rounded-t-lg mt-8 text-left border-t-4 border-solid border-opacity-30 border-blueish">
                <div className="bg-secondary m-1 text-left p-3">
                  <h1 className="text-6xl font-bold inline-flex">
                    B<div className="relative top-4">u</div>g M
                    <div className="relative bottom-5">E</div>MO
                  </h1>
                </div>
              </div>
            </div>
    
            {array &&
              array.map((e) => (
                <div key={e} className={"relative " + e}>
                  <div className="absolute -top-32 -left-0 bg-blueish rounded-t-lg mt-8 text-left border-t-4 border-solid border-opacity-30 border-blueish">
                    <div className="bg-secondary m-1 text-left p-3">
                      <h1 className="text-6xl font-bold inline-flex">
                        B<div className="relative top-4">u</div>g M
                        <div className="relative bottom-5">E</div>MO
                      </h1>
                    </div>
                  </div>
                </div>
              ))}
          </div> */}
    </>
  );
}
