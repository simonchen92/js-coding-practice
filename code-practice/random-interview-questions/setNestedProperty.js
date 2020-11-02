const obj = {
  id: '52461'
}

// Solution should be something like the below

// expectedObj = {
//   id: '52461',
//   person: {
//     name: {
//       first: 'Jeff'
//     }
//   }
// }

/*
 * propertyName can be a simple property name or
 * a nested property name. A simple property name
 * is a standard Javascript property name, composed
 * of a letter followed by zero or more letters or digits.
 * For example, "person". A nested property name is
 * a name composed of one or more simple property names
 * separated by ".". For example, "person.name.first".
 * If propertyName is a nested property name,
 * setNestedProperty should create intermediate objects
 * and properties as necessary.
 */
function setNestedProperty (object, propertyName, value) {
  // TODO implement
  const property = propertyName.split('.')
  for (let i = 0; i < property.length - 1; i++) {
    const newObj = property[i]
    if (object.hasOwnProperty(newObj)) {
      return true
    } else {
      object[newObj] = {}
    }
    object = object[newObj]
    console.log(obj)
  }
  object[property[property.length - 1]] = value
  return object
}

console.log(setNestedProperty(obj, 'person.name.first', 'Jeff'))
