import React from 'react';
import './App.css';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';


class Slider extends React.Component {
  constructor(props) {
    super(props);
 
    this.state = {
      value: 0
    };
  }

  handleChange = (e) => {
    console.log(e);
    this.setState({ value: e });
    
    const url = 'http://192.168.100.16:8833/v1/led-change';
    const data = { value: this.state.value };

    fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => console.log('Success:', response));
    }

  render() {
    return (
      <InputRange
        maxValue={100}
        minValue={0}
        value={this.state.value}
        onChange={this.handleChange} 
      />
    );
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>Slider Range</h3>
      </header>
      <div className="App-slider">
        <Slider />
      </div>
    </div>
  );
}

export default App;
