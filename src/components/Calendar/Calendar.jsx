import classnames from 'classnames';
import PropTypes from 'prop-types';
import { ThemeEnum } from '../context';
import { withTheme } from '../HOC/withTheme';
import { CalendarBody } from './components/CalendarBody';
import { CalendarHeader } from './components/CalendarHeader';
import { CalendarFooter } from './components/CalendarFooter';
import { CalendarContext } from './CalendarContext';
import './Calendar.css';

const Calendar = ({ theme, date }) => {
  const containerClassName = classnames('calendar', { 'dark': theme === ThemeEnum.DARK });

  return (
    <CalendarContext.Provider value={date}>
      <article className={containerClassName}>
        <CalendarHeader />
        <CalendarBody />
        <CalendarFooter />
      </article>
    </CalendarContext.Provider>
  );
};

Calendar.defaultProps = {
  date: new Date(),
};

Calendar.propTypes = {
  date: PropTypes.instanceOf(Date),
};

export default withTheme(Calendar);
