(() => {
    //try to get the object and do stuff with it 
    const seeMoreButton = document.querySelectorAll('.see-more'),
     lightBox = document.querySelector('.lightbox');

    function buildLightBox(beerdata, el) {
        lightBox.querySelector(".ipa-rating").textContent = `IPA Rating: ${beerdata.IpaRating}`;
        lightBox.querySelector(".ratings").textContent = `Average Rating: ${beerdata.ratings}`;
        lightBox.querySelector(".beer-description").textContent = beerdata.description;

        // show the popover
        lightBox.classList.add('show-lightbox');
        el.appendChild(lightBox);
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
            buildLightBox(data, targetEl);
        })
        .catch((err) => console.log(err));
    }

    const svgGraphic = document.querySelector 
    ("#svg-wrapper");

    // svgGraphic.addEventListener("click", () => {
    //     console.log(this);
    // })

    seeMoreButton.forEach(button => button.addEventListener("click", fetchData));

    lightBox.querySelector('.close').addEventListener('click', function(){
        lightBox.classList.remove('show-lb');
    })

})();