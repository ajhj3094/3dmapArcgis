// 將數字帶入千分號
export default (num: string) => {
  if (!num) {
    return num
  }
  const parts = num.toString().split('.')
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  return parts.join('.')
}
