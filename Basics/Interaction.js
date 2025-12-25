// alert - shows a message.
// prompt -shows a message asking the user to input text.It returns the text or, if Cancel button or Esc is clicked, null.
// confirm - shows a message and waits for the user to press “OK” or “Cancel”. It returns true for OK and false for Cancel / Esc.

alert("Hello world") // Hello world

// result = prompt(title, [default ]);
let age = prompt('How old are you?', 100);

alert(`You are ${age} years old!`); // You are 100 years old!

let isBoss = confirm("Are you the boss?");

alert(isBoss); // true if OK is pressed