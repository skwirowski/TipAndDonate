export const firsLetterToUpperCase = (string) => {
  return (
    string
      .split(' ')
      .map((substring) => {
        return (
          substring
            .charAt(0)
            .toUpperCase() + substring.slice(1))
      })
      .join(' ')
  );
};