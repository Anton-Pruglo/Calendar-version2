import classNames from 'classnames';
import { isSameMonth, isSameDay, format } from 'date-fns';
import './Day.css';

export const DAY_FORMAT = 'dd';

export const Day = ({ date, currentDate }) => (
  <td className={classNames('day', {
    'isSameDay': isSameDay(date, currentDate),
    'isOtherMonth': !isSameMonth(date, currentDate),
  })}>
    {format(date, DAY_FORMAT)}
  </td>
);


