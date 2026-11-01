// cards.js – bed sheet cards aur comparison table banane wale functions.
// Home page aur Bed Sheets page dono yahi use karte hain.
function bedSheetCard(p) {
  var msg = "Hello, I want price and wholesale details for: " + p.name + " bed sheet";
  return '<div class="card">' +
    '<a href="product.html?id=' + p.id + '"><img src="' + p.images[0] + '" alt="' + p.name + '"></a>' +
    '<div class="b">' +
    '<span class="tag">Available</span>' +
    '<a href="product.html?id=' + p.id + '"><h3>' + p.name + "</h3></a>" +
    '<div class="pill">' + p.blend + "</div>" +
    '<div class="pill">' + p.tc + " · " + p.weave + "</div>" +
    '<div class="pill"><b>For price, contact us</b></div>' +
    '<a class="btn wa sm" target="_blank" rel="noopener" href="' + waLink(msg) + '">💬 Contact Us</a>' +
    "</div></div>";
}

function renderBedSheetCards(containerId, list) {
  document.getElementById(containerId).innerHTML = list.map(bedSheetCard).join("");
}

function renderBedSheetTable(containerId) {
  var rows = BED_SHEETS.map(function (p) {
    return '<tr><td><a href="product.html?id=' + p.id + '">' + p.name + "</a></td><td>" + p.blend + "</td><td>" + p.tc +
      "</td><td>" + p.weave + "</td><td>" + p.feel + "</td><td>" + p.use + "</td></tr>";
  }).join("");
  document.getElementById(containerId).innerHTML =
    '<div class="tw"><table><tr><th>Quality</th><th>Blend</th><th>Thread Count</th><th>Weave</th><th>Feel</th><th>Best for</th></tr>' + rows + "</table></div>";
}
