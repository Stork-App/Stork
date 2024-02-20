import { useContext, useState } from "react";
import CurrentUserContext from "../contexts/current-user-context";
import { getLogs } from "../adapters/log-adapter";
import Graph from "../components/Graph";


export default function GraphPage() {
  const { currentUser } = useContext(CurrentUserContext);
  console.log([currentUser])

  //this functionality loads all of this users logs
  const loadLogs = async () => {
    const [logs] = await getLogs(currentUser.id)
    console.log(logs)
  }
  loadLogs().weeks;


  return <>
    {/* <Graph /> */}
    <h1>Hello</h1>
  </>
};