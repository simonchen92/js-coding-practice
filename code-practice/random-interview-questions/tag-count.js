// Count the tags in the array

/*
Return something like the below:
{ 'Language:JavaScript': 2,
  'Role:WebDeveloper': 2,
  'Hobby:Basketball': 2,
  'Language:Python': 1,
  'Role:SoftwareEngineer': 2,
  'Hobby:Reading': 1,
  'Language:Ruby': 1,
  'Hobby:Running': 1,
  'Language:GO': 1,
  'Role:AndroidDeveloper': 1,
  'Hobby:Volleyball': 1
}
*/

const developers = [
  'Language:JavaScript,Role:WebDeveloper,Hobby:Basketball',
  'Language:Python,Role:SoftwareEngineer,Hobby:Reading',
  'Language:Ruby,Role:SoftwareEngineer,Hobby:Running',
  'Language:GO,Role:AndroidDeveloper,Hobby:Basketball',
  'Language:JavaScript,Role:WebDeveloper,Hobby:Volleyball'
]

const tagCounts = skills => {
  const count = {}
  for (let i = 0; i < skills.length; i++) {
    const currLine = skills[i]
    const splitLine = currLine.split(',')
    for (let j = 0; j < splitLine.length; j++) {
      if (count[splitLine[j]]) {
        count[splitLine[j]]++
      } else {
        count[splitLine[j]] = 1
      }
    }
  }
  return count
}

console.log(tagCounts(developers))

// Solution 2
// Using reduce and forEach

const output = developers.reduce((acc, current) => {
  const splitLine = current.split(',')

  splitLine.forEach(item => {
    if (acc[item]) {
      acc[item] += 1
    } else {
      acc[item] = 1
    }
  })

  return acc
}, {})

console.log(output)
