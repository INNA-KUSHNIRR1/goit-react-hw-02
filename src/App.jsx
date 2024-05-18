import { useEffect, useState } from "react";
import "./App.css";
import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";
import Notification from "./components/Notification/Notification";

function App() {
  const [clicks, setClicks] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const updateFeedback = (feedbackType) => {
    console.log(feedbackType);
    if (feedbackType === "good") {
      setClicks({ ...clicks, good: clicks.good + 1 });
    } else if (feedbackType === "neutral") {
      setClicks({ ...clicks, neutral: clicks.neutral + 1 });
    } else {
      setClicks({ ...clicks, bad: clicks.bad + 1 });
    }
  };
  useEffect(() => {}, [clicks]);
  const totalFeedback = clicks.good + clicks.neutral + clicks.bad;
  console.log("totalFeedback", totalFeedback);
  return (
    <>
      <Description />
      <Options updateFeedback={updateFeedback} />
      <Notification totalFeedback={totalFeedback} />
      <Feedback value={clicks} totalFeedback={totalFeedback} />
    </>
  );
}

export default App;
