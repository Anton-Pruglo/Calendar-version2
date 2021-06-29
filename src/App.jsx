import React from 'react';
import { Header } from './components/Header';
import { Calendar } from './components/Calendar';
import { ThemeEnum, ThemeContext } from './components/context';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: ThemeEnum.LIGHT,
    };
  }

  setTheme = (value) => this.setState({
    theme: value,
  });

  render() {
    const { theme } = this.state;
    return (
      <ThemeContext.Provider value={{
        theme,
        setTheme: this.setTheme,
      }}>
        <Header />
        <Calendar />
      </ThemeContext.Provider>
    );
  }
}

export default App;

