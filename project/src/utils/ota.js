export const deleteObjKeys = (obj = {}, target) => {
  Object.keys(obj).forEach((val, key) => {
    if (!target[val]) {
      delete obj[val]
    }
  })
  return obj
}
