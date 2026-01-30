import React, { useState } from "react";

const tests = [
  {
    question: "O‘zbekiston poytaxti qaysi shahar?",
    options: ["Samarqand", "Toshkent", "Buxoro", "Xiva"],
    correct: 1
  },
  {
    question: "JavaScript qayerda ishlaydi?",
    options: ["Brauzerda", "Serverda", "Ikkalasida", "Faqat telefonda"],
    correct: 2
  }
];

function App() {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const answer = (i) => {
    if (i === tests[index].correct) {
      setScore(score + 1);
    }

    if (index + 1 < tests.length) {
      setIndex(index + 1);
    } else {
      setFinished(true);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Online Test</h2>

      {finished ? (
        <h3>Natija: {score} / {tests.length}</h3>
      ) : (
        <>
          <h4>{tests[index].question}</h4>
          {tests[index].options.map((o, i) => (
            <button key={i} onClick={() => answer(i)}>
              {o}
            </button>
          ))}
        </>
      )}
    </div>
  );
}

export default App;
