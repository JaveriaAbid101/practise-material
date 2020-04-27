  var objPer = [
    {
        username:"hifza",
        password:"hello"
    },
    {
        username:"ayesha",
        password:"chips" 
    },
    {
        username:"aynee",
        password:"food"
    },
]
function getInfo(){
     var  username = document.getElementById("username").value
      var password = document.getElementById("password").value

for (let  i = 0;  i < getInfo.length;  i++) {
    if (username == myFun[i].username && password == getInfo[i].password)
    {
        console.log (username +"HEllo you are logged in!!!")
        return
    }
    
}

}
