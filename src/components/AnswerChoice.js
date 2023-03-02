function AnswerChoice(props) {
  return (
    <div className="answer-choice">
      <button
        className="largerText"
        onClick={() => props.setAnswerState(props.answer)}
      >
        {props.answer}
      </button>
    </div>
  );
}

export default AnswerChoice;
