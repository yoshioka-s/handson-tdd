import app from './src/app'
console.log('starting Express server...')

app.listen(8000, () => {
  console.log('API listening on port 8000')
})
