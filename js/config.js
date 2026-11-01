// config.js – yahan apni basic settings badlein
// WhatsApp number: country code ke sath, bina + aur bina 0 ke (Pakistan: 92 + number)
const WHATSAPP_NUMBER = "923037903920";
const SHOP_NAME = "Hospital Linen Co.";

// WhatsApp link banata hai (message pehle se likha hota hai)
function waLink(message) {
  return "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(message);
}
