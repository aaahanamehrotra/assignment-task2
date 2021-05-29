const express = require('express')
const app = express()
const port = 3000

app.get('/number', (req, res)=>{
    res.send('Go to /number/:num to check if :num is odd or even')
})
app.get('/number/:num', (req, res) => {
    var inputNumber = req.params.num
    if (isNaN(inputNumber)){
        res.send(":num should be a number")
    }
    else{
        let oddEven;
        if(inputNumber%2 ==  1){
            oddEven = "odd"
        }
        else{
            oddEven = "even"
        }
        res.send("The number " + inputNumber + " is " + oddEven)
    }
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})