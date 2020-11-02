// Your task
// You are given a dictionary/hash/object containing some languages and your test results in the given languages.
// Return the list of languages where your test score is at least 60, in descending order of the results.

// Note: the scores will always be unique (so no duplicate values)

// Examples
// {"Java": 10, "Ruby": 80, "Python": 65}    -->  ["Ruby", "Python"]
// {"Hindi": 60, "Dutch" : 93, "Greek": 71}  -->  ["Dutch", "Greek", "Hindi"]
// {"C++": 50, "ASM": 10, "Haskell": 20}     -->  []

// Direct Link
// https://www.codewars.com/kata/5b16490986b6d336c900007d/javascript

// Solution
function myLanguages (results) {
  return Object.keys(results).filter(language => results[language] >= 60).sort((a, b) => results[b] - results[a])
}

console.log(myLanguages({'Java': 10, 'Ruby': 80, 'Python': 65}))
console.log(myLanguages({'Hindi': 60, 'Dutch': 93, 'Greek': 71}))
console.log(myLanguages({'C++': 50, 'ASM': 10, 'Haskell': 20}))
