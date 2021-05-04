import { render } from '@testing-library/react';
import react, { Component } from 'react';

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
};

class TemperatureInput extends Component {

    constructor(props) {
        super(props);
        this.state = {
            temperature: ''
        }
    }
    toCelsius = (fahrenheit) => {
        return (fahrenheit - 32) * 5 / 9;
      }
    
      toFahrenheit = (celsius) => {
        return (celsius * 9 / 5) + 32;
      }
    
      tryConvert = (temperature, convert) => {
        const input = parseFloat(temperature);
        if (Number.isNaN(input)) {
          return '';
        }
        const output = convert(input);
        const rounded = Math.round(output * 1000) / 1000;
        return rounded.toString();
      }

      
    
    handleChange = (e) => {
        // this.setState({temperature: e.target.value});
        this.props.onTemperatureChange(e.target.value);
    }

    render() {
        // const temperature = this.state.temperature;
        const temperature = this.props.temperature;
        const scale = this.props.scale;
        return (
            <fieldset>
                <legend>Enter temperature in {scaleNames[scale]}:</legend>
                <input value={temperature}
                    onChange={this.handleChange} />
            </fieldset>
        );
    }
}

export default TemperatureInput;
