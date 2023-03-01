import { useState } from "react";
import "./App.css";
import CardNumList from "./components/CardNumList";

function App() {
  const [cardNum, setCardNum] = useState([]);

  const addCardNum = (e) => {
    const newCardNum = { text: e.target.value, id: Date.now(), valid: false };
    setCardNum([newCardNum, ...cardNum]);
    e.target.value = "";
  };

  const validCard = (id, e) => {
    let cardNumCopy = [...cardNum];
    let copyTwo = [];
    let dubArray = [];
    let digitArray = [];

    const indexOfCardNum = cardNumCopy.findIndex((i) => i.id === id);
    let numText = cardNumCopy[indexOfCardNum].text;

    copyTwo = Array.from(String(numText), Number);
    for (let i = 0; i < copyTwo.length; i++) {
      if (i % 2 === 0) {
        dubArray[i] = copyTwo[i] * 2;
      } else {
        dubArray[i] = copyTwo[i];
      }
    }
    for (let num of dubArray) {
      const numString = num.toString();
      for (const digit of numString) {
        digitArray.push(parseInt(digit));
      }
    }

    let digitSum = digitArray.reduce(
      (accumulator, current) => accumulator + current,
      0
    );

    if (dubArray.length === 16) {
      if (digitSum % 10 === 0) {
        cardNumCopy[indexOfCardNum].valid = !cardNumCopy[indexOfCardNum].valid;
        console.log(cardNumCopy[indexOfCardNum].valid);
        console.log("Card number valid");
      } else {
        cardNumCopy[indexOfCardNum].valid === false;
        console.log("invalid card number");
      }
    }

    localStorage.setItem("cardNum", JSON.stringify([...cardNumCopy]));
    setCardNum([...cardNumCopy]);
  };

  const editCardNum = (id, e) => {
    const cardNumCopy = [...cardNum];
    const indexOfCardNum = cardNumCopy.findIndex((i) => i.id === id);
    cardNumCopy[indexOfCardNum].text = e.target.value;
    localStorage.setItem("cardNum", JSON.stringify([...cardNumCopy]));
    setCardNum([...cardNumCopy]);
    e.target.value = "";
  };

  const deleteCardNum = (id) => {
    const cardNumCopy = [...cardNum];
    const indexOfCardNum = cardNumCopy.findIndex((i) => i.id === id);
    cardNumCopy.splice(indexOfCardNum, 1);
    setCardNum(cardNumCopy);
  };

  return (
    <div className="App">
      <CardNumList
        cardNums={cardNum}
        addCardNum={addCardNum}
        validCard={validCard}
        deleteCardNum={deleteCardNum}
        editCardNum={editCardNum}
      />
    </div>
  );
}

export default App;
