'use strict';

class InputIqScore extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <li>
        <input type="number" className="quiz_input" name="iq_score" id="iq"/> IQ score or estimate.
        <br/>
          IQ Score Meanings from this <a href="http://www.wilderdom.com/intelligence/IQWhatScoresMean.html">site</a>:
        <ul>
          <li>
            Over 140 - Genius or near genius
          </li>
          <li>
            120 - 140 - Very superior intelligence
          </li>
          <li>
            110 - 119 - Superior intelligence
          </li>
          <li>
            90 - 109 - Normal or average intelligence
          </li>
          <li>
            80 - 89 - Dullness
          </li>
          <li>
            70 - 79 - Borderline deficiency
          </li>
          <li>
            Under 70 - Definite feeble-mindedness
          </li>
        </ul>
      </li>
    );
  }
}