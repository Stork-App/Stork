// import {} from 
import Chart from 'chart.js/auto'
import { Line } from 'react-chartjs-2';
export default function Graph( { userLogs }) {
    const dataSet = [
        { weeks: 23, mood: 3 },
        { weeks: 24, mood: 3 },
        { weeks: 25, mood: 5 },
        { weeks: 26, mood: 4 },
        { weeks: 27, mood: 2 },
        { weeks: 28, mood: 1 },
        { weeks: 29, mood: 4 },
      ];
      
      let sortedUserLogs = userLogs.sort(
        (log1, log2) => (log1.weeks > log2.weeks) ? 1 : (log1.weeks < log2.weeks) ? -1 : 0);

    const moodData = {
        labels: sortedUserLogs.map(row => row.weeks),
        datasets: [
            {
                label: 'Mood',
                data: sortedUserLogs.map(row => row.mood)
            }
        ,]
    };

    const abdPainData = {
        labels: sortedUserLogs.map(row => row.weeks),
        datasets: [
            {
                label: 'Abdominal Pain',
                data: sortedUserLogs.map(row => row.abd_pain)
            }
        ,]
    };

    // const backPainData = {
    //     labels: sortedUserLogs.map(row => row.weeks),
    //     datasets: [
    //         {
    //             label: 'Mood',
    //             data: sortedUserLogs.map(row => row.back_pain)
    //         }
    //     ,]
    // };
    
      return <>
      <Line data={ moodData }/>
      <Line data={ abdPainData }/>
      </>
}