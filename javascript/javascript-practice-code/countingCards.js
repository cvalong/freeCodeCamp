/*write a card counting function. 
It will receive a card parameter, 
  which can be a number or a string, and 
  increment or decrement the global count variable according to the card's value (see table). 
The function will then return a string with the current count and 
  the string Bet if the count is positive, or Hold if the count is zero or negative. 
The current count and the player's decision (Bet or Hold) should be separated by a single space.

Count Change	Cards
	+1	        2, 3, 4, 5, 6
	 0	        7, 8, 9
	-1	        10, 'J', 'Q', 'K', 'A'
*/
let count = 0;

function cc(card) {
  // Only change code below this line
  let faceCards = ['J', 'Q', 'K', 'A'];
  if (faceCards.includes(card) || card == 10) {
    count--;
  }
  else if (card <= 6) {
    count++;
  }
  if (count <= 0) {
    return count + " Hold";
  }
  else {
    return count + " Bet";
  }
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');