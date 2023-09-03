import React, { useEffect, useState } from "react";
import useSound from "use-sound";
import play from "../assets/play.mp3";
import correct from "../assets/correct.mp3";
import wrong from "../assets/wrong.mp3";
const Question = ({
  data,
  setStop,
  setPause,
  currentQuestion,
  setCurrentQuestion,
}) => {
  console.log(data);
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [className, setClassName] = useState("answer");
  const [correctAnswer] = useSound(correct);
  const [wrongAnswer] = useSound(wrong);

  // const playIt = () => {
  //   letsPlay();
  // };
  // useEffect(() => {
  //   playIt();
  // }, []);

  const handleAnswerClick = (a) => {
    setSelectedAnswer(a);
    setClassName("answer active");
    // setPause(true);   //??????????? - co cai nay la 2 cai set phia tren ko tac dung

    // cho 3s de check ket qua dung sai
    setTimeout(() => {
      if (a.correct) {
        setClassName("answer correct");
      } else {
        setClassName("answer wrong");
      }
    }, 3000);
    //sau 6s moi check
    setTimeout(() => {
      if (a.correct) {
        correctAnswer(); //play sound
        setTimeout(() => {
          setCurrentQuestion((pre) => pre + 1);
          setSelectedAnswer(null);
        }, 1000);
      } else {
        wrongAnswer(); //playsound
        setTimeout(() => {
          setStop(true);
        }, 1000);
      }
    }, 5000);
  };
  useEffect(() => {
    setQuestion(data[currentQuestion - 1]);
  }, [data, currentQuestion]);
  return (
    <div className="questionsections">
      <div className="question">{question?.question}</div>
      <div className="answers">
        {question?.answers.map((a) => (
          <div
            className={selectedAnswer === a ? className : "answer"}
            key={a.text}
            onClick={() => handleAnswerClick(a)}
          >
            {a.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Question;
