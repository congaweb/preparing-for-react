// snake_case
// 'simple is best' -> 'simple_is_best'
export function snakeCase(data) {
  return data.toString().replace(/\s/g, '_');
}

// kebab-case
// 'simple is best' -> 'simple-is-best'
export function kebabCase(data) {
  return data.toString().replace(/\s/g, '-');
}

// camelCase
// 'simple is best' -> 'simpleIsBest'
export function camelCase(data) {
  return data
    .toString()
    .replace(/\s\w/g, (match) => match.toUpperCase().trim());
}

// TitleCase
// 'simple is best' -> 'SimpleIsBest'
export function TitleCase(data) {
  return data
    .toString()
    .replace(/(^\w|\s\w)/g, (match) => match.toUpperCase().trim());
}
