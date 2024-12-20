(() => {

//add in loading spinner
//text it by throttling site
//make error responce in the .catch areas
//pull info from api


  //variables
  const hotspots = document.querySelectorAll(".Hotspot");
  const materialTemplate = document.querySelector("#material-template");
  const materialList = document.querySelector("#material-list");
  const hotspotA = document.querySelector(".HotspotAnnotation");
  const matLoader = document.querySelector("#mat-loader");
  //const boxLoader = document.querySelector("#box-loader");

  //This information needs to be removed then pulled with an AJAX Call using the Fetch API
  //this is the api url https://swiftpixel.com/earbud/api/infoboxes"

  // const infoBoxes = [
  //   {
  //     title: 'Noise-cancelling microphones',
  //     text: 'Noise-cancelling microphones and a rear copper shield are optimally placed to quickly detect outside noises, working together to counter noise before it disturbs your experience.',
  //     image: 'images/ear-piece.jpg'
  //   },
  //   {
  //     title: 'Comfortable fit',
  //     text: 'Three pairs of ultra comfortable silicone tips are included. The tips create an acoustic seal that blocks outside audio and secures the earbuds in place.',
  //     image: 'images/ear-piece.jpg'
  //   },
  //   {
  //     title: '360 AUDIO',
  //     text: '360 Audio places sound all around you, while Dolby Head Tracking™ technology delivers an incredible three-dimensional listening experience.',
  //     image: 'images/ear-piece.jpg'
  //   },
  //   {
  //     title: 'Ultra Fast Charging',
  //     text: 'Charge your earbuds in 30 minutes or less with our hyper charging technology.',
  //     image: 'images/ear-piece.jpg'
  //   },
  // ];

  //This information needs to be removed then pulled with an AJAX Call using the Fetch API
  //this is the api url https://swiftpixel.com/earbud/api/materials"

  // const materialListData = [
  //   {
  //     heading: "Precision-Crafted Polymers",
  //     description: "Our earbuds are meticulously molded from high-quality plastics, ensuring a blend of elegance, comfort, and resilience that's second to none."
  //   },
  //   {
  //     heading: "Luxurious Silicone Harmony",
  //     description: "Our uniquely engineered ear tips are cocooned in plush silicone, delivering an opulent embrace for your ears, ensuring an unrivaled fit and exquisite audio experience."
  //   },
  //   {
  //     heading: "Rubberized Cables",
  //     description: "Experience the unparalleled freedom of movement with our flexible rubber cables that promise durability without compromise."
  //   },
  //   {
  //     heading: "Enhanced Comfort Sensors",
  //     description: "A touch of magic in the form of built-in microphones and sensors empowers your earbuds to obey your every command, making your audio journey seamless and enchanting."
  //   },
  //   {
  //     heading: "Artistic Mesh Guard",
  //     description: "Shielded by artful mesh screens, our speakers remain untarnished, keeping your listening experience pristine."
  //   }
  // ];

  //functions
  function loadInfoBoxes() {
    //boxLoader.classList.toggle("hidden");
    //make AJAX call here
    fetch("https://swiftpixel.com/earbud/api/infoboxes")
    .then(response => response.json())
    .then(infoBoxes =>{
      console.log(infoBoxes);

      infoBoxes.forEach((infoBox, index) => {
        let selected = document.querySelector(`#hotspot-${index + 1}`);
  
        const titleElement = document.createElement('h2');
        titleElement.textContent = infoBox.heading;
  
        const textElement = document.createElement('p');
        textElement.textContent = infoBox.description;
  
        selected.appendChild(titleElement);
        selected.appendChild(textElement);
      });

      //boxLoader.classList.toggle("hidden");
      //hotspotA.innerHTML = "";
      

    })
    .catch(error => {
      console.log(error);
      const errorMessage = document.createElement("p");
      errorMessage.textContent = "Error loading Hotspots";
      hotspotA.appendChild(errorMessage);
    })


  }
  loadInfoBoxes();

function loadMaterialInfo() {
  matLoader.classList.toggle("hidden");
fetch("https://swiftpixel.com/earbud/api/materials")
.then(response => response.json())
.then(materials => {
  console.log(materials);

  materials.forEach(material => {
    //clone the template
    const clone = materialTemplate.content.cloneNode(true);
    //populate with data
    const materialHeading = clone.querySelector(".material-heading");
    materialHeading.textContent = material.heading;
  
    const materialDescription = clone.querySelector(".material-description");
    materialDescription.textContent = material.description;
  
    materialList.appendChild(clone);
    })

    matLoader.classList.toggle("hidden"); //toggle the hidden class for the loading indicator
    

})

//put something in here that is considered proper error handling
.catch(error => {
  console.log(error); //console log the error
  const errorMessage = document.createElement("p"); //create a p element
  errorMessage.textContent = "Error loading materials"; //populate that element with content
  materialList.appendChild(errorMessage); //append that message to the #people-con div
})




}
loadMaterialInfo();

  function showInfo() {
    let selected = document.querySelector(`#${this.slot}`);
    gsap.to(selected, 1, { autoAlpha: 1 });
  }

  function hideInfo() {
    let selected = document.querySelector(`#${this.slot}`);
    gsap.to(selected, 1, { autoAlpha: 0 });
  }

  //Event listeners

  hotspots.forEach(function (hotspot) {
    hotspot.addEventListener("mouseenter", showInfo);
    hotspot.addEventListener("mouseleave", hideInfo);
  });

})();

