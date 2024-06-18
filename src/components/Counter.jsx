import { useState } from "react";

export const Counter = () => {
  const [num, setNum] = useState(0);
  const names = ["Alice", "Bob", "Charlie", "Dave"];
  // const addNum = () => {
  //   setNum((prev) => prev + 1);
  // };

  // const minusNum = () => {
  //   if (num === 0) {
  //     return alert("angka tidak boleh minus");
  //   }
  //   // prev => previous value
  //   setNum((prev) => prev - 1);
  // };

  return (
    // <div className="">
    //   <h1 className="text-center">Counter</h1>
    //   <div className="border-[4px] border-black w-[90%] mx-auto h-[300px] mt-[50px] flex justify-center items-center gap-[40px]">
    //     <button
    //       className="bg-blue-500 text-white w-[200px] h-[200px] text-[100px] font-bold rounded-full"
    //       onClick={addNum}
    //     >
    //       +
    //     </button>
    //     <div className="text-[200px]">{num}</div>
    //     <button
    //       className="bg-blue-500 text-white w-[200px] h-[200px] text-[100px] font-bold rounded-full"
    //       onClick={minusNum}
    //     >
    //       -
    //     </button>
    //   </div>
    // </div>
    <div className=" ">
      <h1>Daftar Nama</h1>
      <ul>
        {
          // names.map((name) => (
          //   <li>{name}</li>
          // ))
          names
            .filter((item) => item.includes("A"))
            .map((name) => {
              return <li>{name}</li>;
            })
        }
      </ul>
    </div>
  );
};
