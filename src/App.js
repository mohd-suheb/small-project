import React from "react";
import Testominial from "./Component.js/Testominial";
import reviews from "./data.js";

const App = () => {
 
  return <div className="flex flex-col w-[100vw] h-[100vh] justify-center items-center bg-gray-200">

    <div className="text-center">
      <h1 className="text-4xl font-bold">our Testomiial </h1>
      <div className="bg-violet-400 h-[4px] w-1/5  mt-1 mx-auto"></div>

  
      <Testominial reviews = {reviews}/>
    </div>
  </div>;
};

export default App;
