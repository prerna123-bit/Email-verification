let btn=document.querySelector("#btn");

btn.addEventListener("click",()=>{
    let email=document.querySelector("#email").value;
    let errMsg=document.querySelector("#error-message");

    let pattern=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if(pattern.test(email)){
        errMsg.style.display="none";
        alert("Email is valid! Form Submitted.");
        document.querySelector(".emailForm").reset();
    }else{
        errMsg.style.display="block";
        errMsg.style.color="red";
        errMsg.innerText="Please enter a valid email address.";
    }
});