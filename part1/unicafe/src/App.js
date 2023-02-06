import { useState } from "react";
import { mean } from "mathjs";
const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;
const StatisticLine = ({ value, text }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
);
const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad;
  const avg = mean(good * 1, neutral * 0, bad * -1);
  const positive = (good / all) * 100;
  if (good > 0 || neutral > 0 || bad > 0) {
    return (
      <table>
        <tbody>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <tr>
            <td>all</td>
            <td>{all}</td>
          </tr>
          <tr>
            <td>average</td>
            <td>{avg}</td>
          </tr>
          <tr>
            <td>positive</td>
            <td>{positive}</td>
          </tr>
        </tbody>
      </table>
    );
  }
  return <p>No feedback given</p>;
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handelGoodClick = () => {
    setGood(good + 1);
  };
  const handelNeturalClick = () => {
    setNeutral(neutral + 1);
  };
  const handelBadClick = () => {
    setBad(bad + 1);
  };

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={handelGoodClick} text="good" />
      <Button onClick={handelNeturalClick} text="netural" />
      <Button onClick={handelBadClick} text="bad" />
      <h1>statistics</h1>
      {/* <p>good {good}</p>
      <p>netural {neutral}</p>
      <p>bad {bad}</p> */}
      <Statistics good={good} neutral={neutral} bad={bad}></Statistics>
    </div>
  );
};

export default App;
