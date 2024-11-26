// Import the readline module to handle user input
const readline = require('readline');

// Create an interface for reading input from stdin and writing output to stdout
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Display the welcome message and prompt for the user's name
rl.question('Welcome to Holberton School, what is your name?\n', (name) => {
  // Display the user's name
  console.log(`Your name is: ${name}`);

  // Close the readline interface
  rl.close();
});

// Listen for the 'close' event to display the closing message
rl.on('close', () => {
  console.log('This important software is now closing');
  process.exit(0);
});
