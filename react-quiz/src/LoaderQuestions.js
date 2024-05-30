import { useEffect, useState, useReducer } from "react";

const intialeValue = { indexQ: 0, isRight:null, isOver: false  };

function LoaderQuestions() {
  const [questions, setQuestion] = useState([]);
  const [state, dispatch] = useReducer(reducer, intialeValue);

  function reducer(state, action) {
    switch (action.type) {
      case "AnswerR":
        return { ...state, isRight: true };
      case "AnswerF":
        return { ...state, isRight: false };
      case "next":
        return { ...state, indexQ: state.indexQ + 1 };
      default:
        return;
    }
  }
  function handleNext() {
    
  
  dispatch({ type: "next" });

}

  function handleAwser(index) {
    if (index === correctOption) {
      dispatch({ type: "AnswerR" });
    }else{
       dispatch({ type: "AnswerF" });
    }

  }
  
  console.log(state.indexQ);
 console.log(questions)
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
      <div className="loader"></div>
      <div className="result">
        <p>`Question indexQ+1/question.length`</p>
        <p> score</p>
      </div>
      <ul className="quiz">
        <h3>{question}</h3>
        {options
          ? options.map((option, index) => (
              <button key={index} onClick={()=>handleAwser(index)}>
                {option}
              </button>
            ))
          : ""}
      </ul>
      <div className="footer">
        <div>timer</div>
        <button onClick={()=>handleNext()}>Next</button>
      </div>
    </div>
  );
}

export default LoaderQuestions;
