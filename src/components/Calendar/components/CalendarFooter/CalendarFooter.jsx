import classnames from 'classnames';
import { ThemeEnum } from '../../../context';
import { withTheme } from '../../../HOC/withTheme';

export const CalendarFooter = withTheme(({ theme }) => {
  return (
    <footer className="confirmation">
      <button className={classnames('cancel', {
        'dark': theme === ThemeEnum.DARK,
      })
      }>
        Cancel
      </button>
      <button className="set-date">
        Set Date
      </button>
    </footer>
  );
});
