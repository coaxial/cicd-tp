const { getGreeting } = require('../../src/greeting');

describe('getGreeting', () => {
  it('should return a greeting with a valid name', () => {
    expect(getGreeting('John')).toBe('Hello John');
  });

  it('should return a greeting with an empty name', () => {
    expect(getGreeting('')).toBe('Hello');
  });

  it('should return a greeting with a name with spaces', () => {
    expect(getGreeting('John Doe')).toBe('Hello John Doe');
  });

  it('should return a greeting with a name with special characters', () => {
    expect(getGreeting('John@Doe')).toBe('Hello John@Doe');
  });

  it('should return a greeting with a very long name', () => {
    const longName = 'a'.repeat(100);
    expect(getGreeting(longName)).toBe(`Hello ${longName}`);
  });

  it('should return a greeting with a name in uppercase', () => {
    expect(getGreeting('JOHN')).toBe('Hello JOHN');
  });

  it('should return a greeting with a name with numbers', () => {
    expect(getGreeting('John123')).toBe('Hello John123');
  });

  it('should return a greeting with a name with non-ASCII characters', () => {
    expect(getGreeting('Jöhn Döe')).toBe('Hello Jöhn Döe');
  });

  it('should return a greeting with a name containing a tab character', () => {
    expect(getGreeting('\t')).toBe('Hello \t');
  });

  it('should return a greeting with a name containing a newline character', () => {
    expect(getGreeting('\n')).toBe('Hello \n');
  });
});
