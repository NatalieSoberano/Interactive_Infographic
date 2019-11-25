(() => {
    //try to get the object and do stuff with it 
    const seeMoreButton = document.querySelectorAll('.see-more'),
     popOver = document.querySelector('.popover');

    function buildPopover(beerdata, el) {
        popOver.querySelector(".ipa-rating").textContent = `IPA Rating: ${beerdata.IpaRating}`;
        popOver.querySelector(".ratings").textContent = `Average Rating: ${beerdata.ratings}`;
        popOver.querySelector(".beer-description").textContent = beerdata.description;

        // show the popover
        popOver.classList.add('show-popover');
        el.appendChild(popOver);
    }

    //run the fetch API and get the DB data
    function fetchData() {
        let targetEl= this, 
            url =`/svgdata/${this.dataset.target}`;

        fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data);

            //populate the popover 
            buildPopover(data, targetEl);
        })
        .catch((err) => console.log(err));
    }

    const svgGraphic = document.querySelector 
    ("#svg-wrapper");

    // svgGraphic.addEventListener("click", () => {
    //     console.log(this);
    // })

    seeMoreButton.forEach(button => button.addEventListener("click", fetchData));

})();