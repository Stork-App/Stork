import { useContext, useEffect, useState } from "react";
import { useAsyncError, useNavigate, useParams } from "react-router-dom";
import CurrentUserContext from "../contexts/current-user-context";
import { getUser } from "../adapters/user-adapter";
import { getAvgLogs } from "../adapters/log-adapter";
import { logUserOut } from "../adapters/auth-adapter";
import UpdateUsernameForm from "../components/UpdateUsernameForm";
import LogForm from "../components/LogForm";    
import { getLogs, updateLog } from "../adapters/log-adapter";
// import Graph from "../components/Graph";

export default function UserPage() {
 const navigate = useNavigate();
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const [userProfile, setUserProfile] = useState(null);
  const [errorText, setErrorText] = useState(null);
  const [userLogs, setUsersLogs] = useState(null);
  const [userAvgs, setUserAverages] = useState([]);
  const [editingLog, setEditingLog] = useState(null);
  const [showLogForm, setShowLogForm] = useState(false);

  const { id } = useParams();
  const isCurrentUserProfile = currentUser && currentUser.id === Number(id);

  useEffect(() => {
    const loadUser = async () => {
      const [user, error] = await getUser(id);
      const [logs] = await getLogs(id);
      const [avgs] = await getAvgLogs(id);
      setUsersLogs(logs)
      setUserAverages(avgs)
      if (error) return setErrorText(error.message);
      setUserProfile(user);
    };

    loadUser();
  }, [id]);

  const updateLogs = async () => {
    try {
      const [logs] = await getLogs(currentUser.id);
      console.log(logs)
      setUsersLogs(logs);

    } catch (error) {
      console.error("Failed to fetch logs:", error);
    }
  };
  
  
  useEffect(() => {
    // Check if 24 hours have passed since the last log entry
    if (!userLogs || userLogs.length === 0) {
      setShowLogForm(true);
    } else if (userLogs.length > 0) {
      const lastLogCreatedAt = new Date(userLogs[0].created_at);
      const twentyFourHoursAgo = new Date();
      twentyFourHoursAgo.setDate(twentyFourHoursAgo.getDate() - 1);
  
      if (lastLogCreatedAt <= twentyFourHoursAgo) {
        setShowLogForm(true);
      } else {
        setShowLogForm(false); // Optionally hide the form if conditions are not met
      }
    }
  }, [userLogs]);

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
    event.preventDefault(); 
    const formData = new FormData(event.target);
    const updatedLogData = {
        mood: formData.get('mood'),
        abd_pain: formData.get('abd_pain'),
        back_pain: formData.get('back_pain'),
        nausea: formData.get('nausea'),
        fatigue: formData.get('fatigue'),
        weeks: Number(formData.get('weeks'))
        
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
  <header class="user-banner">
  <div class="banner-content">
    <div class="user-details">
          <h1>Welcome back, {profileUsername}!</h1>
      <p>Here's a snapshot of your recent activity. Keep up the great work!</p>
   
    </div>
  </div>
</header>

    <h1 className="symptom-stats">Your Symptom Stats!</h1>

    <div class="stats-container">
    <div class="stat-card mood">
        <h2>Mood</h2>
        <div class="stat-circle">
          <span>{userAvgs.mood }</span>
        </div>
    </div>
    <div class="stat-card abdominal-pain">
        <h2>Abdominal Pain</h2>
        <div class="stat-circle">
            <span>{userAvgs.abd_pain}</span>
        </div>
      </div>
      <div class="stat-card back-pain">
        <h2>Back Pain</h2>
        <div class="stat-circle">
            <span>{userAvgs.back_pain}</span>
        </div>
      </div>
      <div class="stat-card nausea">
        <h2>Nausea</h2>
        <div class="stat-circle">
            <span>{userAvgs.nausea}</span>
        </div>
      </div>
      <div class="stat-card abdominal-pain">
        <h2>Fatigue</h2>
        <div class="stat-circle">
            <span>{userAvgs.fatigue}</span>
        </div>
      </div>
   
</div>


    {showLogForm && <LogForm currentUser={currentUser} updateLogs={updateLogs} editingLog={editingLog} setShowLogForm={setShowLogForm}/>  }
   
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
          
            <td>

              {(index === 0) ? (
                <button onClick={() => { setEditingLog(entry); setShowLogForm(true); }}>Edit</button>

              ) : (
                null
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </>;
}
