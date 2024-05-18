import style from "./Options.module.css";

const Options = ({ updateFeedback, totalFeedback, handleReset }) => {
  return (
    <div className={style.options}>
      <button
        className={style.optionBtn}
        onClick={() => {
          updateFeedback("good");
        }}
      >
        Good
      </button>
      <button
        className={style.optionBtn}
        onClick={() => {
          updateFeedback("neutral");
        }}
      >
        Neutral
      </button>
      <button
        className={style.optionBtn}
        onClick={() => {
          updateFeedback("bad");
        }}
      >
        Bad
      </button>
      {totalFeedback > 0 && (
        <button className={style.optionBtn} onClick={handleReset}>
          Reset
        </button>
      )}
    </div>
  );
};
export default Options;
