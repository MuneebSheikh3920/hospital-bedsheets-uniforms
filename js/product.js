// product.js – single product page. URL: product.html?id=poly-cotton-70-30
(function () {
  var id = new URLSearchParams(location.search).get("id");
  var p = BED_SHEETS.find(function (x) { return x.id === id; }) || BED_SHEETS[0];
  var msg = "Hello, I want price and wholesale details for: " + p.name + " bed sheet";
  function set(i, t) { document.getElementById(i).textContent = t; }

  document.title = p.name + " Bed Sheet – " + SHOP_NAME;
  set("p-crumb", p.name);
  set("p-title", p.name + " Bed Sheet");
  set("p-desc", p.desc);

  // Images + thumbnails
  var main = document.getElementById("p-main");
  main.src = p.images[0]; main.alt = p.name;
  var thumbs = document.getElementById("p-thumbs");
  thumbs.innerHTML = p.images.map(function (s, i) { return '<img src="' + s + '" class="' + (i ? "" : "on") + '" alt="">'; }).join("");
  thumbs.querySelectorAll("img").forEach(function (t, i) {
    t.onclick = function () {
      main.src = p.images[i];
      thumbs.querySelectorAll("img").forEach(function (o) { o.className = ""; });
      t.className = "on";
    };
  });

  document.getElementById("p-badges").innerHTML = [p.blend, p.tc, p.weave].map(function (b) { return '<span class="tag">' + b + "</span>"; }).join("");
  document.getElementById("p-wa").href = waLink(msg);

  // Specifications table
  var specs = [["Fabric / Blend", p.blend], ["Thread count", p.tc + " (typical)"], ["Weight", p.weight], ["Weave", p.weave],
  ["Feel", p.feel], ["Best for", p.use], ["Sizes", SIZES], ["Colour", "White (others on request)"], ["Supply", "Wholesale only"], ["Price", "Contact us"]];
  document.getElementById("p-specs").innerHTML = specs.map(function (r) { return "<tr><td>" + r[0] + "</td><td>" + r[1] + "</td></tr>"; }).join("");
  document.getElementById("p-features").innerHTML = p.features.map(function (f) { return "<li>" + f + "</li>"; }).join("");

  // Other qualities
  renderBedSheetCards("p-related", BED_SHEETS.filter(function (x) { return x.id !== p.id; }).slice(0, 3));
})();
