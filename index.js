let toggle = document.getElementById("toggle");
let menu = document.getElementById("nav-prim");
let visiblity;
toggle.addEventListener("click", function menutoggle() {
  console.log("clicked");
  visiblity = menu.getAttribute("tgl");
  console.log(visiblity);
  if (visiblity === "false"){
      menu.setAttribute("tgl", true)
  }
  else{
    menu.setAttribute("tgl", false)
  }
});
