import { createLog } from "../adapters/log-adapter";

export default function LogForm({ currentUser}) {

  const setRangeValues = (sliderInput) => {
    if (sliderInput => 0 && sliderInput <= 20){
      return sliderInput = 1;
    } else if(sliderInput > 20 && sliderInput <= 40){
      return sliderInput = 2;
    } else if (sliderInput > 40 && sliderInput <= 60){
      return sliderInput = 3;
    } else if (sliderInput > 60 && sliderInput <= 80){
      return sliderInput = 4;
    } else {
      return sliderInput = 5;
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const obj = Object.fromEntries(formData)
    obj.mood = Number(obj.mood)
    obj.abd_pain = setRangeValues(obj.abd_pain)
    obj.back_pain = setRangeValues(obj.back_pain)
    obj.nausea = setRangeValues(obj.nausea)
    obj.fatigue = setRangeValues(obj.fatigue)
    obj.weeks = Number(obj.weeks)
    obj.user_id = Number(obj.user_id)
    console.log(obj)

    await createLog(obj)   

    event.target.reset();
  };

  return <form onSubmit={handleSubmit} aria-labelledby="dailyLog-heading">
    <h2 id='dailyLog-heading'>Welcome Back!</h2>
    <h3>How are you feeling today?</h3>
    <input type="radio" id="worst" name="mood" value = "1" required/>
    <label htmlFor="worst">Worst</label>

    <input type="radio" id="notGood" name="mood" value="2"/>
    <label htmlFor="notGood">Not Good</label>

    <input type="radio" id="fine" name="mood" value="3"/>
    <label htmlFor="fine">Fine</label>

    <input type="radio" id="good" name="mood" value="4"/>
    <label htmlFor="good">Good</label>

    <input type="radio" id="veryGood" name="mood" value="5"/>
    <label htmlFor="veryGood">Very Good</label>

    <h3>Abdominal Pain</h3>
    <input type="range" min="0" max="100" id="abdPain" name = "abd_pain"/>

    <h3>Back Pain</h3>
    <input type="range" min="0" max="100" id="backPain" name = "back_pain"/>

    <h3>Nausea</h3>
    <input type="range" min="0" max="100" id="nausea" name = "nausea"/>

    <h3>Fatigue</h3>
    <input type="range" min="0" max="100" id="fatigue" name = "fatigue"/>
    <br></br>
    <label for="weeks">How far along  are you? </label>
    <select id="weeks" name="weeks">
      <option value="">Select...</option>
      <option value="2">2 Weeks</option>
      <option value="3">3 Weeks</option>
      <option value="4">4 Weeks</option>
      <option value="5">5 Weeks</option>
      <option value="6">6 Weeks</option>
      <option value="7">7 Weeks</option>
      <option value="8">8 Weeks</option>
      <option value="9">9 Weeks</option>
      <option value="10">10 Weeks</option>
      <option value="11">11 Weeks</option>
      <option value="12">12 Weeks</option>
      <option value="13">13 Weeks</option>
      <option value="14">14 Weeks</option>
      <option value="15">15 Weeks</option>
      <option value="16">16 Weeks</option>
      <option value="17">17 Weeks</option>
      <option value="18">18 Weeks</option>
      <option value="19">19 Weeks</option>
      <option value="20">20 Weeks</option>
      <option value="21">21 Weeks</option>
      <option value="22">22 Weeks</option>
      <option value="23">23 Weeks</option>
      <option value="24">24 Weeks</option>
      <option value="25">25 Weeks</option>
      <option value="26">26 Weeks</option>
      <option value="27">27 Weeks</option>
      <option value="28">28 Weeks</option>
      <option value="29">29 Weeks</option>
      <option value="30">30 Weeks</option>
      <option value="31">31 Weeks</option>
      <option value="32">32 Weeks</option>
      <option value="33">33 Weeks</option>
      <option value="34">34 Weeks</option>
      <option value="35">35 Weeks</option>
      <option value="36">36 Weeks</option>
      <option value="37">37 Weeks</option>
      <option value="38">38 Weeks</option>
      <option value="39">39 Weeks</option>
      <option value="40">40 Weeks</option>
    </select>
    <br></br>
    <br></br>
    <input type="hidden" name="user_id" value={currentUser.id} />
    <button>Submit</button>
    <br></br>
  </form>;
}
