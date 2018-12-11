'use strict';

class InputNumber extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <li>
        <input
          type="number"
          className="quiz_input"
          id={this.props.id}
          name={this.props.name}
          value={this.props.value}
        />
        <span> {this.props.label}</span>
      </li>
    );
  }
}