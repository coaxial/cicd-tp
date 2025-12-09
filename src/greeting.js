function getGreeting(name) {
  const greeting = "Hello world!";
  
  if (name === undefined || name === null) {
    return greeting;
  }

  const stringName = String(name);
  const trimmedName = stringName.trim();

  return trimmedName ? `${greeting} From ${trimmedName}` : greeting;
}

module.exports = { getGreeting };
