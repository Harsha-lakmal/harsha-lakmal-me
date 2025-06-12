function sendMail() {
    let parm = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        title: document.getElementById("title").value,
        message: document.getElementById("message").value,
    };

    emailjs.send('service_7q6m944', 'template_xhbwcei', parm)
        .then(() => {
            console.log("Message sent successfully");

            // Clear the fields
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("title").value = "";
            document.getElementById("message").value = "";
        })
        .catch((error) => {
             document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("title").value = "";
            document.getElementById("message").value = "";
            console.error('FAILED...', error);
        });
}
