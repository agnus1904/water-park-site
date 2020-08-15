const toTop = document.querySelector(".to-top");
const navOutTop = document.querySelector(".nav-out-top");

const btn = document.querySelector(".navbar-toggler");

const btnBooking = document.getElementById("checkprice");

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

        btnBooking.addEventListener("click", function(){
            var adultNum = document.getElementById("adultNum").value;
            var childNum = document.getElementById("childNum").value;
            var hotelInput = document.getElementById("cars").value;
            var hotelPrice;
            if(hotelInput === "hotel1"){
                hotelPrice = 30; 
            }
            if(hotelInput === "hotel2"){
                hotelPrice = 25; 
            }
            if(hotelInput === "hotel3"){
                hotelPrice = 22; 
            }

            var pri1,pri2,pri3,pri4;

            pri1 = (parseInt(adultNum)*5) + (parseInt(childNum)*3) + hotelPrice;
            pri2 = (parseInt(adultNum)*7) + (parseInt(childNum)*4) + hotelPrice;
            pri3 = (parseInt(adultNum)*10) + (parseInt(childNum)*6) + hotelPrice;
            pri4 = (parseInt(adultNum)*15) + (parseInt(childNum)*9) + hotelPrice;
            
            document.getElementById("default").innerText = "The price is: " + pri1 + "$";
            document.getElementById("silver").innerText = "The price is: " + pri2 + "$";
            document.getElementById("gold").innerText = "The price is: " + pri3 + "$";
            document.getElementById("fullcombo").innerText = "The price is: " + pri4 + "$";
            document.getElementById("form-booking").classList.add("show");
        });

        function booking(){
            alert("We have received your information. please wait for our contact");
            location.reload();
        }

        function feedBack(){
            alert("We have get your feedback, Thanks for visiting my website");
            document.getElementById("email-feedback").value = "";
            document.getElementById("text-feedback").value = "";
        }