let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`,
];

document.addEventListener('DOMContentLoaded', function(event) {
  // Random quote of the day generator
  function randomQuote() {
    document.querySelector('#quote-of-the-day').textContent = `"${
      quotes[Math.floor(Math.random() * quotes.length)]
    }"`;
  };
  randomQuote();



  // Do all of your work below in the following functions
  // DON'T FORGET TO CALL THE FUNCTIONS TO SEE YOUR WORK!


// Accessing DOM Elements (Querying)

  // Part 1
  // DOM's personal website title is a bit wordy. Write a JavaScript statement that selects the #main-title ID element. Change the text of the title to something shorter.
  function shortenPageTitle() {
    document.querySelector('#main-title').innerText = "Welcome to DOM's World";
  };
  shortenPageTitle();

  // Part 2
  // Select the body and change the background-color to a new color of your choice.
  function changeBodyBgColor() {
    document.querySelector('body').style.background = "#615C2C";
  };

  changeBodyBgColor();

  // Part 3
  // Select DOM's Favorite Things list and remove the last list item.
  function removeLastFavoriteThing() {
    const favesList = document.querySelectorAll('#favorite-things li');
    let lastThing = favesList[favesList.length - 1];
    lastThing.style.display = "none";
  };

  removeLastFavoriteThing();


  // Part 4
  // Select all .special-title class elements and change their font-size to 2rem.
  // Remember you might have to iterate through the list of elements
  function makeSpecialTitlesBigger() {
    document.querySelectorAll('.special-title')
      .forEach((title) => title.style.fontSize = '2rem');
  };

  makeSpecialTitlesBigger();

  // Part 5
  // Turns out DOM never raced in Chicago. Access the Past Races list and remove Chicago.
  function RemoveChicagoRace() {
    const citiesList = document.querySelectorAll('#past-races li');
    citiesList.forEach((city) => city.innerText === 'Chicago' ? city.style.display = 'none' : null);
  };

  RemoveChicagoRace();



// Creating New DOM Elements

  // Part 6
  // Let's add to DOM's  Past Races  list.
  // Create a new <li> element, change the new <li> text to the name of a city, and append it to the  Past Races  list.
  function addPastRace() {
    const newPastRace = document.createElement('li');
    newPastRace.innerText = 'Paris';
    document.querySelector('#past-races').appendChild(newPastRace);
  };

  addPastRace();


  // Part 7
  // Create a new .blog-post corresponding to the new city added in Part 6.
  // You will have to create a new <div> with class of .blog-post, a new <h2> with text, and a new <p> with some text.
  // Think about what order you want to create the elements, and what order you want to append them in.
  function createNewBlogPost() {
    const newPostDiv = document.createElement('div');
    newPostDiv.className = 'blog-post purple';

    const newPostHeader = document.createElement('h2');
    newPostHeader.style.color = 'white';
    newPostHeader.innerText = "Paris";

    const newPostText = document.createElement('p');
    newPostText.innerText = "I WON A RACE WHILE EATING A CROISSANT!";

    newPostDiv.appendChild(newPostHeader);
    newPostDiv.appendChild(newPostText);
    
    document.querySelector('.main').appendChild(newPostDiv);
  };

  createNewBlogPost();






});
