
function sortPeople(names: string[], heights: number[]): string[] {

  const heightsDescending = [...heights].sort((a,b)=>b-a)
  return heightsDescending.map(name=>names[heights.indexOf(name)])


}

console.log(sortPeople(["Mary","John","Emma"],[180,165,170]))