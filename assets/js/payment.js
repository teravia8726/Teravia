/*
================================
TERAVIA NEO - PAYMENT SCRIPT
================================
*/


document.addEventListener("DOMContentLoaded",()=>{


    /*
    ================================
    PAYMENT METHOD SELECT
    ================================
    */


    const paymentMethods =
        document.querySelectorAll(
            ".payment-method"
        );



    paymentMethods.forEach(method=>{


        method.addEventListener(
            "click",
            ()=>{


                paymentMethods.forEach(item=>{

                    item.classList.remove(
                        "active"
                    );

                });



                method.classList.add(
                    "active"
                );



                localStorage.setItem(

                    "teravia_payment_method",

                    method.dataset.method

                );


            }
        );


    });





    /*
    ================================
    PAYMENT SUBMIT
    ================================
    */


    const submitPayment =
        document.querySelector(
            "#submit-payment"
        );



    if(submitPayment){


        submitPayment.addEventListener(
            "click",
            ()=>{


                const method =
                    localStorage.getItem(
                        "teravia_payment_method"
                    );



                if(!method){


                    alert(
                        "Silahkan pilih metode pembayaran"
                    );


                    return;


                }




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
    PAYMENT STATUS CHECK
    ================================
    */


    const statusElement =
        document.querySelector(
            "#payment-status"
        );



    const paymentStatus =
        localStorage.getItem(
            "teravia_payment_status"
        );



    if(statusElement && paymentStatus){


        statusElement.innerHTML =

        `

        Status Pembayaran:
        <strong>
        ${paymentStatus.toUpperCase()}
        </strong>

        `;


    }





    /*
    ================================
    PAYMENT HISTORY
    ================================
    */


    const historyContainer =
        document.querySelector(
            "#payment-history"
        );



    if(historyContainer){


        const history =
            JSON.parse(

                localStorage.getItem(
                    "teravia_payment_history"
                )

            ) || [];



        if(history.length === 0){


            historyContainer.innerHTML =
                "Belum ada transaksi";



        }else{


            historyContainer.innerHTML =
            
            history.map(item=>`

                <div class="payment-item">

                    <h4>
                        ${item.plan}
                    </h4>

                    <p>
                        ${item.price}
                    </p>

                    <span>
                        ${item.status}
                    </span>

                </div>

            `).join("");



        }


    }



});
