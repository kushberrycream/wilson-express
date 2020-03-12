function sendMail(contactForm) {
    emailjs.send("wilsons", "account", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.email.value,
        "from_tel": contactForm.telephone.value,
        "message": contactForm.message.value,
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
            alert("Sent Successfully");
        },
        function(error) {
            console.log("FAILED", error);
            alert("Send Failure");
        });
    return false;
}