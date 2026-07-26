/*
================================
TERAVIA NEO - UI SCRIPT
================================
*/


document.addEventListener("DOMContentLoaded", () => {


    /*
    ================================
    COMPONENT LOADER
    ================================
    */

    const components = [
        "navbar",
        "hero",
        "search-filter",
        "featured-properties",
        "latest-properties",
        "membership-section",
        "ai-section",
        "blog-section",
        "cta-section",
        "footer",
        "modal-container",
        "toast-container",
        "loading-container"
    ];



    components.forEach(component => {


        const element = document.getElementById(component);


        if(!element) return;


        fetch(`components/${component}.html`)

        .then(response => {

            if(!response.ok){

                throw new Error(
                    `Component ${component} tidak ditemukan`
                );

            }

            return response.text();

        })

        .then(html => {

            element.innerHTML = html;

        })

        .catch(error => {

            console.warn(error.message);

        });


    });



    /*
    ================================
    MOBILE BOTTOM NAV ACTIVE
    ================================
    */

    const currentPage = window.location.pathname;


    document.querySelectorAll(".bottom-nav a")
    .forEach(link => {


        if(
            currentPage.includes(
                link.getAttribute("href")
            )
        ){

            link.classList.add("active");

        }


    });



    /*
    ================================
    BACK TO TOP
    ================================
    */

    const backTop =
        document.querySelector(".back-top");


    if(backTop){


        window.addEventListener("scroll",()=>{


            if(window.scrollY > 300){

                backTop.classList.add("show");

            }else{

                backTop.classList.remove("show");

            }


        });



        backTop.onclick = ()=>{


            window.scrollTo({

                top:0,
                behavior:"smooth"

            });


        };


    }


});
