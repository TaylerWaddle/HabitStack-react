// import { useState } from "react";
import Logo from "../../assets/Habbit_Logo.png";

import "./add.styles.scss";

const AddRoute = () => {
  // const [input, setInput] = useState("");
  // const [results, setResults] = useState([]);
  // const [numberOfFormFields, setNumberOfFormFields] = useState(3);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setResults(...results, input);
  //   console.log(input);
  //   console.log(results);
  // };

  return (
    <div className="add-container">
      <img className="logo" src={Logo} />
      <div className="title">Add Stack</div>
      <form className="form-container">
        <div className="header-container">
          <p className="title-header" type="text" placeholder="1st Habit">
            TITLE
          </p>
          <div className="time-container">
            <p className="hour-header" type="number" min="0" max="24">
              HR
            </p>
            <p className="minute-header" type="number" min="1" max="59">
              MIN
            </p>
          </div>
        </div>
        <div className="habit-container">
          <input
            className="habit-input-field"
            type="text"
            placeholder="1st Habit"
          />
          <input
            className="habit-duration-hour"
            type="number"
            min="0"
            max="24"
          />
          <input
            className="habit-duration-minute"
            type="number"
            min="1"
            max="59"
          />
        </div>
        <div className="habit-container">
          <input
            className="habit-input-field"
            type="text"
            placeholder="1st Habit"
          />
          <input
            className="habit-duration-hour"
            type="number"
            min="0"
            max="24"
          />
          <input
            className="habit-duration-minute"
            type="number"
            min="1"
            max="59"
          />
        </div>
        <div className="habit-container">
          <input
            className="habit-input-field"
            type="text"
            placeholder="1st Habit"
          />
          <input
            className="habit-duration-hour"
            type="number"
            min="0"
            max="24"
          />
          <input
            className="habit-duration-minute"
            type="number"
            min="1"
            max="59"
          />
        </div>
        <button>Button</button>
      </form>
    </div>
  );
};

export default AddRoute;
