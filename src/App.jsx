import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import Question from "./components/Question";
import Timer from "./components/Timer";
import StartScreen from "./components/StartScreen";

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [start, setStart] = useState(false); //start = false thi dong ho chua dem  - khi nhan nut Start thi dong ho moi dem
  const [stop, setStop] = useState(false);
  const [pause, setPause] = useState(false); //pause khi chon vao 1 dap an

  const data = [
    {
      id: 1,
      question: "What is the capital of France?",
      answers: [
        { text: "Paris", correct: true },
        { text: "New York", correct: false },
        { text: "London", correct: false },
        { text: "Berlin", correct: false },
      ],
    },
    {
      id: 2,
      question: "Who wrote the play 'Romeo and Juliet'?",
      answers: [
        { text: "William Shakespeare", correct: true },
        { text: "Michel Lander", correct: false },
        { text: "Sam Freeman", correct: false },
        { text: "Bethoven", correct: false },
      ],
    },
    {
      id: 3,
      question: "What is the chemical symbol for water??",
      answers: [
        { text: "H20", correct: true },
        { text: "CO2", correct: false },
        { text: "He2I", correct: false },
        { text: "H3C3", correct: false },
      ],
    },
    {
      id: 4,
      question: "Which planet is known as the 'Red Planet'?",
      answers: [
        { text: "Venus", correct: false },
        { text: "Mars", correct: true },
        { text: "Jupiter", correct: false },
        { text: "Saturn", correct: false },
      ],
    },
    {
      id: 5,
      question: "What is the largest mammal in the world?",
      answers: [
        { text: "African Elephant", correct: false },
        { text: "Blue Whale", correct: true },
        { text: "Giraffe", correct: false },
        { text: "Hippopotamus", correct: false },
      ],
    },
    {
      id: 6,
      question: "What is the chemical symbol for gold?",
      answers: [
        { text: "Au", correct: true },
        { text: "Ag", correct: false },
        { text: "Bg", correct: false },
        { text: "Br", correct: false },
      ],
    },
    {
      id: 7,
      question: "Which gas do plants absorb from the atmosphere?",
      answers: [
        { text: "Carbon Dioxide", correct: true },
        { text: "Oxygen", correct: false },
        { text: "Nitrogen", correct: false },
        { text: "Hydrogen", correct: false },
      ],
    },
    {
      id: 8,
      question: "What is the largest organ in the human body?",
      answers: [
        { text: "Skin", correct: true },
        { text: "Head", correct: false },
        { text: "Leg", correct: false },
        { text: "Hand", correct: false },
      ],
    },
    {
      id: 9,
      question: "Who painted the Mona Lisa?",
      answers: [
        { text: "Leonardo da Vinci", correct: true },
        { text: "Pablo Picasso", correct: false },
        { text: "Leonardo da Vinci", correct: false },
        { text: "Michelangelo", correct: false },
      ],
    },
    {
      id: 10,
      question: "Which gas makes up the majority of Earth's atmosphere?",
      answers: [
        { text: "Nitrogen", correct: true },
        { text: "Carbon Dioxide", correct: false },
        { text: "Oxygen", correct: false },
        { text: "Methane", correct: false },
      ],
    },
    {
      id: 11,
      question:
        "In which year did Christopher Columbus first arrive in the Americas?",
      answers: [
        { text: "1492", correct: true },
        { text: "1588", correct: false },
        { text: "1776", correct: false },
        { text: "1620", correct: false },
      ],
    },
    {
      id: 12,
      question:
        "Which planet is known as the 'Morning Star' and 'Evening Star'?",
      answers: [
        { text: "Venus", correct: true },
        { text: "Mars", correct: false },
        { text: "Mercury", correct: false },
        { text: "Saturn", correct: false },
      ],
    },
    {
      id: 13,
      question: "What is the world's largest ocean?",
      answers: [
        { text: "Pacific Ocean", correct: true },
        { text: "Indian Ocean", correct: false },
        { text: "Atlantic Ocean", correct: false },
        { text: "Arctic Ocea", correct: false },
      ],
    },
    {
      id: 14,
      question: "Who wrote the famous novel 'To Kill a Mockingbird'?",
      answers: [
        { text: "Harper Lee", correct: true },
        { text: "F. Scott Fitzgerald", correct: false },
        { text: "Mark Twain", correct: false },
        { text: "George Orwell", correct: false },
      ],
    },
    {
      id: 15,
      question: "In which sport is the term 'slam dunk' commonly used?",
      answers: [
        { text: "Basketball", correct: true },
        { text: "Soccer", correct: false },
        { text: "Tennis", correct: false },
        { text: "Golf", correct: false },
      ],
    },
  ];
  const moneyPyramic = [
    { id: 1, amount: "200.000 VNĐ" },
    { id: 2, amount: "400.000 VNĐ" },
    { id: 3, amount: "600.000 VNĐ" },
    { id: 4, amount: "1.000.000 VNĐ" },
    { id: 5, amount: "2.000.000 VNĐ" },
    { id: 6, amount: "3.000.000 VNĐ" },
    { id: 7, amount: "6.000.000 VNĐ" },
    { id: 8, amount: "10.00.000 VNĐ" },
    { id: 9, amount: "14.000.000 VNĐ" },
    { id: 10, amount: "22.000.000 VNĐ" },
    { id: 11, amount: "30.000.000 VNĐ" },
    { id: 12, amount: "40.000.000 VNĐ" },
    { id: 13, amount: "80.000.000 VNĐ" },
    { id: 14, amount: "150.000.000 VNĐ" },
    { id: 15, amount: "250.000.000 VNĐ" },
  ].reverse();

  const earnPyramic = [...moneyPyramic].reverse();

  // const datar = data.reverse();

  // useEffect(() => {

  // }, [currentQuestion]); //khi cau hoi thay doi => tinh so tien dang thu dc
  return (
    <div className="app">
      <div className="main">
        {stop && (
          // dung` thi hien thi ra so tien9
          <h1 className="earnmoney">
            Bạn nhận được số tiền:{" "}
            {currentQuestion > 1 ? earnPyramic[currentQuestion - 2].amount : 0}
          </h1>
        )}
        {!stop && !start && <StartScreen setStart={setStart} />}
        {!stop && start && (
          <>
            <div className="top">
              <Timer
                pause={pause}
                setPause={setPause}
                setStop={setStop}
                currentQuestion={currentQuestion}
              />
            </div>
            <div className="bottom">
              <Question
                data={data}
                setStop={setStop}
                setPause={setPause}
                currentQuestion={currentQuestion}
                setCurrentQuestion={setCurrentQuestion}
              />
            </div>
          </>
        )}
      </div>
      <div className="pyramid">
        <ul className="moneyList">
          {moneyPyramic.map((m) => (
            <li
              className={
                currentQuestion == m.id
                  ? "moneyListItem active"
                  : "moneyListItem"
              }
            >
              <span>{m.id}</span>
              <span>{m.amount}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
