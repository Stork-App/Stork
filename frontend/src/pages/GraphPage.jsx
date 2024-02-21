import { useContext, useEffect, useState } from "react";
import CurrentUserContext from "../contexts/current-user-context";
import { getLogs } from "../adapters/log-adapter";
import Graph from "../components/Graph";


export default function GraphPage() {
  const { currentUser } = useContext(CurrentUserContext);
  const [userLogs, setUsersLogs] = useState([]);

  console.log(currentUser,  "this is my user ")
  useEffect(() => {
  const loadLogs = async () => {
    const [logs] = await getLogs(currentUser.id)
    console.log(logs)
    setUsersLogs(logs)
  };
  loadLogs()
},[currentUser])
   console.log(userLogs)
  
  // console.log(loadLogs())

  //this functionality loads all of this users logs


  // const userMood = [];
  // userMood.push(loadLogs().map(currentLog => currentLog.weeks));
  

  const dataSet = [
    { weeks: 23, mood: 3 },
    { weeks: 24, mood: 3 },
    { weeks: 20, mood: 5 },
    { weeks: 26, mood: 4 },
    { weeks: 27, mood: 2 },
    { weeks: 28, mood: 1 },
    { weeks: 29, mood: 4 },
  ];

  return <>
    <h1> Your Stats</h1>
    <p>"zdfvbakerbvkaejrbvkajebv r kjv  abrv"</p>
    {/* <p>{userLogs.data}</p> */}
    <Graph userLogs = {userLogs} />
      
    {/* <Graph userLogs = {userLogs} /> */}
    {/* <Graph userLogs={dataSet.weeks.sort((a,b) => a-b)}/> */}

  </>
};