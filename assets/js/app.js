document.addEventListener("DOMContentLoaded", () => {

    console.log("TERAVIA NEO Initialized");


    const components = [
        {
            id: "navbar",
            file: "components/navbar.html"
        },
        {
            id: "hero",
            file: "components/hero.html"
        },
        {
            id: "search-filter",
            file: "components/search-filter.html"
        },
        {
            id: "featured-properties",
            file: "components/property-grid.html"
        },
        {
            id: "footer",
            file: "components/footer.html"
        },
        {
            id: "modal-container",
            file: "components/modal.html"
        }
    ];


    components.forEach(component => {

        const target = document.getElementById(component.id);

        if (!target) return;


        fetch(component.file)

            .then(response => {

                if (!response.ok) {
                    throw new Error(
                        `Gagal load ${component.file}`
                    );
                }

                return response.text();

            })

            .then(html => {

                target.innerHTML = html;

            })

            .catch(error => {

                console.error(error);

            });

    });


});
