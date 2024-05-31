function Options({ options, handleAnswer, state,correctOption }) {
  console.log(correctOption);
  return (
    <>
      {options
        ? options.map((option, index) => (
            <button
              className={`btn-Answer  ${
                index === state.answer
                  ? (state.answer === correctOption
                    ? " btn-AnswerR "
                    : "btn-AnswerF")
                  : ""
              }`}
              key={option}
              onClick={() => {
                handleAnswer(index);
              }}
              disabled={state.isAnswer}
            >
              {option}
            </button>
          ))
        : ""}
    </>
  );
}

export default Options;
