import { Month } from "./components/Month";
import { ThemeEnum } from "../context";
import classnames from "classnames";
import {withTheme} from "../HOC/withTheme";

import './Calendar.css';

const Calendar = ({ theme }) => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  const weekDayNames = ['Mo', 'Tu', 'We', 'Th', 'Fri', 'Sa', 'Su'];


  return (

          <div className={classnames('calendar', {
            'dark': theme === ThemeEnum.DARK})
          }>
            <header>
              <section className={classnames('month', {
                'dark': theme === ThemeEnum.DARK})
              }>
                 {monthNames[month]}
              </section>
              <section className={classnames('year', {
                'dark': theme === ThemeEnum.DARK})
              }>
                {year}
              </section>
            </header>
              <tr>
                {weekDayNames.map(name =>
                  <th className={classnames('dayWeek', {
                    'dark': theme === ThemeEnum.DARK})} key={name}
                  >
                   {name}
                  </th>
                )}
              </tr>
            <Month month={month} date={date} />
            <div className='confirmation'>
              <button className={classnames('cancel', {
                'dark': theme === ThemeEnum.DARK})
              }>
                Cancel
              </button>
              <button className='set-date'>
                Set Date
              </button>
            </div>
          </div>
  )
}

export default withTheme(Calendar);
