import style from "./Notification.module.css";
const Notification = ({ totalFeedback }) => {
  if (totalFeedback === 0) {
    return <p className={style.notification}>No feedback yet</p>;
  }
};
export default Notification;
