let signupbtn=document.querySelector('.signupbtn')
let signinbtn=document.querySelector('.disable')
let title=document.querySelector('.title')
let inputfield=document.querySelector('.inputfield')
let underline=document.querySelector('.underline')

signinbtn.addEventListener('click',()=>{
    // this line do the maxheight 0 of input and also some changes in css to remove for login page in line46,47
inputfield.style.maxHeight='0'  
//this line change the title sign up to sign in
title.innerHTML='Sign In'
//add the class of disable to sign up button it add all the properties to sign up button 
signupbtn.classList.add('disable')
//remove the class of disable to sign in which konwn as disable button it add all the properties to sign up button 
signinbtn.classList.remove('disable')
// underline.style.transform='transalteX(24px)'
})
//vice versa for sign up button
signupbtn.addEventListener('click',()=>{
inputfield.style.maxHeight='60px'  
title.innerHTML='Sign up'
signupbtn.classList.remove('disable')
signinbtn.classList.add('disable')
})
