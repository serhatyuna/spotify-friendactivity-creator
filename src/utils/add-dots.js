function addDots(string, limit) {
  if (!string) return ''

  const dots = '…'
  if (string.length > limit) {
    string = string.substring(0, limit) + dots
  }

  return string
}

export default addDots
