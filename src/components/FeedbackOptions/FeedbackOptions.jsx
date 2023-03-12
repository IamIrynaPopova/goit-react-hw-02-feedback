import {nanoid} from 'nanoid'

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(option => {
    return (
      <button className= "button" onClick={onLeaveFeedback} name = {option} key = {nanoid()}>
        {option}
      </button>
    );
  });
};
