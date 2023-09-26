document.getElementById('btn-submit').addEventListener('click',function(){
    const email= document.getElementById('email-address').value
    const password =document.getElementById('password-field').value
    if(email=='resmikasona6@gmail.com' || email=='resmikasona6@gmail.com' || email=='sayem.01fficial@gmail.com'){
        window.location.href = 'main.html'
    }
   else{
    alert('Please Correct Your Username Or Password')
   }
})