import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  
  // these are our hardcoded arrays that we are using, people is an array of objects. actions is an array of strings
  const people = [ {
    name: "Ryan",
    age: 27,
    favorite_music: ["Rock", "Metal", "Classical", "Oldies"],
    favorite_color: "green"
    },
    {
    name: "Diego",
    age: 40,
    favorite_music: ["Thrash Metal", "Heavy Metal", "Ska Metal"],
    favorite_color: "grey"
    },
    {
      name: "Patrick",
      age: 29,
      favorite_music: ["Punk Rock", "Metal"],
      favorite_color: "purple"
    }]

    const actions = ["ate my homework", "blew up my car", "listened to too much ska"]

    //these are our functions that we use for functionality getRandomHeader creates a random header tag based on whther it gets 1 - 5 in it's execution
    const getRandomHeader = () => {
      const number = Math.ceil(Math.random() * 5)
      return "h" + number
    }
    
    const getRandom = (array) => {
      return Math.floor(Math.random() * array.length)
    }
    
    // All of these are the selectors that we use to access the elements from the html file, we store them in variables for easier use
    const nameSelector = this.document.querySelector("#name-position")
    const ageSelector = this.document.querySelector("#age-position")
    const musicListSelector = this.document.querySelector("#music-list-position")
    const container = this.document.querySelector("#container")

    // this selector specifically gives us an array to iterate upon providing multiple html elements in one query
    const things = this.document.querySelectorAll(".things")

    // here we find a random number for the index for who the selected person of the page will be and whose information we will use going forward
    const chosenPerson = getRandom(people)
    
    // in this example we are editing the textContent of the name element and if it is specifically "Ryan" we are also updating the color of the text by adding a class attribute as well
    nameSelector.textContent = people[chosenPerson].name
    if(people[chosenPerson].name === "Ryan"){
    nameSelector.className = "test"
    }

    //here we are changing the text content of the age html element based on the selected person's age
    ageSelector.textContent = people[chosenPerson].age

    // here we are adding an inline style based on the selected person's favorite color
    container.style.backgroundColor = people[chosenPerson].favorite_color
    
    // in this example we are creating new html elements to add inside of the ul in the html with the text content being the current
    // item within the selected person's favorite music list 
    for(let i = 0; i < people[chosenPerson].favorite_music.length; i++){
      const newElement = this.document.createElement("li")
      newElement.textContent = people[chosenPerson].favorite_music[i]
      musicListSelector.appendChild(newElement)
    }
    
    // replacing the h1 thing class elements with a random header tag and a random excuse
    for(let i = 0; i < things.length; i++){
      const newHeader = this.document.createElement(getRandomHeader())
      const excuse = people[getRandom(people)].name + " " + actions[getRandom(actions)]
      newHeader.textContent = excuse
      things[i].replaceWith(newHeader)
    }
};
