<script>
fetch("navbar.html")
  .then(response => response.text())
  .then(data => {

    /* navbar load */
    document.getElementById("nav").innerHTML = data;

    /* ===== current page underline ===== */
    let currentPage = window.location.pathname.split("/").pop();

    if (!currentPage || currentPage === "#") {
      currentPage = "index.html";
    }

    let links = document.querySelectorAll(".menu .menubar ul li a");

    links.forEach(link => {
      let linkPage = link.getAttribute("href");
      if (linkPage === currentPage) {
        link.parentElement.classList.add("underline_current");
      }
    });

    /* ===== mobile hamburger ===== */
    if (window.innerWidth <= 576) {

      const mobileBar = document.querySelector(".menu .mobilebar");

      if (mobileBar && !mobileBar.querySelector(".hamburger")) {

        const hamburger = document.createElement("div");
        hamburger.className = "hamburger";
        hamburger.setAttribute("aria-label", "Toggle menu");
        hamburger.setAttribute("tabindex", "0");
        hamburger.innerHTML = "<span></span>";

        mobileBar.appendChild(hamburger);
      }
    }
  });
</script>
