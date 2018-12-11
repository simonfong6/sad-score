'use strict';

class InputAttractiveness extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <li>
        <select className="quiz_input" id="attractiveness" name="attractiveness">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
          <option>10</option>
        </select>
        Rate own attractiveness from 1-10 realistically.
      </li>
    );
  }
}
