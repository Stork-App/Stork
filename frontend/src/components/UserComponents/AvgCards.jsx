import CurrentUserContext from "../contexts/current-user-context";
import { getAvgLogs } from "../../adapters/log-adapter";

export default function AverageCards({currentUser}) {
    const avgs = getAvgLogs(currentUser.id)
    return <>
    <p>Mood</p>
    <h1>{avgs[0].mood}</h1>
    <br></br>
    <p>Abdominal Pain</p>
    <h1>{avgs[0].abd_pain}</h1>
    <br></br>
    <p>Back Pain</p>
    <h1>{avgs[0].back_pain}</h1>
    <br></br>
    <p>Nausea</p>
    <h1>{avgs[0].back_pain}</h1>
    <br></br>
    <p>Fatigue</p>
    <h1>{avgs[0].fatigue}</h1>
    </>
}