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
              if (window.innerwidth<=576){
              const menu = document.queryselectorAll(".menu"); 
              const menu = document.queryselectorAll(".menu .menubar ul");   
              const menu = document.queryselectorAll(".menu .menubar"); 

                   if(mobilebar && !mobilebar.queryselector(".hamburger")) {
                  const dv = document.createElement("div");
				dv.className = "hamburger";
				dv.setAttribute("aria-label", "Toggle menu");l
				dv.setAttribute("tabindex","0");
				dv.innerHTML= '<span></span>';
				mobileBar.appendChild(dv);

                   }
              }            
      });
        });
     
    
