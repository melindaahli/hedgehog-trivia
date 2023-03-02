function NextQuestion(props) {
  return (
    <div>
      <button
        className="largerText"
        id="NextQButton"
        onClick={props.goToNextQuestion}
      >
        Next Question
      </button>
    </div>
  );
}

export default NextQuestion;
