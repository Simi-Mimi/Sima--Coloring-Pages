
(function() {
    emailjs.init("GE7yIvRKPKOv_qn4p"); // החלף את YOUR_PUBLIC_KEY במפתח הציבורי שלך
})();

function emailSend(event) {
    event.preventDefault(); 

    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("subject").value,
    };

    console.log("params", params);

    const serviceID = "service_4q53qyq";
    const templateID = "template_zmwytzh";

    emailjs.send(serviceID, templateID, params).then(
        function(res) {
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("subject").value = "";
           
            console.log(res);
            alert("ההודעה שלך נשלחה בהצלחה!");
        }
    ).catch(function(err) {
        console.log(err);
        alert("התרחשה שגיאה בשליחת ההודעה. נסה שנית.");
    });
}
