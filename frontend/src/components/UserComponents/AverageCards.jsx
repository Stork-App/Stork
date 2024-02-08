import { useContext } from "react";
import { getLogAvg } from "../../adapters/log-adapter";
import CurrentUserContext from "../../contexts/current-user-context";

export default function AverageCards() {
    const { currentUser } = useContext(CurrentUserContext);
    // const symptoms = ["mood", "abd_pain", "back_pain", "nausea", "fatigue"];
    const averages = getLogAvg(currentUser.id)
    // const cardVals = document.querySelectorAll('.value');

    // for(let i = 0; i< symptoms.length; i++){
    //    const currentAvg = averages[0].symptoms[i];
    //    cardVals[i].textContent = currentAvg;
    // }

    return <>
        <p>please</p>    
        {/* <section id="mood-card">
            <p>Mood</p>
            <h1 class="value"></h1>
        </section>
        <section id="abd-card">
            <p>Abdominal Pain</p>
            <h1 class="value"></h1>
        </section>
        <section id="back-card">
            <p>Back Pain</p>
            <h1 class="value"></h1>
        </section>
        <section id="nausea-card">
            <p>Nausea</p>
            <h1 class="value"></h1>
        </section>
        <section id="fatigue-card">
            <p>Fatigue</p>
            <h1 class="value"></h1>
        </section> */}
    </>;
}