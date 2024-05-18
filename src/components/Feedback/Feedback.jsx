const Feedback = ({ value, totalFeedback }) => {
  if (totalFeedback > 0) {
    return (
      <div>
        <p>
          Good: <span>{value.good}</span>
        </p>
        <p>
          Neutral: <span>{value.neutral}</span>
        </p>
        <p>
          Bad: <span>{value.bad}</span>
        </p>
      </div>
    );
  }
};
export default Feedback;
