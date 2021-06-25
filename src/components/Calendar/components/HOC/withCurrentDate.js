import { CalendarContext } from '../../CalendarContext';

export const withCurrentDate = (WrappedComponent) => (props) => (
  <CalendarContext.Consumer>
    {
      (currentDate) => <WrappedComponent {...props} currentDate={currentDate} />
    }
  </CalendarContext.Consumer>
);
