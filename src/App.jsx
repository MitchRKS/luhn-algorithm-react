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
    const cardNumCopy = [...cardNum];
    const copyTwo = [];

    const indexOfCardNum = cardNumCopy.findIndex((i) => i.id === id);
    console.log(cardNumCopy[indexOfCardNum].text);
    if (cardNumCopy) {
      // push
      indexOfCardNum % 2 === 0
        ? copyTwo.push(cardNum[indexOfCardNum].value)
        : copyTwo.push(cardNum[indexOfCardNum].value * 2);
    } else {
      cardNumCopy[indexOfCardNum].valid = false;
    }
    console.log(copyTwo);
    // cardNumCopy[indexOfCardNum].valid = !cardNumCopy[indexOfCardNum].valid;
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

  // const validCard = (e) => {
  // setCardNum([e.target.value]);
  //   let arrayTwo = [];
  //   for (let i = 0; i < cardNum.length; i++) {
  //     if (i % 2 === 1) {
  //       arrayTwo.push(cardNum[i] * 2);
  //     } else {
  //       arrayTwo.push(cardNum[i]);
  //     }
  //   }
  // console.log(cardNum);
  // };
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
