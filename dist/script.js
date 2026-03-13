/* Code Generated Using Copilot comments added by me */
/* Add an event listener to a function called myLineUp to the submit button */
document.getElementById("lineupForm").addEventListener("submit", myLineUp);

/* 
 * function myLineUp should print all the data that it received to the console and then 
 * concatenate all the information together into one string and display the selections on the 
 * web page 
 */
function myLineUp(event) {
   event.preventDefault();

   let status = document.querySelector("input[name='status']:checked").value;
   let date = document.getElementById("gameDate").value;

   let players = [];
   /* Stores the selected players */
   document.querySelectorAll("input[name='players']:checked").forEach(box => {
      players.push(box.value);
   });

   /* Prints the data to the console */
   console.log("Status:", status);
   console.log("Game Date:", date);
   console.log("Players:", players.join(", "));

   /* concatenates all the information together into one string */
   let result = "Status: " + status + " | Date: " + date + " | Players: " + players.join(", ");

   /* displays the selections on the web page */
   document.getElementById("output").innerHTML = result;
}
