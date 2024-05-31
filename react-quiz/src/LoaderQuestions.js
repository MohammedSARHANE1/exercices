import { useEffect, useState, useReducer } from "react";
// import TimerComponent from "./TimerComponent";
import useTimer from "./useTimer";
import TimerComponent from "./TimerComponent";
const intialeValue = { indexQ: 0, isRight:null, isOver: false , isAnswer:false ,points:0 };

function LoaderQuestions() {
  const [questions, setQuestion] = useState([]);
  const [state, dispatch] = useReducer(reducer, intialeValue);
  const seconds=useTimer(40*30)

  function reducer(state, action) {
    switch (action.type) {
      case "AnswerR":
        return { ...state, isRight: true, isAnswer: true ,points:state.points+action.payload};
      case "AnswerF":
        return { ...state, isRight: false,isAnswer:true };
      case "next":
        return { ...state, indexQ: state.indexQ + 1, isAnswer: false };
      default:
        return;
    }
  }
  function handleNext() {
    
  if(!state.isAnswer) 
   return alert("Plz Answer first")
  dispatch({ type: "next" });
}

  function handleAwser(index) {
    if (index === correctOption) {
      dispatch({ type: "AnswerR"  ,payload:points});
    }else{
       dispatch({ type: "AnswerF" });
    }

  }
  
  useEffect(function(){
    setTimeout(() => {
      
    }, 1000);
  },[])

  useEffect(function () {
    function fectchData() {
      fetch("http://localhost:8000/questions")
        .then((res) => res.json())
        .then((data) => setQuestion(data));
    }
    fectchData();
  }, []);

  const { correctOption, id, options, points, question } = { ...questions[state.indexQ] };
  return (
    <div className="state-Q">
      <div
        className="loader"
        style={{ width: `calc(50vw*${state.indexQ + 1}/40)` }}
      ></div>
      <div className="result">
        <p>
          Question {state.indexQ + 1}/{questions.length}
        </p>
        <p> {state.points}</p>
      </div>
      <ul className="quiz">
        <h3>{question}</h3>
        {options
          ? options.map((option, index) => (
              <button
                className="btn-Answer"
                key={index}
                onClick={() => handleAwser(index)}
                disabled={state.isAnswer}
              >
                {option}
              </button>
            ))
          : ""}
      </ul>
      <div className="footer">
        <TimerComponent seconds={seconds} />
        <button onClick={() => handleNext()} disabled={!state.isAnswer}>
          Next
        </button>
      </div>
    </div>
  );
}

export default LoaderQuestions;
 