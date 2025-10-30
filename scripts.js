document.addEventListener("DOMContentLoaded", function () {
    const table = document.getElementById("leaderboard");
    const rows = Array.from(table.rows).slice(1); // Skip the header row

    // Sort by score (second column)
    function sortByScore() {
        const sortedRows = rows.sort((rowA, rowB) => {
            const scoreA = parseFloat(rowA.cells[2].textContent);
            const scoreB = parseFloat(rowB.cells[2].textContent);
            return scoreB - scoreA; // Descending order
        });

        sortedRows.forEach(row => table.appendChild(row)); // Reorder rows in the table
    }

    // Sort when the page loads
    sortByScore();
});
