'use strict';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
      <center>
        <h1>Subtle Asian Dating Score</h1>
        <p>
            Hey guys! Heard of the SAT score? Now here we have the SAD score. The SAD score measures how much the average asian mother would approve of you as their child’s significant other.
        </p>
        <p>
            Quiz Version 2. Version 1 can be found <a href="/quiz/men?version=0">here</a>:
        </p>
        <p>
            Credit to Ev Erest Xu for scoring system.
            <br/>
            Instagram: <a href="https://www.instagram.com/1ly_away/?hl=en">@1ly_away</a>
        </p>
    </center>
    <ol type="1">
        <li>
            Height:
            <br/>
            <input type="number" className="quiz_input" id="height_cm" name="height_cm" value="0"/> Centimeters
            <br/>
            <input type="number" id="height_ft" value="0"/> Feet
            <input type="number" id="height_in" value="0"/> Inches
        </li>
        <div 
            className="checkbox_quiz"
            data-name="degree_acceptable"
            data-label="STEM, law, or medicine major."
            data-value="2">
        </div>
        <div 
            className="checkbox_quiz"
            data-name="degree_graduated"
            data-label="Graduated."
            data-value="2">
        </div>
        <div 
            className="checkbox_quiz"
            data-name="degree_masters"
            data-label="Masters in progress or received."
            data-value="2">
        </div>
        <div 
            className="checkbox_quiz"
            data-name="degree_phd"
            data-label="PhD in progress or received."
            data-value="5">
        </div>
        <div 
            className="checkbox_quiz"
            data-name="degree_waste_of_time"
            data-label="Asian parents think your degree is a waste of time."
            data-value="-3">
        </div>
        <li>
            <input type="number" className="quiz_input" name="iq_score" id="iq" value="0"/> IQ score or estimate.
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
        <div 
            className="checkbox_quiz"
            data-name="salary_over_80k"
            data-label="Salary is over 80k."
            data-value="2">
        </div>
        <li>
            <input type="checkbox" className="quiz_input" name="salary_over_80k" value="2"/> Salary is over 80k.
        </li>
        <div 
            className="checkbox_quiz"
            data-name="salary_over_100k"
            data-label="Salary is over 100k."
            data-value="3">
        </div>
        <li>
            <input type="checkbox" className="quiz_input" name="salary_over_100k" value="3"/> Salary is over 100k.
        </li>
        <div 
            className="checkbox_quiz"
            data-name=""
            data-label=""
            data-value="">
        </div>
        <li>
            <input type="checkbox" className="quiz_input" name="salary_over_200k" value="2"/> Salary is over 200k.
        </li>
        <div 
            className="checkbox_quiz"
            data-name=""
            data-label=""
            data-value="">
        </div>
        <li>
            <input type="checkbox" className="quiz_input" name="unemployed_not_student" value="-5"/> Jobless and not a student.
        </li>
        <div 
            className="checkbox_quiz"
            data-name=""
            data-label=""
            data-value="">
        </div>
        <li>
            <input type="checkbox" className="quiz_input" name="job_unacceptable_not_student" value="-4"/> Aren't a student, aren't jobless, but your job is min wage / retail / hourly type that asian parents would "aiya" at.
        </li>
        <div 
            className="checkbox_quiz"
            data-name=""
            data-label=""
            data-value="">
        </div>
        <li>
            <input type="checkbox" className="quiz_input" name="gpa_acceptable" value="4"/> If you have, or graduated with, 3.9 GPA or above.
        </li>
        <li>
            <input type="checkbox" className="quiz_input" name="dropped_out" value="-9000"/> If you dropped out of school.
        </li>
        <li>
            
            <input type="number" id="instruments" className="quiz_input" name="instruments" value="0"/> Number of instruments you are trained classNameically in.
        </li>
        <li>
            
            <input type="checkbox" className="quiz_input" name="instrument_good" value="3"/> If you were first chair of your symphony at some point. Solo instruments, if you've won any competitions post-middle school for the instrument.
        </li>
        <li>
            
            <input type="checkbox" className="quiz_input" name="sports_varsity_college" value="2"/> Varsity or college sports.
        </li>
        <li>
            
            <input type="number" id="foreign_langauges_fluent" className="quiz_input" name="foreign_langauges_fluent" value="0"/> Number of languages you can speak fluently besides english.
        </li>
        <li>
            
           <input type="checkbox" className="quiz_input" name="english_non_fluent" value="-3"/> Not fluent in english.
        </li>
        <li>
            
           <input type="number" id="foreign_langauges_nonfluent" className="quiz_input" name="foreign_langauges_nonfluent" value="0"/> Languages you know but are not fluent in.
        </li>
        <li>
            
            <input type="checkbox" className="quiz_input" name="english_only" value="-5"/> English is the only language you know.
        </li>
        <li>
            
            <input type="checkbox" className="quiz_input" name="church_going" value="4"/> You are a church-going christian boi.
        </li>
        <li>
            
            <input type="checkbox" className="quiz_input" name="ripped" value="3"/> You are ripped.
        </li>
        <li>
           
            <input type="checkbox" className="quiz_input" name="kpop_dance_sing" value="3"/> Can dance/sing like a kpop oppa.
        </li>
        <li>
            
            <input type="checkbox" className="quiz_input" name="perfect_vision" value="3"/> Have naturally perfect vision.
        </li>
        <li>
            
            <input type="number" id="tattoos" className="quiz_input" name="tattoos" value="0"/> Number of tattoos that you have.
        </li>
        <li>
            
            <input type="checkbox" className="quiz_input" name="dress_like_fuccboi" value="2"/> Dress like a fuckboi.
        </li>
        <li>
            
            <input type="checkbox" className="quiz_input" name="over_10k_instagram" value="2"/> Have over 10K instagram followers.
        </li>
        <li>
            
            <input type="checkbox" className="quiz_input" name="asian_community_prominent_figure" value="3"/> If you can be considered a prominent figure in the local asian community.
        </li>
        <li>
            
            <input type="checkbox" className="quiz_input" name="pi_tenth_digit" value="-1"/> If you can't figure out what number goes in the blank without looking it up: 3.14159265_ .
        </li>
        <li>
            
            <input type="checkbox" className="quiz_input" name="racist_against_other_asians" value="-10"/> Are racist against other asian cultures.
        </li>
        <li>
            
            <input type="checkbox" className="quiz_input" name="always_offer_to_pay" value="3"/> You always offer to pay for dates.
        </li>
        <li>
           
            <input type="checkbox" className="quiz_input" name="salty_about_paying" value="-3"/> You feel salty about paying for all dates.
        </li>
        <li>
            
            <input type="checkbox" className="quiz_input" name="let_the_girl_pay_if_she_wants" value="1"/> You will let the girl pay for anything she wants to pay for.
        </li>
        <li>
            
            <input type="checkbox" className="quiz_input" name="above_platinum" value="1"/> Above plat rank in League.
        </li>
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
        <li>
            
            <input type="checkbox" className="quiz_input" name="scored_yourself" value="-3"/> If you really sat here for 10 minutes and scored yourself when you could have been studying/practicing/working out.
        </li>
    </ol>
    <h2>Note from Original Poster:</h2>
    <p>
        Oh heck lmao my notification. Disclaimer: this is a parody of SAD standards are sad for laughs. If you’re mad at this come scream at me on instagram I don’t mind
        <a href="https://www.instagram.com/1ly_away/?hl=en">@1ly_away</a>
    </p>
    <center>
        <button type="button" className="btn btn-success" id="calculate">Calculate My Score</button>
        <div id="score_box" className="jumbotron">
            <h1>Score: <span id="score"></span></h1>  
        </div>
    </center>
    </div>
    );
  }
}

// Render the App.
const dom_container = document.querySelector('#app-container');
ReactDOM.render(<App/>, dom_container);