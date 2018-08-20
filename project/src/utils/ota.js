export const deleteObjKeys = (obj = {}, target) => {
  Object.keys(obj).forEach((val, key) => {
    if (!target[val]) {
      delete obj[val]
    }
  })
  return obj
}
export const toArray = len => {
  return Array.from({length: len}, (val, ind) => {
    return `${ind + 1}年`
  })
}
