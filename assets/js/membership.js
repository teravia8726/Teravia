/*
================================
TERAVIA NEO - MEMBERSHIP SCRIPT
================================
*/


document.addEventListener("DOMContentLoaded",()=>{


    /*
    ================================
    MEMBERSHIP PLAN SELECT
    ================================
    */


    const planButtons =
        document.querySelectorAll(
            ".membership-select"
        );



    planButtons.forEach(button=>{


        button.addEventListener("click",()=>{


            const plan =
                button.dataset.plan;



            const price =
                button.dataset.price;



            localStorage.setItem(

                "teravia_membership",

                JSON.stringify({

                    plan: plan,
                    price: price

                })

            );



            window.location.href =
                "membership/checkout.html";


        });


    });





    /*
    ================================
    CHECKOUT DISPLAY
    ================================
    */


    const checkoutPlan =
        document.querySelector(
            "#selected-plan"
        );



    const checkoutPrice =
        document.querySelector(
            "#selected-price"
        );



    const membershipData =
        JSON.parse(

            localStorage.getItem(
                "teravia_membership"
            )

        );



    if(
        membershipData &&
        checkoutPlan &&
        checkoutPrice
    ){


        checkoutPlan.innerHTML =
            membershipData.plan;


        checkoutPrice.innerHTML =
            membershipData.price;


    }





    /*
    ================================
    PAYMENT BUTTON
    ================================
    */


    const paymentButton =
        document.querySelector(
            ".payment-btn"
        );



    if(paymentButton){


        paymentButton.addEventListener(
            "click",
            ()=>{


                localStorage.setItem(

                    "teravia_payment_status",

                    "pending"

                );



                window.location.href =
                    "pending.html";


            }
        );


    }




    /*
    ================================
    MEMBERSHIP ACTIVE BADGE
    ================================
    */


    const activePlan =
        document.querySelector(
            ".active-membership"
        );



    if(activePlan && membershipData){


        activePlan.innerHTML =

        `

        <strong>
        ${membershipData.plan}
        </strong>

        <span>
        Aktif
        </span>

        `;


    }



});
