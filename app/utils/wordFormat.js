export function formatTitleToId(title) {
  // Replace all spaces with hyphens and convert to lowercase
  // Remove any characters that are not alphanumeric or hyphens
  return title
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/gi, '');
}

export function capitalizeWords(input) {
  const words = input.split(' ');
  const capitalizedWords = words.map((word) => {
    return word.length > 0
      ? word[0].toUpperCase() + word.substring(1).toLowerCase()
      : '';
  });
  return capitalizedWords.join(' ');
}
