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
            value="2"
          />
          <CheckboxQuiz
            name="degree_graduated"
            label="Graduated"
            value="2"
          />
          <CheckboxQuiz
            name="degree_masters"
            label="Masters in progress or received."
            value="2"
          />
          <CheckboxQuiz
            name="degree_phd"
            label="PhD in progress or received."
            value="5"
          />
          <CheckboxQuiz
            name="degree_waste_of_time"
            label="Asian parents think your degree is a waste of time."
            value="-3"
          />
          <InputIqScore/>
          <CheckboxQuiz
            name="salary_over_80k"
            label="Salary is over 80k."
            value="2"
          />
          <CheckboxQuiz
            name="salary_over_100k"
            label="Salary is over 100k."
            value="3"
          />
          <CheckboxQuiz
            name="salary_over_200k"
            label="Salary is over 200k."
            value="2"
          />
          <CheckboxQuiz
            name="unemployed_not_student"
            label="Jobless and not a student."
            value="-5"
          />
          <CheckboxQuiz
            name="job_unacceptable_not_student"
            label="Aren't a student, aren't jobless, but your job is min wage / retail / hourly type that asian parents would 'aiya' at."
            value="-4"
          />
          <CheckboxQuiz
            name="gpa_acceptable"
            label="If you have, or graduated with, 3.9 GPA or above."
            value="4"
          />
          <CheckboxQuiz
            name="dropped_out"
            label="If you dropped out of school."
            value="-9000"
          />
          <InputNumber
            name="instruments"
            label="Number of instruments you are trained classically in."
            id="instruments"
            value="0"
          />
          <CheckboxQuiz
            name="instrument_good"
            label="If you were first chair of your symphony at some point. Solo instruments, if you've won any competitions post-middle school for the instrument."
            value="3"
          />
          <CheckboxQuiz
            name="sports_varsity_college"
            label="Varsity or college sports."
            value="2"
          />
          <InputNumber
            name="foreign_langauges_fluent"
            label="Number of languages you can speak fluently besides english."
            id="foreign_langauges_fluent"
            value="0"
          />
          <CheckboxQuiz
            name="english_non_fluent"
            label="Not fluent in english."
            value="-3"
          />
          <InputNumber
            name="foreign_langauges_nonfluent"
            label="Languages you know but are not fluent in."
            id="foreign_langauges_nonfluent"
            value="0"
          />
          <CheckboxQuiz
            name="english_only"
            label="English is the only language you know."
            value="-5"
          />
          <CheckboxQuiz
            name="church_going"
            label="You are a church-going christian boi."
            value="4"
          />
          <CheckboxQuiz
            name="ripped"
            label="You are ripped."
            value="3"
          />
          <CheckboxQuiz
            name="kpop_dance_sing"
            label="Can dance/sing like a kpop oppa."
            value="3"
          />
          <CheckboxQuiz
            name="perfect_vision"
            label="Have naturally perfect vision."
            value="3"
          />
          <InputNumber
            name="tattoos"
            label="Number of tattoos that you have."
            id="tattoos"
            value="0"
          />
          <CheckboxQuiz
            name="dress_like_fuccboi"
            label="Dress like a fuckboi."
            value="2"
          />
          <CheckboxQuiz
            name="over_10k_instagram"
            label="Have over 10K instagram followers."
            value="2"
          />
          <CheckboxQuiz
            name="asian_community_prominent_figure"
            label="If you can be considered a prominent figure in the local asian community."
            value="3"
          />
          <CheckboxQuiz
            name="pi_tenth_digit"
            label="If you can't figure out what number goes in the blank without looking it up: 3.14159265_ ."
            value="-1"
          />
          <CheckboxQuiz
            name="racist_against_other_asians"
            label="Are racist against other asian cultures."
            value="-10"
          />
          <CheckboxQuiz
            name="always_offer_to_pay"
            label="You always offer to pay for dates."
            value="3"
          />
          <CheckboxQuiz
            name="salty_about_paying"
            label="You feel salty about paying for all dates."
            value="-3"
          />
          <CheckboxQuiz
            name="let_the_girl_pay_if_she_wants"
            label="You will let the girl pay for anything she wants to pay for."
            value="1"
          />
          <CheckboxQuiz
            name="above_platinum"
            label="Above plat rank in League."
            value="1"
          />
          <InputAttractiveness />
          <CheckboxQuiz
            name="scored_yourself"
            label="If you really sat here for 10 minutes and scored yourself when you could have been studying/practicing/working out."
            value="-3"
          />
        </ol>
        <Footer/>
      </div>
    );
  }
}

// Render the App.
const dom_container = document.querySelector('#app-container');
ReactDOM.render(<App/>, dom_container);