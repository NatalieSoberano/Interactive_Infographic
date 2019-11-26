(() => {
    //try to get the object and do stuff with it 
    const 
     seeMoreButton = document.querySelectorAll('.see-more'),
     lightBox = document.querySelector('.lightbox');


    function buildLightBox(princessdata, el) {
        //lightBox.querySelector(".image").data = `images/${princessdata.image}`;
        //lightBox.querySelector(".Pname").data = `images/${princessdata.banner}`;
        lightBox.querySelector(".moviename").textContent = `Movie: ${princessdata.movietitle}`;
        lightBox.querySelector(".voice").textContent = `Voice: ${princessdata.voice}`;
        lightBox.querySelector(".age").textContent = `Age: ${princessdata.age}`;
        lightBox.querySelector(".animal").textContent = `Animal: ${princessdata.animal}`;
        lightBox.querySelector(".revenue").textContent = `Revenue: ${princessdata.revenue}`;

        // show the popover
        lightBox.classList.add('show-lightbox');
        //el.appendChild(lightBox);
    }

    //run the fetch API and get the DB data
    function fetchData() {

        let targetEl= this, 
            url =`/svgdata/${this.id}`;

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
        lightBox.classList.remove('show-lightbox');
    })

})();