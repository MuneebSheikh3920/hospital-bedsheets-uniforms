// layout.js – har page ka Header, Footer aur WhatsApp button yahan se aata hai.
// Menu badalna ho to sirf yahan badlein, saare pages mein change ho jayega.
(function () {
  var page = document.body.dataset.page || "";
  var menu = [
    ["home", "index.html", "Home"],
    ["bed-sheets", "bed-sheets.html", "Bed Sheets"],
    ["patient-dresses", "patient-dresses.html", "Patient Dresses"],
    ["nurse-dresses", "nurse-dresses.html", "Nurse Dresses"],
    ["doctor-dresses", "doctor-dresses.html", "Doctor Dresses"],
    ["contact", "contact.html", "Contact"]
  ];
  var links = menu.map(function (m) {
    return '<a href="' + m[1] + '"' + (m[0] === page ? ' class="on"' : "") + ">" + m[2] + "</a>";
  }).join("");
  var hello = waLink("Hello, I want wholesale details");

  document.getElementById("site-header").innerHTML =
    '<div class="top">Hospital linen &amp; uniforms · <b>Wholesale only</b> · For price, contact us on WhatsApp</div>' +
    '<header><div class="bar">' +
    '<a class="logo" href="index.html"><i>✚</i><span>' + SHOP_NAME + "<small>Wholesale Supplier</small></span></a>" +
    "<nav>" + links + "</nav>" +
    '<a class="btn wa sm hcta" target="_blank" rel="noopener" href="' + hello + '">💬 WhatsApp Us</a>' +
    "</div></header>";

  document.getElementById("site-footer").innerHTML =
    "<footer><div class='wrap'><div class='cols'>" +
    '<div><a class="logo" href="index.html"><i>✚</i><span>' + SHOP_NAME + "</span></a><p>Trusted wholesale supplier of hospital bed sheets and medical uniforms for hospitals, clinics and retailers.</p></div>" +
    '<div><h4>Products</h4><a href="bed-sheets.html">Bed Sheets</a><a href="patient-dresses.html">Patient Dresses</a><a href="nurse-dresses.html">Nurse Dresses</a><a href="doctor-dresses.html">Doctor Dresses</a></div>' +
    '<div><h4>Company</h4><a href="index.html">Home</a><a href="contact.html">Contact Us</a></div>' +
    '<div><h4>Get a Quote</h4><p>Prices are shared on request.</p><a class="btn wa sm" target="_blank" rel="noopener" href="' + hello + '">💬 WhatsApp Us</a></div>' +
    "</div><div class='bot'><span>© " + SHOP_NAME + " All rights reserved.</span><span>Wholesale supply · Hospitals · Clinics · Retailers</span></div></div></footer>" +
    '<a class="fab" target="_blank" rel="noopener" href="' + hello + '">💬 WhatsApp</a>';

  // Koi bhi button jis par data-wa="message" likha ho, WhatsApp link ban jata hai
  document.querySelectorAll("[data-wa]").forEach(function (el) {
    el.href = waLink(el.dataset.wa);
    el.target = "_blank";
    el.rel = "noopener";
  });
})();
