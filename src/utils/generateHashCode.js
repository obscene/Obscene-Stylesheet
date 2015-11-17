/**
 * Generates a hashcode from a string
 * Taken from http://stackoverflow.com/a/7616484
 * @param {string} str - str used to generate the unique hash code
 */
export default str => {
  let hash = 0
  let i
  let char
  const length = str.length
  if (length === 0) {
    return hash
  }
  for (i = 0; i < length; ++i) {
    char = str.charCodeAt(i)
    hash = ((hash << 5) - hash) + char
    hash |= 0
  }
  return hash.toString(36)
}