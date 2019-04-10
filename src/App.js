import React from "react";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";


const API_KEY = "3b7f82473d6cad78d9711a79e90fff30";

class App extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  };

  getWeather = async e => {
    e.preventDefault();
    const zip = e.target.elements.zip.value;
    

    const api_call = await fetch(
      "http://api.openweathermap.org/data/2.5/weather?zip=" +
        zip +
        "&appid=" +
        API_KEY +
        "&units=imperial"
    );
    
    const data = await api_call.json();
    if (zip) {
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      });
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please enter zipcode"
      });
    }
  };

  render() {
    return (
      <div>
        <div className="wrapper">
        <div className="main">
        <div className="container">
        <div className="row">
        <div className="col-xs-5 title-container">
        <Titles />
        </div>
        <div className="col-xs-7 form-container">
        <Form getWeather={this.getWeather} />
        <div className="weather">
        <Weather
          temperature={this.state.temperature}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
          error={this.state.error}
        />
        </div>
        </div>
      </div>
      </div>
      </div>
      </div>
      </div>
    );
  }
}

export default App;