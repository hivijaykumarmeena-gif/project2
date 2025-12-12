      fetch("navbar.html")
      .then(res => res.text())
      .then(data => {
        document.getElementById("nav").innerHTML = data;

        let currentpage = window.location.pathname.split("/").pop();
        let links = document.querySelectorAll(".menu .menubar ul li a");
        if(!currentpage  || currentpage == "#"){
          currentpage ="index.html";
        }
        links.forEach(link=> {
          console.log("current page:",currentpage);
          let linkpage = link.getAttribute("href");
          if (linkpage == currentpage){
          link.closest("li").classList.add("underline_current");
          }
      });
        });
     
    
