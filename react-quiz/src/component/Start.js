// src/components/Home.js
import React from "react";
import ReactQuiz from "./ReactQuiz";
import { useState } from 'react';

function Start() {
  const [start ,setStart]=useState(false);
  function handleClick(){
    setStart(()=>!start)
  }
 
  return (
    <>
      {!start ? (
        <>
          <h1>Welcome to the Quiz App</h1>
          <button className="btn-start" onClick={()=>handleClick()}>Start Quiz</button>
        </>
      ) : (
        <ReactQuiz />
      )}
    </>
  );
};

export default Start;
