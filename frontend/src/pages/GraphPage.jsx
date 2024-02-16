import { useContext, useEffect, useState } from "react";
import { useAsyncError, useNavigate, useParams } from "react-router-dom";
import CurrentUserContext from "../contexts/current-user-context";
import { getUser } from "../adapters/user-adapter";
import { getLogs } from "../adapters/log-adapter";
import Graph from "../components/Graph";

export default function GraphPage() {
    const navigate = useNavigate();
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const [userProfile, setUserProfile] = useState(null);
  const [errorText, setErrorText] = useState(null);
  const [userLogs, setUsersLogs] = useState([])
  const { id } = useParams();
  const isCurrentUserProfile = currentUser && currentUser.id === Number(id);

  useEffect(() => {
    const loadUser = async () => {
      const [user, error] = await getUser(id);
      const [logs] = await getLogs(id);
      setUsersLogs(logs)
      if (error) return setErrorText(error.message);
      setUserProfile(user);
    };

    loadUser();
  }, [id]);
  
  if (!userProfile && !errorText) return null;
  if (errorText) return <p>{errorText}</p>;
  const profileUsername = isCurrentUserProfile ? currentUser.username : userProfile.username;

  return <>
  <Graph currentUser = {currentUser} />
  </>
}

