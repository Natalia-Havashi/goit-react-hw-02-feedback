import { Response } from 'components/Reviews.styled';

export const Statistics = ({ good, neutral, bad, total,positivePercentage }) => (
 <ul>
      <Response>Good: {good}</Response>
      <Response>Neutral: {neutral}</Response>
      <Response>Bad: {bad}</Response>
      <Response>Title: {total}</Response>
     <Response>Positive Response: {positivePercentage} %</Response> 
    </ul>
  );

