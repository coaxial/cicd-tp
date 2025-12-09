function getGreeting(name) {
  if (name) {
    return `Hello ${name}!`;
  }

  return 'Hello stranger!';
}

module.exports = { getGreeting };
