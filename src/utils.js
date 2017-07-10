/**
 * A function to return the theme variables
 * the parameter looks like this:
 * {
 *   colors: [object] {
 *     primary: [string],
 *     secondary: [string],
 *     tertiary: [string],
 *     success: [string],
 *     information: [string],
 *     error: [string],
 *     warning: [string],
 *     black: [string],
 *     white: [string],
 *     gray: [string],
 *   },
 *   spacing: [array] [
 *     length: 6,
 *     strings of spacing values
 *   ],
 *   fontFamily: [string],
 *   breakpoints: [object] {
 *     small: [string]
 *     medium: [string]
 *     large: [string]
 *   },
 *   width: [string]
 * }
 * @param {Object} overrides 
 */

export const makeTheme = (overrides = {}) => ({
  colors: overrides.colors
    ? overrides.colors
    : {
        primary: '#00FA9A',
        secondary: '#0064fa',
        tertiary: '#fa9600',
        success: '#65fb74',
        information: '#7c6efc',
        error: '#fb7465',
        warning: '#fbaf3e',
        black: '#000000',
        white: '#f9f9f9',
        gray: '#ebebeb',
      },
  spacing: overrides.spacing ? overrides.spacing : ['.5rem', '1rem', '2rem', '4rem', '8rem', '16rem'],
  fontFamily: overrides.fontFamily ? overrides.fontFamily : 'avenir, sans-serif',
  breakpoints: {
    small: '15rem',
    medium: '35rem',
    large: '45rem',
  },
  width: '35rem',
})
