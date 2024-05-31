import { useReducer } from "react";
import useTimer from "./useTimer";
import TimerComponent from "./TimerComponent";
import Questions from "./Questions";
import StateQuestion from "./StateQuestion";

const intialeValue = {
  indexQ: 0,
  isRight: null,
  isOver: false,
  isAnswer: false,
  points: 0,
};

function LoaderQuestions({ questions }) {
  const seconds = useTimer(25 * 30);
  const [state, dispatch] = useReducer(reducer, intialeValue);

  function reducer(state, action) {
    switch (action.type) {
      case "AnswerR":
        return {
          ...state,
          answer:action.payload.index,
          isRight: true,
          isAnswer: true,
          points: state.points + action.payload.points,
        };
      case "AnswerF":
        return { ...state, isRight: false, isAnswer: true,answer:action.payload };
      case "next":
        return { ...state, indexQ: state.indexQ + 1, isAnswer:false,answer:null };
      default:
        return;
    }
  }
  function handleNext() {
    if (!state.isAnswer) return alert("Plz Answer first");
    dispatch({ type: "next" });
  }

  function handleAnswer(index) {
    if (index === correctOption) {
      dispatch({ type: "AnswerR", payload: {points,index} });
    } else {
      dispatch({ type: "AnswerF" ,payload:index});
    }
  }

  const { correctOption, options, points, question } = {
    ...questions[state.indexQ],
  };
  return (
    <>
      <StateQuestion questions={questions} state={state} />
      <Questions
        options={options}
        handleAnswer={handleAnswer}
        question={question}
        correctOption={correctOption}
        state={state}
      />
      <div className="footer">
        <TimerComponent seconds={seconds} />
        <button onClick={() => handleNext()} disabled={!state.isAnswer}>
          Next
        </button>
      </div>
    </>
  );
}

export default LoaderQuestions;
