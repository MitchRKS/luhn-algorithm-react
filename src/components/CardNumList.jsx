import CardNumber from "./CardNumber";

export default function CardNumList({
  cardNums,
  addCardNum,
  editCardNum,
  deleteCardNum,
  validCard,
}) {
  return (
    <div>
      <h1>Add Card Number</h1>
      <input
        type="text"
        onKeyDown={(e) => {
          e.key === "Enter" && addCardNum(e);
        }}
      />
      {cardNums.length ? (
        <>
          <h1>Card Numbers</h1>
          <ul>
            {cardNums.map((cardNum) => {
              return (
                <CardNumber
                  key={cardNum.id}
                  cardNum={cardNum}
                  addCardNum={addCardNum}
                  validCard={validCard}
                  deleteCardNum={deleteCardNum}
                  editCardNum={editCardNum}
                />
              );
            })}
          </ul>
        </>
      ) : (
        <h3>No Card Numbers Added Yet</h3>
      )}
    </div>
  );
}
