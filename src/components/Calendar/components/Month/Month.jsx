import {addWeeks,  startOfMonth } from "date-fns";

import { Week } from "../Week";

export const Month = ({ date, month}) => {
  const startMonth = startOfMonth(date)
  const dates = [
    startMonth,
    addWeeks(startMonth, 1),
    addWeeks(startMonth, 2),
    addWeeks(startMonth, 3),
    addWeeks(startMonth, 4),
    addWeeks(startMonth, 5),
    ];

  return (
    <tbody>
    {
      dates.map((date, index) => <Week key={index} date={date} month={month}/>)
    }
    </tbody>
  );
};
