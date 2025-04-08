//I did copied from the course week 04 only this const temples templetes.
//Java Script arrey data source
const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    }
    // Add more if needed
  ];
  //This section is just for creating templete of temples but the function displayTemple(temple) is called at the biginning
  function displayTemples(templeList) { //parameter for 59 to be loop
    const container = document.getElementById('temple-cards');
    container.innerHTML = ''; //its reset -this clears the data content which is  inside the html element with id: temple-card. If we dont use it, toggeling each time will multiply the images
    templeList.forEach(temple => { // "temple"=parameter but works as variable. Each temple in the list, do this block of code-also means templeList.forEach(function(temple){..code here});
      const card = document.createElement('section');//This creats a new <section> elements in memory.
      card.className = 'card'; //sets the value of class attributes on html// adds class name "card" to <section> // style in CSS
      //card.innerHTML injects the temple data as block of HTML templete
      card.innerHTML = `
        <h2>${temple.templeName}</h2>
        <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy" />
        <p><strong>Location:</strong> ${temple.location}</p>
        <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
        <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
      `;
      container.appendChild(card);//takes the card & adds to container=>temple-card
    });
  }
  //this funcn. decide how to filter the temple with size// this is called when you click a button (old, new, large etc)
  function filterTemples(criteria) {
    let filtered; //iitializes the variable name filtered//declaration
    switch(criteria) {
      case 'old':
        //go through each "t"(temple) in the temples array & if dedicated=>"t"=>temples<1900 years only selects old
        filtered = temples.filter(t => parseInt(t.dedicated) < 1900); //filter() return the new array if only...pass
        break;
      case 'new':
        filtered = temples.filter(t => parseInt(t.dedicated) > 2000);//assigned same filtered v for switch case 
        break;
      case 'large':
        filtered = temples.filter(t => t.area > 90000);
        break;
      case 'small':
        filtered = temples.filter(t => t.area < 10000); //  t=>t.area<10000 ==function(t){return t.area<10000}
        break;
      default:
        filtered = temples;
    }
    displayTemples(filtered); //filteres parameter getch array from displayTemple(templesList)
  }
  
  // Initial display function is called here
  displayTemples(temples); //temples=> (mediator function)displayTemples =>filtred => 93 line
  
  // Footer dynamic date and time
  document.getElementById('year').textContent = new Date().getFullYear();
  document.getElementById('lastModified').textContent = document.lastModified;