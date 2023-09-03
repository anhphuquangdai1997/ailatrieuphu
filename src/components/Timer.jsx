import React, { useEffect, useState } from "react";

const Timer = ({ pause, setPause, setStop, currentQuestion }) => {
  const [timer, setTimer] = useState(30);

  //   neu de [] thi no se giam 2 thay cho 1 ------ hoi ki cho nay
  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       setTimer((pre) => pre - 1);
  //     }, 1000);
  //   }, []);

  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       setTimer((prev) => prev - 1);
  //     }, 1000);
  //   });
  useEffect(() => {
    if (timer === 0) return setStop(true);
    if (!pause) {
      const interval = setInterval(() => {
        setTimer((pre) => pre - 1);
      }, 1000);
      //xoa dem - phai co cai nay no' moi chay dung
      return () => clearInterval(interval);
    }
  }, [pause, timer, setStop]);

  useEffect(() => {
    setPause(false);
    setTimer(30);
  }, [currentQuestion]); //khi thay doi cau hoi thi set lai 30s
  return <div className="timer">{timer}</div>;
  //   return timer;
};

export default Timer;
