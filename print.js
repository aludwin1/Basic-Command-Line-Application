//Print error messages
function printError(error) {
  console.error(error.message);
}

function printMessage (username, badgeCount, point, skill) {
  const message = `${username} has ${badgeCount} total badge(s) and ${point} points in ${skill}`;
  console.log(message);
}

module.exports = {
  printError: printError,
  printMessage: printMessage
};

