import React, { useState } from "react";

export default function CardNumber({
  cardNum,
  validCard,
  editCardNum,
  deleteCardNum,
}) {
  const [showInput, setShowInput] = useState(false);

  return (
    <li>
      <div className="left">
        <h2
          onClick={() => {
            setShowInput(!showInput);
          }}
        >
          {cardNum.text}
        </h2>
        <input
          style={{ display: showInput ? "block" : "none" }}
          type="text"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              editCardNum(cardNum.id, e);
              setShowInput(false);
            }
          }}
        />
      </div>
      <label className="middle">
        Validate
        <input
          type="checkbox"
          checked={cardNum.valid}
          onChange={(e) => {
            validCard(cardNum.id, e);
          }}
        />
      </label>
      <button
        onClick={() => {
          deleteCardNum(cardNum.id);
        }}
      >
        Delete Card Num
      </button>
    </li>
  );
}
