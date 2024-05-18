import style from "./Feedback.module.css";
const Feedback = ({ value, totalFeedback, positiveFeedback }) => {
  return (
    <div className={style.boxFeedback}>
      <p className={style.typeFeedback}>
        Good: <span className={style.span}>{value.good}</span>
      </p>
      <p className={style.typeFeedback}>
        Neutral: <span className={style.span}>{value.neutral}</span>
      </p>
      <p className={style.typeFeedback}>
        Bad: <span className={style.span}>{value.bad}</span>
      </p>
      <p className={style.typeFeedback}>
        Total: <span className={style.span}>{totalFeedback}</span>
      </p>
      <p className={style.typeFeedback}>
        Positive:<span className={style.span}>{positiveFeedback}%</span>
      </p>
    </div>
  );
};
export default Feedback;
