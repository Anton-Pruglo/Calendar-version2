import classnames from 'classnames';

import './Day.css';

export const Day = ({ date, month }) => {
  const currentDate = new Date();

  return (
    <td className={classnames('day', {
      'today': date.getDate() === currentDate.getDate(),
      'isSameMonth': !(month === date.getMonth()),
    })}>
      {date.getDate()}
    </td>
  )
}


