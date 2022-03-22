let scores: Record<string, number[]> = {};

scores.ion = [10]
scores.ion.push(20)

scores.george = []
scores.george.push(100)

console.dir(scores)

console.log(Object.keys(scores))

console.dir(scores.ion)
console.dir(scores["ion"])

console.log(Object.keys(scores).map(key => scores[key]))


