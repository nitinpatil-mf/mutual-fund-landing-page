function sendToWhatsApp(event){

    event.preventDefault();


    let name = document.getElementById("name").value;

    let mobile = document.getElementById("mobile").value;

    let email = document.getElementById("email").value;

    let category = document.getElementById("category").value;


    let message = 
`New Wealth Consultation Enquiry

Name: ${name}

Mobile: ${mobile}

Email: ${email}

Investor Category: ${category}`;


    let whatsappNumber = "918975664026";


    let url = 
    "https://wa.me/" + whatsappNumber +
    "?text=" + encodeURIComponent(message);


    window.open(url, "_blank");

}