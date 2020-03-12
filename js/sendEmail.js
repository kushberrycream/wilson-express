function sendMail(contactForm) {
    emailjs.send("wilsons", "acount", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.email.value,
        "from_tel": contactForm.telephone.value,
        "message": contactForm.message.value,
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
            document.getElementById("sendmessage").style.display ="block";
            
        },
        function(error) {
            console.log("FAILED", error);
            document.getElementById("errormessage").style.display ="block";
        });
    return false;
}