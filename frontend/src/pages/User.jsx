import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CurrentUserContext from "../contexts/current-user-context";
import { getUser } from "../adapters/user-adapter";
import { getAvgLogs } from "../adapters/log-adapter";
import { logUserOut } from "../adapters/auth-adapter";
import UpdateUsernameForm from "../components/UpdateUsernameForm";
import LogForm from "../components/LogForm";
import { getLogs } from "../adapters/log-adapter";


export default function UserPage() {
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

  const handleLogout = async () => {
    logUserOut();
    setCurrentUser(null);
    navigate('/');
  };

  if (!userProfile && !errorText) return null;
  if (errorText) return <p>{errorText}</p>;

  // What parts of state would change if we altered our currentUser context?
  // Ideally, this would update if we mutated it
  // But we also have to consider that we may NOT be on the current users page
  const profileUsername = isCurrentUserProfile ? currentUser.username : userProfile.username;

  
  getAvgLogs(currentUser.id);

  return <>
    <h1>{profileUsername}</h1>
    { !!isCurrentUserProfile && <button onClick={handleLogout}>Log Out</button> }
    <p>If the user had any data, here it would be</p>
    <p>Fake Bio or something</p>
    <p>Hello!</p>
    {
      !!isCurrentUserProfile
        && <UpdateUsernameForm currentUser={currentUser} setCurrentUser={setCurrentUser}/>
    }

    <LogForm currentUser = {currentUser} />
    <table>
      <thead>
        <tr>
          <th>Mood</th>
          <th>abd_pain</th>
          <th>back_pain</th>
          <th>Nausea</th>
          <th>fatigue</th>
          <th>Created At</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {userLogs.map((entry) => (
          <tr key={entry.id}>
            <td>{entry.mood}</td>
            <td>{entry.abd_pain}</td>
            <td>{entry.back_pain}</td>
            <td>{entry.nausea}</td>
            <td>{entry.fatigue}</td>
            <td>{new Date(entry.created_at).toLocaleTimeString()}</td>
            <td>
              {(entry.created_at) ? (
                <button>Edit</button>
              ) : (
                'Edit Locked'
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </>;
}
