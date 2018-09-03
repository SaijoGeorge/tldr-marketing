export const em = (val, base = 16) =>
  typeof val === 'number' && val !== 0 ? `${val / base}em` : val

export const rem = (val, base = 16) =>
  typeof val === 'number' && val !== 0 ? `${val / base}rem` : val

export const min = width => `@media (min-width: ${em(width)})`

export const max = width => `@media (max-width: ${em(width)})`
