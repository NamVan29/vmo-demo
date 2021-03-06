import react, { Component } from 'react';
import TemperatureInput from './component/TemperatureInput';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: '', scale: 'c'
    };

  }

  handleCelsiusChange = (temperature) => {
    this.setState({ scale: 'c', temperature });
  }

  handleFahrenheitChange = (temperature) => {
    this.setState({ scale: 'f', temperature });
  }

  onTemperatureChange = (str) => {
    console.log(str);
  }

  


  render() {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
    return (
      <div>
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange} />
        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange} />
        <BoilingVerdict
          celsius={parseFloat(celsius)} />
      </div>
    );
  }
}

export default App;
