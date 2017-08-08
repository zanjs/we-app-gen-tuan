function myAsyncFunc() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('myAsyncFunction done!')
      resolve({
        data: 'Hello,World',
      })
    }, 3000)
  })
}

async function test() {
  const result = await myAsyncFunc()
  console.log(result.data) // Hello,World
}

export default test