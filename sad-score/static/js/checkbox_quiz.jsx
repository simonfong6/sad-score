'use strict';

class CheckboxQuiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {

    return (
      <li>
        <input type="checkbox" className="quiz_input" name={this.props.name} value={this.props.value}/>
        <span> {this.props.label}</span>
      </li>
    );
  }
}

// Scan through all checkbox_quiz divs and render.
/*
document.querySelectorAll('.checkbox_quiz')
  .forEach(domContainer => {
    const name = domContainer.dataset.name;
    const label = domContainer.dataset.label;
    const value = domContainer.dataset.value;

    ReactDOM.render(
      <CheckboxQuiz
      name={name}
      label={label}
      value={value}/>,
      domContainer);
  });
*/