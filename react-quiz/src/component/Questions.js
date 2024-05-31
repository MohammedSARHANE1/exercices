import Options from "./Options";
function Questions({ question, handleAnswer, options, state, correctOption }) {
  return (
    <ul className="quiz">
      <h3>{question}</h3>
      <Options
        options={options}
        handleAnswer={handleAnswer}
        state={state}
        correctOption={correctOption}
      />
    </ul>
  );
}

export default Questions;
