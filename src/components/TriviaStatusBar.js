function TriviaStatusBar(props) {
  let barWidth = props.currentQuestionNumber * 20;

  return (
    <div id="StatusBarContainer">
      <div id="StatusBar" style={{ width: `${barWidth}%` }}></div>
    </div>
  );
}

export default TriviaStatusBar;
