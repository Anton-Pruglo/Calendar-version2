import React from 'react';
import { Day } from '../Day';
import { addDays, startOfWeek } from 'date-fns';
import { withCurrentDate } from '../../../HOC/withCurrentDate';

export const Week = withCurrentDate(({ date, currentDate }) => {
  const firstWeekDate = startOfWeek(date, { weekStartsOn: 1 });

  return (
    <tr className="week">
      <Day currentDate={currentDate} date={addDays(firstWeekDate, 0)} />
      <Day currentDate={currentDate} date={addDays(firstWeekDate, 1)} />
      <Day currentDate={currentDate} date={addDays(firstWeekDate, 2)} />
      <Day currentDate={currentDate} date={addDays(firstWeekDate, 3)} />
      <Day currentDate={currentDate} date={addDays(firstWeekDate, 4)} />
      <Day currentDate={currentDate} date={addDays(firstWeekDate, 5)} />
      <Day currentDate={currentDate} date={addDays(firstWeekDate, 6)} />
    </tr>
  );
});
