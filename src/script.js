
fetch("navbar.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("nav-placeholder").innerHTML = data;

 
    const links = document.querySelectorAll(".nav-link a");
    const currentPage = window.location.pathname.split("/").pop();

    links.forEach(link => {
      if (link.getAttribute("href") === currentPage) {
        link.style.textDecoration = "underline";
      }
    });
  })
  .catch(err => console.error("Navbar load failed:", err));
