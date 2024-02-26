import { useContext, useEffect, useState } from "react";
import CurrentUserContext from "../contexts/current-user-context";
// import { getLogs } from "../adapters/log-adapter";
import { getAvgBySortedWeek } from "../adapters/log-adapter";
import Graph from "../components/Graph";


export default function GraphPage() {
  const { currentUser } = useContext(CurrentUserContext);
  const [userLogs, setUsersLogs] = useState([]);

  useEffect(() => {
    const loadLogs = async () => {
    const logs = await getAvgBySortedWeek(currentUser.id)
    console.log(logs)
    console.log(currentUser)
    setUsersLogs(logs)
    };
    loadLogs()
  },[currentUser])

  return <>
    <h1 className="symptom-stats">Your Symptom Stats Graph!</h1>
    <br></br>
    <div className="graph-comp">
      <Graph userLogs = {userLogs} />
      </div>
  </>
};