document.addEventListener("DOMContentLoaded", function() {
    const leaderboardData = [
        { rank: 1, model: "Model A", accuracy: "98.5%", time: "2023-10-28" },
        { rank: 2, model: "Model B", accuracy: "95.2%", time: "2023-10-27" },
        { rank: 3, model: "Model C", accuracy: "93.1%", time: "2023-10-26" }
    ];

    const leaderboardTable = document.getElementById("leaderboard").getElementsByTagName("tbody")[0];
    
    leaderboardData.forEach(data => {
        const row = leaderboardTable.insertRow();
        row.insertCell(0).textContent = data.rank;
        row.insertCell(1).textContent = data.model;
        row.insertCell(2).textContent = data.accuracy;
        row.insertCell(3).textContent = data.time;
    });
});
