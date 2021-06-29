import { Month } from './components/Month';
import classnames from 'classnames';
import { ThemeEnum } from '../../../context';
import { withTheme } from '../../../HOC/withTheme';

const weekDayNames = ['Mo', 'Tu', 'We', 'Th', 'Fri', 'Sa', 'Su'];

export const CalendarBody = withTheme(({ theme }) => {
  const daysTH = weekDayNames.map(name =>
    <th className={classnames('dayWeek', {
      'dark': theme === ThemeEnum.DARK,
    })} key={name}
    >
      {name}
    </th>,
  );

  return (
    <table>
      <thead>
      <tr>{daysTH}</tr>
      </thead>
      <Month />
    </table>
  );
});
