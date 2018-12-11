'use strict';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
      <Header/>
    <ol type="1">
        <InputHeight/>
        <CheckboxQuiz
          name="degree_acceptable"
          label="STEM, law, or medicine major."
          value="2"/>
        <CheckboxQuiz
          name="degree_graduated"
          label="Graduated"
          value="2"/>
        <CheckboxQuiz
          name="degree_masters"
          label="Masters in progress or received."
          value="2"/>
        <CheckboxQuiz
          name="degree_phd"
          label="PhD in progress or received."
          value="5"/>
        <CheckboxQuiz
          name="degree_waste_of_time"
          label="Asian parents think your degree is a waste of time."
          value="-3"/>
        <InputIqScore/>
        <CheckboxQuiz
          name=""
          label=""
          value=""/>
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
        <InputNumber
          name="instruments"
          label="Number of instruments you are trained classNameically in."
          id="instruments"
          value="0"
        />
        <li>
            
            <input type="checkbox" className="quiz_input" name="instrument_good" value="3"/> If you were first chair of your symphony at some point. Solo instruments, if you've won any competitions post-middle school for the instrument.
        </li>
        <li>
            
            <input type="checkbox" className="quiz_input" name="sports_varsity_college" value="2"/> Varsity or college sports.
        </li>
        <InputNumber
          name="foreign_langauges_fluent"
          label="Number of languages you can speak fluently besides english."
          id="foreign_langauges_fluent"
          value="0"
        />
        <li>
            
           <input type="checkbox" className="quiz_input" name="english_non_fluent" value="-3"/> Not fluent in english.
        </li>
        <InputNumber
          name="foreign_langauges_nonfluent"
          label="Languages you know but are not fluent in."
          id="foreign_langauges_nonfluent"
          value="0"
        />
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
        <InputNumber
          name="tattoos"
          label="Number of tattoos that you have."
          id="tattoos"
          value="0"
        />
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
    <Footer/>
    </div>
    );
  }
}

// Render the App.
const dom_container = document.querySelector('#app-container');
ReactDOM.render(<App/>, dom_container);