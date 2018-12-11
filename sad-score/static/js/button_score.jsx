'use strict';

class ButtonScore extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <center>
        <button type="button" className="btn btn-success" id="calculate">Calculate My Score</button>
        <div id="score_box" className="jumbotron">
          <h1>Score: <span id="score"></span></h1>  
        </div>
    </center>
    );
  }
}