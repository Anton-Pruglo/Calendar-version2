import classnames from 'classnames';
import format from 'date-fns/format';
import { ThemeEnum } from '../../../context';
import { withTheme } from '../../../HOC/withTheme';
import { withCurrentDate } from '../HOC/withCurrentDate';

export const MONTH_FORMAT = 'MMMM';
export const YEAR_FORMAT = 'yyyy';

export const CalendarHeader = withCurrentDate(withTheme(({ theme, currentDate }) => {
  return (
    <header>
      <section className={classnames('month', { 'dark': theme === ThemeEnum.DARK })}>
        {format(currentDate, MONTH_FORMAT)}
      </section>
      <section className={classnames('year', {
        'dark': theme === ThemeEnum.DARK,
      })
      }>
        {format(currentDate, YEAR_FORMAT)}
      </section>
    </header>

  );
}));
