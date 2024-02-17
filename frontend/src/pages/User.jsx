import { useContext, useEffect, useState } from "react";
import { useAsyncError, useNavigate, useParams } from "react-router-dom";
import CurrentUserContext from "../contexts/current-user-context";
import { getUser } from "../adapters/user-adapter";
import { getAvgLogs } from "../adapters/log-adapter";
import { logUserOut } from "../adapters/auth-adapter";
import UpdateUsernameForm from "../components/UpdateUsernameForm";
import LogForm from "../components/LogForm";    
import { getLogs, updateLog } from "../adapters/log-adapter";

export default function UserPage() {
 const navigate = useNavigate();
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const [userProfile, setUserProfile] = useState(null);
  const [errorText, setErrorText] = useState(null);
  const [userLogs, setUsersLogs] = useState(null);
  const [userAvgs, setUserAverages] = useState([]);
  const [editingLog, setEditingLog] = useState(null); 

  const { id } = useParams();
  const isCurrentUserProfile = currentUser && currentUser.id === Number(id);

  useEffect(() => {
    const loadUser = async () => {
      const [user, error] = await getUser(id);
      const [logs] = await getLogs(id);
      // console.log(logs[0].created_at)
      const [avgs] = await getAvgLogs(id);
      setUsersLogs(logs)
      setUserAverages(avgs)
      if (error) return setErrorText(error.message);
      setUserProfile(user);
    };

    loadUser();
  }, [id]);

  // console.log('UserAverages', userAvgs.mood)
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

  const handleLogUpdate = async (event) => {
    event.preventDefault(); // Prevent the default form submit action

    // Correctly capture the form data
    const formData = new FormData(event.target);
    const updatedLogData = {
        mood: formData.get('mood'),
        abd_pain: formData.get('abd_pain'),
        back_pain: formData.get('back_pain'),
        nausea: formData.get('nausea'),
        fatigue: formData.get('fatigue'),
    };
    console.log(updatedLogData)
  
    try {
        // Assuming editingLog.id contains the correct ID
      await updateLog(editingLog.id, updatedLogData, currentUser.id); // Pass currentUser.id if your backend requires it
    
        // If the update was successful, you might want to refresh the logs displayed
      const logs = await getLogs(currentUser.id); // Assuming getLogs fetches all logs for the current user

  
      console.log(logs)
        setUsersLogs(logs[0]);
        setEditingLog(null); // Reset editing state
    } catch (error) {
        console.error("Failed to update log:", error);
        // Handle error, e.g., by displaying an error message to the user
    }
};

  
  return <>
    
    <h1>{profileUsername}</h1>
    { !!isCurrentUserProfile && <button onClick={handleLogout}>Log Out</button> }
    <p>If the user had any data, here it would be</p>
    <p>Fake Bio or something</p>

    {/* user averages functionality */}
    <h1>Your Symptom Stats!</h1>
    <h3>Mood: {userAvgs.mood}</h3>
    <h3>Abdominal Pain: {userAvgs.abd_pain}</h3>
    <h3>Back Pain: {userAvgs.back_pain}</h3>
    <h3>Nausea: {userAvgs.nausea}</h3>
    <h3>Fatigue: {userAvgs.fatigue}</h3>
    {/* user averages functionality */}


    {
      !!isCurrentUserProfile
        && <UpdateUsernameForm currentUser={currentUser} setCurrentUser={setCurrentUser}/>
    }

    <LogForm currentUser = {currentUser} />
   
   {/* user table functionality */}
    <table>
      <thead>
        <tr>
          <th>Mood</th>
          <th>abd_pain</th>
          <th>back_pain</th>
          <th>Nausea</th>
          <th>Fatigue</th>
          <th>Weeks</th>
          <th>Created At</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {userLogs.map((entry,index) => (
          <tr key={entry.id}>
            <td>{entry.mood}</td>
            <td>{entry.abd_pain}</td>
            <td>{entry.back_pain}</td>
            <td>{entry.nausea}</td>
            <td>{entry.fatigue}</td>
            <td>{entry.weeks}</td>
            <td>{new Date(entry.created_at).toLocaleTimeString()}</td>
            <td>

              {(index === 0) ? (
             <button onClick={() => setEditingLog(entry)}>Edit</button>

              ) : (
                'Edit Locked'
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    {editingLog && (
  <form onSubmit={handleLogUpdate}>
       <input name="mood" defaultValue={editingLog.mood} />
<input name="abd_pain" defaultValue={editingLog.abd_pain} />
<input name="back_pain" defaultValue={editingLog.back_pain} />
<input name="nausea" defaultValue={editingLog.nausea} />
<input name="fatigue" defaultValue={editingLog.fatigue} />

    {/* Repeat for abd_pain, back_pain, nausea, fatigue */}
    <button type="submit">Save Changes</button>
  </form>
)}
  </>;
}
