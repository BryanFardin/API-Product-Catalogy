import app from './app'

const port = process.env.PORT

app.listen(port, () => {
  console.log()
  console.log(`Listen on port ${port}`)
  console.log(`CTRL + Clique em http://localhost:${port}`)
})
