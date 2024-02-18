import { useContext, useState } from "react";
import CurrentUserContext from "../contexts/current-user-context";
import { getLogs } from "../adapters/log-adapter";


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
    <h1>Hello</h1>
  </>
};