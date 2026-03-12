/* Code Generated Using Copiolot */
document.getElementById("lineupForm").addEventListener("submit", myLineUp);

function myLineUp(event) {
   event.preventDefault();

   let status = document.querySelector("input[name='status']:checked").value;
   let date = document.getElementById("gameDate").value;

   let players = [];
   document.querySelectorAll("input[name='players']:checked").forEach(box => {
      players.push(box.value);
   });

   console.log("Status:", status);
   console.log("Game Date:", date);
   console.log("Players:", players.join(", "));

   let result = "Status: " + status + " | Date: " + date + " | Players: " + players.join(", ");

   document.getElementById("output").innerHTML = result;
}
