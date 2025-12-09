function getGreeting(name) {
  const greeting = `Hello world!`;

  // Trim whitespace first and handle empty strings
  const trimmedName = name ? String(name).trim() : '';
  if (trimmedName) {
    const wisher = `From ${trimmedName}`;

    return `${greeting} ${wisher}`;
  }

  return greeting;
}

module.exports = { getGreeting };
