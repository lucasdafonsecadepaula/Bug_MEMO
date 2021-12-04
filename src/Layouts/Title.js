import React, { useState } from "react";

export default function test({styles}) {
  const [newPlace, setNewPlace] = useState(styles);

  const dragStart = (e) => {
    if (e.clientY === 0) return;
    
    setNewPlace({...newPlace, top: e.clientY,left: e.clientX});
  };

  return (
    <>
      <div
        style={newPlace}
        className={"bg-win98-p p-1 border-2 border-t-white border-l-white absolute"}
      >
        <div
          draggable="true"
          onDrag={(e) => dragStart(e)}
          className="bg-gradient-to-r from-blue-800 to-blue-300 font-bold text-white text-sm mb-1 flex justify-between items-center"
        >
          <div className="p-1">{"<h1>Titulo</h1>"}</div>
          <div className="p-1 mx-1 flex flex-row">
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
          <h1 className="text-6xl font-bold">
            Bug MEMO
          </h1>
        </div>
      </div>


    </>
  );
}

// import React, { useEffect, useState } from "react";

// export default function Title() {
//   const [array, setArray] = useState();

//   useEffect(() => {
//     setTimeout(() => {
//       setArray(["z-40 -top-4 -left-4"]);
//     }, 3000);

//     setTimeout(() => {
//       setArray(["z-40 -top-4 -left-4", "z-30 -top-8 -left-8"]);
//     }, 4000);

//     setTimeout(() => {
//       setArray([
//         "z-40 -top-4 -left-4",
//         "z-30 -top-8 -left-8",
//         "z-20 -top-12 -left-12",
//         "z-10 -top-16 -left-16",
//         "z-0 -top-20 -left-20",
//       ]);
//     }, 4500);
//   }, []);

//   return (
//     <>
//       <div className="bg-blueish rounded-t-lg mt-8 text-left border-t-4 border-solid border-opacity-30 border-blueish">
//         <div className="bg-secondary m-1 text-left p-3">
//           <h1 className="text-6xl font-bold inline-flex">
//             B<div className="relative top-4">u</div>g M
//             <div className="relative bottom-5">E</div>MO
//           </h1>
//         </div>

//         <div className="z-50 relative">
//           <div className="absolute -top-32 -left-0 bg-blueish rounded-t-lg mt-8 text-left border-t-4 border-solid border-opacity-30 border-blueish">
//             <div className="bg-secondary m-1 text-left p-3">
//               <h1 className="text-6xl font-bold inline-flex">
//                 B<div className="relative top-4">u</div>g M
//                 <div className="relative bottom-5">E</div>MO
//               </h1>
//             </div>
//           </div>
//         </div>

//         {array &&
//           array.map((e) => (
//             <div key={e} className={"relative " + e}>
//               <div className="absolute -top-32 -left-0 bg-blueish rounded-t-lg mt-8 text-left border-t-4 border-solid border-opacity-30 border-blueish">
//                 <div className="bg-secondary m-1 text-left p-3">
//                   <h1 className="text-6xl font-bold inline-flex">
//                     B<div className="relative top-4">u</div>g M
//                     <div className="relative bottom-5">E</div>MO
//                   </h1>
//                 </div>
//               </div>
//             </div>
//           ))}
//       </div>
//     </>
//   );
// }
