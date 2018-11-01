const express = require('express')
const app = express()
const port = 3000

const exec = require('child_process').exec

app.get('/', (req, res) => {
  exec(
    'echo "jE7yBJVRNAwdDesMgTzTXUUSx1It41Fq" | bash ./../app/fetch-api 7 2018 | node ../app/parse-response',
    (_, out, err) => {
      const data = `[${out.trim().split('\n').join(',')}]`
      res.json(JSON.parse(data))
    }
  )
})

app.listen(port, () => console.log(`Listening on port ${port}!`))