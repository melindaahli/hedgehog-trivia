import React, { useState } from "react";
import "./App.css";
import data from "./sample_data.json";
import Question from "./components/Question.js";
import NextQuestion from "./components/NextQuestion.js";
import TriviaStatusBar from "./components/TriviaStatusBar";
import ResetButton from "./components/ResetButton";

function App() {
  let [currentQuestionNumber, setCurrentQuestionNumber] = useState(0);
  let [answerState, setAnswerState] = useState(null);

  function getCorrectAnswer() {
    return data[currentQuestionNumber].question.choices[
      data[currentQuestionNumber].question.correct_choice_index
    ];
  }

  function questionAnswered() {
    if (answerState === null) {
      return <p>Click an answer above.</p>;
    } else if (answerState === getCorrectAnswer()) {
      return (
        <div>
          <p>Correct!</p>
          <NextQuestion
            goToNextQuestion={goToNextQuestion}
            currentQuestionNumber={currentQuestionNumber}
          />
        </div>
      );
    } else {
      return <p>Incorrect!</p>;
    }
  }

  function goToNextQuestion() {
    setCurrentQuestionNumber(currentQuestionNumber + 1);
    setAnswerState(null);
  }

  function resetTrivia() {
    setCurrentQuestionNumber(0);
    setAnswerState(null);
  }

  function triviaScreen() {
    if (currentQuestionNumber + 1 > data.length) {
      return (
        <div className="app">
          <TriviaStatusBar currentQuestionNumber={currentQuestionNumber} />
          <h1 className="title">Trivia!</h1>
          <img
            id="endingGif"
            src="https://media.tenor.com/yCistEbnddgAAAAi/spikethe-hedgehog-jams.gif"
            alt="hedgehog dancing"
          />
          <ResetButton resetTrivia={resetTrivia} />
        </div>
      );
    } else {
      return (
        <div className="app">
          <TriviaStatusBar currentQuestionNumber={currentQuestionNumber} />
          <h1 className="title">Trivia!</h1>
          <p className="largerText">Question {currentQuestionNumber + 1}</p>
          <img
            id="mushroomSticker"
            src="https://greenlime.co.za/wp-content/uploads/2021/08/Mushrooms-2.png"
            alt="mushrooms"
          />
          <Question
            question={data[currentQuestionNumber].question.text}
            answerChoice={data[currentQuestionNumber].question.choices}
            answerState={answerState}
            setAnswerState={setAnswerState}
          />
          <img
            id="hedgehogSticker"
            src="https://64.media.tumblr.com/04fd457dddbc97bde9d28e7dedb05a99/c28ed97acebcee4a-21/s500x750/cc7c44edf604537611614632324c3eb9ae50f966.png"
            alt="hedgehog"
          />
          <div className="largerText">{questionAnswered()}</div>
        </div>
      );
    }
  }

  return <div>{triviaScreen()}</div>;
}

export default App;
