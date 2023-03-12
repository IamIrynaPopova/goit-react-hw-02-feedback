import { Notification } from '../Notification/Notification';

export const Statistics = ({
  bad,
  good,
  neutral,
  total,
  positivePercentage,
}) => {
  if (total > 0) {
    return (
      <>
        <p>Good:{good}</p>
        <p>Neutral:{neutral}</p>
        <p>Bad:{bad}</p>
        <p>Total:{total}</p>
        <p>Positive feedback:{positivePercentage}</p>
      </>
    );
  } else
    return (
      <>
        <Notification message="There is no feedback"></Notification>
      </>
    );
};
