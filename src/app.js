const arrow = () => {
  console.log('hello babel')
}

const obj = {
  id: 1
}
const obj2 = {
  age: 24,
  name: 'babel',
  ...obj
}

const asyncFn = () => {
  return new Promise((resolve, reject) => {
    const obj2 = {
      name: 'babel',
      ...obj
    }
    setTimeout(() => {
      resolve(obj2)
    }, 3000)
  })
}

asyncFn().then(data => {
  console.log('result', data)
})
