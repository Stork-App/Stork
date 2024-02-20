// import {} from 
import Chart from 'chart.js/auto'
import { Line } from 'react-chartjs-2';
export default function Graph() {
    const dataSet = [
        { weeks: 23, mood: 3 },
        { weeks: 24, mood: 3 },
        { weeks: 25, mood: 5 },
        { weeks: 26, mood: 4 },
        { weeks: 27, mood: 2 },
        { weeks: 28, mood: 1 },
        { weeks: 29, mood: 4 },
      ];

    const data = {
        labels: data.map(row => row.weeks),
        datasets: [
            {
                label: 'Mood',
                data: data.map(row => row.mood)
            }
        ,]
    };
    
      return (
    //     new Chart(
    //     {
    //       type: 'bar',
    //       data: {
    //         labels: data.map(row => row.weeks),
    //         datasets: [
    //           {
    //             label: 'Mood',
    //             data: data.map(row => row.mood)
    //           }
    //         ]
    //       }
    //     }
    //   )
    <Line data={ data }/>
    );
}