const {readfile, writefile} = require('fs')
console.log('start')
readfile('./content/first.txt', 'utf8', (err, result)=>{
    if (err){
        console,log(err)
        return
    }
})

const first = result
readfile('./content/second.txt','utf8', (err, result)=>{
if (err){
    console.log(err)
    return
}
console.log('done with this task')
})

console.log('starting next task')