
var countMatches = function (items, ruleKey, ruleValue) {
    let ruleKeyIndex = ruleKey === "type" ? 0 : ruleKey === "color" ? 1 : 2;
    let count= items.filter(thing=> thing[ruleKeyIndex]===ruleValue)
    return count.length


};

console.log(
  countMatches(
    [
      ["phone", "blue", "pixel"],
      ["computer", "silver", "lenovo"],
      ["phone", "gold", "iphone"],
    ],
    "color",
    "silver"
  )
);
