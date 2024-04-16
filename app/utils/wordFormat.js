export function formatTitleToId(title) {
  // Replace all spaces with hyphens and convert to lowercase
  // Remove any characters that are not alphanumeric or hyphens
  return title
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/gi, '');
}
