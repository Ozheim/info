export const removeDuplicatesById = (array: Array<{ id: number }>): Array<object> => {
  const uniqueIds = new Set()
  const deduplicatedArray = array.filter((v, index): boolean => {
    if (!('id' in v)) {
      throw new Error(`Element #${index} in array has no key 'id'`)
    }
    const isDuplicate = uniqueIds.has(v.id)
    uniqueIds.add(v.id)
    return !isDuplicate
  })
  return deduplicatedArray
}

export const removeDuplicates = (array: Array<number | string>): Array<number | string> => {
  const uniques: Set<string | number> = new Set()
  array.forEach((v, index) => {
    if (['string', 'number'].includes(typeof v)) {
      uniques.add(v)
    } else {
      throw new TypeError(`Bad type for element #${index}. Allowed types are string and number`)
    }
  })
  return Array.from(uniques)
}
