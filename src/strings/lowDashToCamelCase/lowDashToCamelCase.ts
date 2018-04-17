/**
 * Created on 17.04.18.
 *
 * @author Maximilian Beck <maximilian.beck@wtl.de>
 */

/**
 * Converts a low dash separated string to camel case string
 *
 * @param {String} string : String : The string to convert
 * @return {string} : The converted string
 */
export const lowDashToCamelCase = (string: string) => {
  const str = string.toString().trim();
  if (str === str.toString().toUpperCase()) {
    return str;
  }

  // save starting low dashes
  let first = '';
  let execString = str;
  while (execString.toString().charAt(0) === '_') {
    first += execString.toString().charAt(0);
    execString = execString.toString().slice(1);
  }

  // Convert string to camelCase
  execString = execString.replace(/_+([^_]+)/g, (whole, match) => match.charAt(0).toUpperCase() + match.slice(1));

  const out = first + execString;
  return out.length > first.length ? out : str;
};
