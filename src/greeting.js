function getGreeting(name) {
  const greeting = `Hello world!`;
  
  if (typeof name === 'string' && name.trim() !== '') {
    return `${greeting} From ${name.trim()}`;
  } else if (name) {
    return `${greeting} From ${String(name).trim()}`;
  }

  return greeting;
}

module.exports = { getGreeting };
