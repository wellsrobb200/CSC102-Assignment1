// Robert - CSC102 Assignment 2.3 - 05/29/2026
// This JavaScript file contains functions for the Craps dice game

// Function that takes a parameter and returns a formatted result
// This demonstrates a function that accepts input and processes it
function formatRollMessage(dieNumber, rollValue) {
    // Returns a string that combines the die number and its value
    return "Die " + dieNumber + " rolled: " + rollValue;
}

// Main game function - called when the button is clicked
function playCraps() {
    // Generate two random numbers between 1 and 6
    // Math.random() gives 0 to 0.999, multiply by 6 gives 0 to 5.999, 
    // Math.floor rounds down, then +1 makes it 1 to 6
    var die1 = Math.floor(Math.random() * 6) + 1;
    var die2 = Math.floor(Math.random() * 6) + 1;
    
    // Calculate the sum of both dice
    var sum = die1 + die2;
    
    // Use the parameter function to create formatted messages for each die
    var die1Message = formatRollMessage(1, die1);
    var die2Message = formatRollMessage(2, die2);
    
    // Variable to store the game outcome message
    var outcomeMessage = "";
    
    // GAME LOGIC - using conditionals (if/else if/else)
    // Check for losing condition: sum equals 7 OR sum equals 11
    if (sum == 7 || sum == 11) {
        outcomeMessage = "💀 CRAPS - You lose! 💀";
    } 
    // Check for winning condition: dice are equal (doubles) AND die1 is even
    // die1 % 2 == 0 means the number divided by 2 has no remainder (even number)
    // Original (correct)
    else if (die1 == die2 && die1 % 2 == 0) {
    outcomeMessage = "🏆 You won! Doubles with even numbers! 🏆";
    } 
    // Otherwise, it's a push (neither win nor lose)
    else {
        outcomeMessage = "😐 You pushed! Roll again. 😐";
    }
    
    // Build the complete HTML output using innerHTML (no alerts!)
    var fullMessage = "<h3>🎲 Roll Results 🎲</h3>";
    fullMessage += "<p>" + die1Message + "<br>";
    fullMessage += die2Message + "<br>";
    fullMessage += "<strong>Sum: " + sum + "</strong></p>";
    fullMessage += "<p><strong>" + outcomeMessage + "</strong></p>";
    
    // Display the results on the webpage by updating the innerHTML of the div
    document.getElementById("gameResult").innerHTML = fullMessage;
}
