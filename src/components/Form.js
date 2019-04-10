import React from "react";

const Form = props => (
  <form onSubmit={props.getWeather}>
    <input type="zip" name="zip" placeholder="ZipCode..." />
    <button>Get Weather</button>
  </form>
);

export default Form;
