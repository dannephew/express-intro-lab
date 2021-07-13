export { 
	find
}

const cats = [
  {name: 'Amy', neutered: true, _id: 1},
  {name: 'Bob', neutered: false, _id: 2},
  {name: 'Connor', neutered: false, _id: 3},
]

const find = (conditions, callback) => {
  // see if this works, if not, execute the code in the catch block
  try {
    // make sure that conditions is an object - if not throw a TypeError
    if (!(conditions instanceof Object)){
      throw new TypeError('Please pass in an object')
    }
    // If the object is empty, return all the cats
    if (Object.keys(conditions).length === 0) return callback(null, cats)
	// deal with errors
  } catch (error) {
    console.log(error)
    callback(error, [])
  }
}