'use strict';

class InputHeight extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <li>
        Height:
        <br/>
        <input type="number" className="quiz_input" id="height_cm" name="height_cm" value="0"/> Centimeters
        <br/>
        <input type="number" id="height_ft" value="0"/> Feet
        <input type="number" id="height_in" value="0"/> Inches
        </li>
    );
  }
}