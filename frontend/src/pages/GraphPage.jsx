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
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <h1> Your Stats</h1>
    <Graph userLogs = {userLogs} />
  </>
};