/*
================================
TERAVIA NEO - NAVBAR SCRIPT
================================
*/


document.addEventListener("DOMContentLoaded",()=>{


    const navbar =
        document.querySelector(".navbar");


    if(!navbar) return;



    /*
    ================================
    MOBILE MENU
    ================================
    */


    const toggle =
        document.querySelector(".navbar-toggle");


    const menu =
        document.querySelector(".navbar-menu");



    if(toggle && menu){


        toggle.addEventListener("click",()=>{


            menu.classList.toggle("active");


            toggle.classList.toggle("open");


        });


    }




    /*
    ================================
    CLOSE MOBILE MENU
    ================================
    */


    document
    .querySelectorAll(".navbar-menu a")
    .forEach(link=>{


        link.addEventListener("click",()=>{


            if(menu){

                menu.classList.remove("active");

            }


            if(toggle){

                toggle.classList.remove("open");

            }


        });


    });




    /*
    ================================
    STICKY NAVBAR
    ================================
    */


    window.addEventListener("scroll",()=>{


        if(window.scrollY > 50){


            navbar.classList.add("scrolled");


        }else{


            navbar.classList.remove("scrolled");

        }
    });
});
