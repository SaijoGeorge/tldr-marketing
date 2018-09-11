export const em = (val, base = 16) =>
  typeof val === 'number' && val !== 0 ? `${val / base}em` : val

export const rem = (val, base = 16) =>
  typeof val === 'number' && val !== 0 ? `${val / base}rem` : val

export const min = width => `@media (min-width: ${em(width)})`

export const max = width => `@media (max-width: ${em(width)})`

export const mediaGetters = values =>
  Object.entries(values).reduce(
    (acc, [key, val]) => {
      acc[key] = min(val)
      acc.min[key] = min(val)
      acc.max[key] = max(val - 1)
      acc.query[key] = `(min-width: ${em(val)})`
      acc.query.min[key] = `(min-width: ${em(val)})`
      acc.query.max[key] = `(max-width: ${em(val - 1)})`

      return acc
    },
    {
      px: values,
      em: em(values),
      query: { min: {}, max: {} },
      min: {},
      max: {},
    }
  )

export const spaceGetters = values =>
  Object.entries(values).reduce(
    (acc, [key, val]) => {
      acc[key] = rem(val)
      return acc
    },
    { px: values }
  )
