import { useState, useEffect } from "react";

export default function Home() {
  const [firstNum, setFirstNum] = useState("");
  const [secondNum, setSecondNum] = useState("");
  const [operator, setOperator] = useState("");
  const [displayNumber, setDisplayNumber] = useState("0");

  const handleNumberClick = (number: string) => {
    if (!operator) {
      setFirstNum(firstNum + number);
      setDisplayNumber(firstNum + number);
    } else {
      setSecondNum(secondNum + number);
      setDisplayNumber(secondNum + number);
    }
  };

  const handleOperatorClick = (operation: string) => {
    setOperator(operation);
  };

  const handleSubmit = async () => {
    const data = await fetch(
      `/api/calc?term1=${firstNum}&term2=${secondNum}&operator=${operator}`
    ).then((res) => res.json());

    if (data.result) {
      setDisplayNumber(data.result);
      setFirstNum("");
      setSecondNum("");
      setOperator("");
    }
  };

  const resetCalc = () => {
    setFirstNum("");
    setSecondNum("");
    setOperator("");
    setDisplayNumber("0");
  };

  useEffect(() => {
    console.log(firstNum, secondNum, operator, displayNumber);
  }, [firstNum, secondNum, operator, displayNumber]);

  return (
    <>
      <div className="min-w-screen min-h-screen bg-gray-100 flex items-center justify-center px-5 py-5">
        <div
          className="w-full mx-auto rounded-xl bg-gray-100 shadow-xl text-gray-800 relative overflow-hidden"
          style={{ maxWidth: 300 }}
        >
          <div className="w-full h-40 bg-gradient-to-b from-gray-800 to-gray-700 flex items-end text-right">
            <div className="w-full py-5 px-6 text-6xl text-white font-thin">
              {displayNumber}
            </div>
          </div>
          <div className="w-full bg-gradient-to-b from-indigo-400 to-indigo-500">
            <div className="flex w-full">
              <div className="w-1/4 border-r border-b border-indigo-400">
                <button
                  onClick={resetCalc}
                  className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-opacity-50 text-xl font-light"
                >
                  C
                </button>
              </div>
              <div className="w-1/4 border-r border-b border-indigo-400">
                <button className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-opacity-50 text-xl font-light">
                  +/-
                </button>
              </div>
              <div className="w-1/4 border-r border-b border-indigo-400">
                <button className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-opacity-50 text-xl font-light">
                  %
                </button>
              </div>
              <div className="w-1/4 border-r border-b border-indigo-400">
                <button
                  onClick={() => handleOperatorClick("divide")}
                  className="w-full h-16 outline-none focus:outline-none bg-indigo-700 bg-opacity-10 hover:bg-opacity-20 text-white text-2xl font-light"
                >
                  ÷
                </button>
              </div>
            </div>
            <div className="flex w-full">
              <div className="w-1/4 border-r border-b border-indigo-400">
                <button
                  onClick={() => handleNumberClick("7")}
                  className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light"
                >
                  7
                </button>
              </div>
              <div className="w-1/4 border-r border-b border-indigo-400">
                <button
                  onClick={() => handleNumberClick("8")}
                  className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light"
                >
                  8
                </button>
              </div>
              <div className="w-1/4 border-r border-b border-indigo-400">
                <button
                  onClick={() => handleNumberClick("9")}
                  className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light"
                >
                  9
                </button>
              </div>
              <div className="w-1/4 border-r border-b border-indigo-400">
                <button
                  onClick={() => handleOperatorClick("multiply")}
                  className="w-full h-16 outline-none focus:outline-none bg-indigo-700 bg-opacity-10 hover:bg-opacity-20 text-white text-xl font-light"
                >
                  ⨉
                </button>
              </div>
            </div>
            <div className="flex w-full">
              <div className="w-1/4 border-r border-b border-indigo-400">
                <button
                  onClick={() => handleNumberClick("4")}
                  className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light"
                >
                  4
                </button>
              </div>
              <div className="w-1/4 border-r border-b border-indigo-400">
                <button
                  onClick={() => handleNumberClick("5")}
                  className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light"
                >
                  5
                </button>
              </div>
              <div className="w-1/4 border-r border-b border-indigo-400">
                <button
                  onClick={() => handleNumberClick("6")}
                  className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light"
                >
                  6
                </button>
              </div>
              <div className="w-1/4 border-r border-b border-indigo-400">
                <button
                  onClick={() => handleOperatorClick("subtract")}
                  className="w-full h-16 outline-none focus:outline-none bg-indigo-700 bg-opacity-10 hover:bg-opacity-20 text-white text-xl font-light"
                >
                  -
                </button>
              </div>
            </div>
            <div className="flex w-full">
              <div className="w-1/4 border-r border-b border-indigo-400">
                <button
                  onClick={() => handleNumberClick("1")}
                  className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light"
                >
                  1
                </button>
              </div>
              <div className="w-1/4 border-r border-b border-indigo-400">
                <button
                  onClick={() => handleNumberClick("2")}
                  className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light"
                >
                  2
                </button>
              </div>
              <div className="w-1/4 border-r border-b border-indigo-400">
                <button
                  onClick={() => handleNumberClick("3")}
                  className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light"
                >
                  3
                </button>
              </div>
              <div className="w-1/4 border-r border-b border-indigo-400">
                <button
                  onClick={() => handleOperatorClick("add")}
                  className="w-full h-16 outline-none focus:outline-none bg-indigo-700 bg-opacity-10 hover:bg-opacity-20 text-white text-xl font-light"
                >
                  +
                </button>
              </div>
            </div>
            <div className="flex w-full">
              <div className="w-1/4 border-r border-indigo-400">
                <button
                  onClick={() => handleNumberClick("0")}
                  className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light"
                >
                  0
                </button>
              </div>
              <div className="w-1/4 border-r border-indigo-400">
                <button className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light">
                  .
                </button>
              </div>
              <div className="w-2/4 border-r border-indigo-400">
                <button
                  onClick={handleSubmit}
                  className="w-full h-16 outline-none focus:outline-none bg-indigo-700 bg-opacity-30 hover:bg-opacity-40 text-white text-xl font-light"
                >
                  =
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
