import React, { useState } from "react";

export default function test() {
  const [newPlace, setNewPlace] = useState();

  const dragStart = (e) => {
    if (e.clientY === 0) return;
    const place = {
      position: "absolute",
      top: e.clientY,
      left: e.clientX,
    };
    setNewPlace(place);
  };

  return (
    <>
      <div className="bg-win98-background w-full min-h-screen flex items-center justify-center">
        {/* janela */}

        <div
          style={newPlace}
          className="bg-win98-p p-1 border-2 border-t-white border-l-white min-w-56"
        >
          <div
            draggable="true"
            onDrag={(e) => dragStart(e)}
            className=" w-full bg-gradient-to-r from-blue-800 to-blue-300 font-bold text-white text-sm mb-1 flex justify-between items-center"
          >
            <div className="pl-1">{"<h1>Titulo</h1>"}</div>
            <div className="p-1">
              <button
                type="button"
                className="bg-win98-p text-black font-bold w-5 border border-t-white border-l-white active:border-t-black active:border-l-black active:border-r-white active:border-b-white"
              >
                <div className="pr-1">_</div>
              </button>
              <button
                type="button"
                className="bg-win98-p text-black font-bold mx-1 w-5 border border-t-white border-l-white active:border-t-black active:border-l-black active:border-r-white active:border-b-white"
              >
                🗔
              </button>
              <button
                type="button"
                className="bg-win98-p text-black w-5 border border-t-white border-l-white active:border-t-black active:border-l-black active:border-r-white active:border-b-white"
              >
                ×
              </button>
            </div>
          </div>
          <div className="bg-white w-full border-2 border-b-white border-r-white p-2 cursor-text">
            ....Texto
          </div>
        </div>
      </div>
    </>
  );
}
