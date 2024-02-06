import { useContext } from "react";
import CurrentUserContext from "../../contexts/current-user-context";

export default function AverageCards() {
    const { currentUser } = useContext(CurrentUserContext);
    return <>
        <section id="mood-card">
            <p>Mood</p>
            <h1></h1>
        </section>
        
        <section id="abd-card">
            <p>Abdominal Pain</p>
            <h1></h1>
        </section>

        <section id="back-card">
            <p>Back Pain</p>
            <h1></h1>
        </section>

        <section id="nausea-card">
            <p>Nausea</p>
            <h1></h1>
        </section>

        <section id="fatigue-card">
            <p>Fatigue</p>
            <h1></h1>
        </section>
    </>;
}