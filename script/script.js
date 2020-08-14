const toTop = document.querySelector(".to-top");
const navOutTop = document.querySelector(".nav-out-top");

const btn = document.querySelector(".navbar-toggler");

        window.addEventListener("scroll", () => {
            if (window.pageYOffset > 100){
                toTop.classList.add("active");
                navOutTop.classList.add("nav-out-top");
            }
            else{
                toTop.classList.remove("active");
                navOutTop.classList.remove("nav-out-top");
            }
        });
        btn.addEventListener("click", function(){
            if (window.pageYOffset < 100){
                    navOutTop.classList.add("nav-out-top");
            }
        });