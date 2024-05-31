function StateQuestion({state,questions}) {
    return (
      <>
        <div className="state-Q">
          <div
            className="loader"
            style={{ width: `calc(50vw*${state.indexQ + 1}/40)` }}
          ></div>
        </div>
        <div className="result">
          <p>
            Question {state.indexQ + 1}/{questions.length}
          </p>
          <p>
            {state.points}/{questions.length * 10}
          </p>
        </div>
      </>
    );
}

export default StateQuestion
