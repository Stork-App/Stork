import Chart from 'chart.js/auto'
import { Line } from 'react-chartjs-2';
export default function Graph( { userLogs }) {
    const options = {
        responsive: true,
        // title: {
        //     display: true,
        //     text: (ctx) => 'Point Style: ' + ctx.chart.data.datasets[0],
        //   },
    }
    const moodData = {
        labels: userLogs.map(row => row.weeks),
        datasets: [
            {
                fill: true,
                label: 'Mood',
                data: userLogs.map(row => row.avg_mood),
                tension: 0.4,
                borderColor: 'rgb(154, 59, 229)',
                backgroundColor: 'rgba(154, 59, 229, 0.5)',
                pointHoverRadius: 15
            }
        ]
    };

    const abdPainData = {
        labels: userLogs.map(row => row.weeks),
        datasets: [
            {
                fill: true,
                label: 'Abdominal Pain',
                data: userLogs.map(row => row.avg_abd),
                tension: 0.4,
                borderColor: 'rgb(248, 140, 61)',
                backgroundColor: 'rgba(248, 140, 61, 0.5)',
                pointHoverRadius: 15
            }
        ,]
    };

    const backPainData = {
        labels: userLogs.map(row => row.weeks),
        datasets: [
            {
                fill: true,
                label: 'Back Pain',
                data: userLogs.map(row => row.avg_back),
                tension: 0.4,
                pointHoverRadius: 15
            }
        ,]
    };

    const nauseaData = {
        labels: userLogs.map(row => row.weeks),
        datasets: [
            {
                fill: true,
                label: 'Nausea',
                data: userLogs.map(row => row.avg_nausea),
                borderColor: 'rgb(44,185,167)',
                backgroundColor: 'rgba(44,185,167, 0.5)',
                tension: 0.4,
                pointHoverRadius: 15
            }
        ,]
    };

    const fatigueData = {
        labels: userLogs.map(row => row.weeks),
        datasets: [
            {
                fill: true,
                label: 'Fatigue',
                data: userLogs.map(row => row.avg_fatigue),
                borderColor: 'rgb(31,148,165)',
                backgroundColor: 'rgba(31,148,165, 0.5)',
                tension: 0.4,
                pointHoverRadius: 15
            }
        ,]
    };
    
      return <>
      <Line options = { options } data={ moodData }/>
      <Line options = { options } data={ abdPainData }/>
      <Line options = { options } data={ backPainData }/>
      <Line options = { options } data={ nauseaData }/>
      <Line options = { options } data={ fatigueData }/>
      </>
}