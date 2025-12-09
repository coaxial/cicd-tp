function getGreeting(name) {
  const greeting = `Hello world!`;
  const nameStr = String(name ?? '').trim();

  if (nameStr) {
    return `${greeting} From ${nameStr}`;
  }

  return greeting;
}

module.exports = { getGreeting };
