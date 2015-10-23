import assignStyles from 'assign-styles'

/**
 * Resolves multiple style objects by merging those
 * @param {Object|Array} styles - A set of style objects or a single style object
 */
const resolveStyles = (styles) => {
  if (styles instanceof Array) {
    const merged = {}
    styles.forEach(obj => assignStyles(merged, obj))
    return merged
  }
  return styles
}

/**
 * Extends a given style object
 * @param {Object} options - mixin options/input
 * options can be either a style object or include a condition as well as styles
 */
export default (property, options) => {
  if (options.hasOwnProperty('condition')) {
    if (options.condition) {
      if (options.hasOwnProperty('styles')) {
        return resolveStyles(options.styles)
      }

      console.warn('There has no style object been passed. Use `styles` as key.')
    }
  } else {
    if (options.hasOwnProperty('styles')) {
      return resolveStyles(options.styles)
    }

    console.warn('Neither `styles` nor `condition` has been found. Used the whole object as styles instead.')

    return resolveStyles(options)
  }
}
