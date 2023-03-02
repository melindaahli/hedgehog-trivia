import AnswerChoice from "./AnswerChoice";

function Question(props) {
  const answers = props.answerChoice;
  const answerChoices = answers.map((choice) => (
    <AnswerChoice
      setAnswerState={props.setAnswerState}
      answer={choice}
      key={choice}
    />
  ));

  return (
    <div>
      <div className="largerText">{props.question}</div>
      <div>{answerChoices}</div>
    </div>
  );
}

export default Question;
