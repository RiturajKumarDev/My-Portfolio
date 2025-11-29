(function () {
    emailjs.init({
        publicKey: "wrzGPvG8Dq_aUT-zh",
    });
})();

function sendEmail() {
    var params = {
        name: document.querySelector(".name").value,
        email: document.querySelector(".email").value,
        mobile: document.querySelector(".mobile").value,
        sms: document.querySelector(".sms").value,
    }
    if (params.name == "" || params.email == "" || params.mobile == "" || params.sms == "") {
        alert("Please fill all fields!!!");
        return;
    }
    const serviceID = "service_o243fyw";
    const templateID = "template_06srgch";
    emailjs.send(serviceID, templateID, params)
        .then(
            (res) => {
                document.querySelector(".name").value = "";
                document.querySelector(".email").value = "";
                document.querySelector(".mobile").value = "";
                document.querySelector(".sms").value = "";
                console.log(res);
                console.log(sms);
                alert("you sms send successfully.");
            })
        .catch((err) => console.log(err));
}