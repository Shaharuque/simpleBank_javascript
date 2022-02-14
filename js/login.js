

document.getElementById('submit-btn').addEventListener('click',function(){
    // console.log("clicked")
    const userText=document.getElementById('user-field')
    // console.log(userText.value)
    const user=userText.value
    const userPass=document.getElementById('password-field')
    // console.log(userPass.value)
    const pass=userPass.value

    //checking email and pass is matched or not
    if(user=='shaik' && pass=='123'){
        // console.log('Valid user')
        window.location.href = "banking.html"; //navigate to another page named banking.html
    }
    else{
        alert("user not found")
    }
})