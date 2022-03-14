let toggle = document.getElementById("toggle");
let menu = document.getElementById("nav-prim");
let visiblity;
let disp;
toggle.addEventListener("click", function menutoggle() {
  console.log("clicked");
  visiblity = menu.getAttribute("tgl");
  console.log(visiblity);
  if (visiblity === "false") {
    menu.setAttribute("tgl", true);
  } else {
    menu.setAttribute("tgl", false);
  }
});
document.getElementById("shorten").addEventListener("click", function click() {
  const query = document.getElementById("input");
  const url = `https://api.shrtco.de/v2/shorten?url=${query.value}`;
  console.log(url);
  let value;
  fetch(url)
    .then((data) => data.json())
    .then((response) => {
      console.log(response);
      value = response.result.full_short_link2;
      console.log(typeof value);
      console.log(value);
      document.getElementById("user-link").innerText = query.value;
      document.getElementById("short-link").innerText = JSON.stringify(value);
    });
  // console.log(typeof(value));
  console.log(typeof query.value);

  console.log(JSON.stringify(value));
  document.getElementById("copy").addEventListener("click", function copy()
 {
  console.log("woooooo");
  navigator.clipboard.writeText(JSON.stringify(value));
  console.log(navigator.clipboard)
});
});

