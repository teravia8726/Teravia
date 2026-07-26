/*
================================
TERAVIA NEO - SLIDER SCRIPT
================================
*/


document.addEventListener("DOMContentLoaded",()=>{


    const sliders =
        document.querySelectorAll(".slider");


    sliders.forEach(slider=>{


        const track =
            slider.querySelector(".slider-track");


        const items =
            slider.querySelectorAll(".slide");


        const next =
            slider.querySelector(".slider-next");


        const prev =
            slider.querySelector(".slider-prev");



        if(!track || items.length === 0) return;



        let current = 0;



        function updateSlider(){


            const width =
                items[0].offsetWidth;


            track.style.transform =
                `translateX(-${current * width}px)`;


        }




        if(next){


            next.addEventListener("click",()=>{


                current++;


                if(current >= items.length){

                    current = 0;

                }


                updateSlider();


            });


        }




        if(prev){


            prev.addEventListener("click",()=>{


                current--;


                if(current < 0){

                    current = items.length - 1;

                }


                updateSlider();


            });


        }




        window.addEventListener(
            "resize",
            updateSlider
        );



        /*
        AUTO SLIDE
        */


        if(slider.dataset.auto === "true"){


            setInterval(()=>{


                current++;


                if(current >= items.length){

                    current = 0;

                }


                updateSlider();


            },5000);


        }

    });
});
