import React from "react";
import { Day } from '../Day'
import { addDays, startOfWeek } from "date-fns";



export const Week = ({ date, month }) => {
  const firstWeekDate = startOfWeek(date, {weekStartsOn: 1});

  return (
    <tr className='week'>
      <Day month={month} date={addDays(firstWeekDate,0)}/>
      <Day month={month} date={addDays(firstWeekDate,1)}/>
      <Day month={month} date={addDays(firstWeekDate,2)}/>
      <Day month={month} date={addDays(firstWeekDate,3)}/>
      <Day month={month} date={addDays(firstWeekDate,4)}/>
      <Day month={month} date={addDays(firstWeekDate,5)}/>
      <Day month={month} date={addDays(firstWeekDate,6)}/>
    </tr>
  );
};
