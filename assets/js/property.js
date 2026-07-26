/*
================================
TERAVIA NEO - PROPERTY SCRIPT
================================
*/


document.addEventListener("DOMContentLoaded",()=>{


    /*
    ================================
    PROPERTY FAVORITE
    ================================
    */


    const favoriteButtons =
        document.querySelectorAll(".favorite-btn");



    favoriteButtons.forEach(button=>{


        button.addEventListener("click",()=>{


            button.classList.toggle("active");



            const icon =
                button.querySelector("i");



            if(icon){


                icon.classList.toggle(
                    "active"
                );


            }



            const propertyId =
                button.dataset.id;



            if(propertyId){


                saveFavorite(propertyId);


            }


        });


    });





    /*
    ================================
    SAVE FAVORITE LOCAL STORAGE
    ================================
    */


    function saveFavorite(id){


        let favorites =
            JSON.parse(
                localStorage.getItem(
                    "teravia_favorites"
                )
            ) || [];



        if(favorites.includes(id)){


            favorites =
                favorites.filter(
                    item=>item !== id
                );


        }else{


            favorites.push(id);


        }



        localStorage.setItem(

            "teravia_favorites",

            JSON.stringify(favorites)

        );


    }





    /*
    ================================
    PROPERTY IMAGE PREVIEW
    ================================
    */


    const thumbnails =
        document.querySelectorAll(
            ".property-thumbnail"
        );


    const mainImage =
        document.querySelector(
            ".property-main-image"
        );



    thumbnails.forEach(image=>{


        image.addEventListener(
            "click",
            ()=>{


                if(mainImage){


                    mainImage.src =
                        image.src;


                }



                thumbnails.forEach(item=>{

                    item.classList.remove(
                        "active"
                    );

                });



                image.classList.add(
                    "active"
                );


            }
        );


    });





    /*
    ================================
    PROPERTY SEARCH FILTER
    ================================
    */


    const searchInput =
        document.querySelector(
            "#property-search"
        );



    const cards =
        document.querySelectorAll(
            ".property-card"
        );



    if(searchInput){


        searchInput.addEventListener(
            "input",
            ()=>{


                const keyword =
                    searchInput.value
                    .toLowerCase();



                cards.forEach(card=>{


                    const text =
                        card.innerText
                        .toLowerCase();



                    if(
                        text.includes(keyword)
                    ){

                        card.style.display =
                            "";

                    }else{

                        card.style.display =
                            "none";

                    }


                });



            }
        );


    }



});
