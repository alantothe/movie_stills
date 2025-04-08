export function capitalizeWords(string: string) {
  const stringArr = string.split("-");
  const arr = [];
  for (let i = 0; i <= stringArr.length - 1; i++) {
    const newValue = stringArr[i][0]
      .toUpperCase()
      .concat(stringArr[i].slice(1));
    arr.push(newValue);
  }
  const result = arr.join(" ");
  return result;
}