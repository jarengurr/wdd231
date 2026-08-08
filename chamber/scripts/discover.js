import { victorvillefun } from '../data/places.mjs'
console.log(victorvillefun)



const placecards = document.querySelector('#cards');





function displayCards(victorvillefun) {
     
    victorvillefun.forEach(place => {
        const card = document.createElement("div");
        const title = document.createElement("h2");
        const aphoto = document.createElement('figure');
        const theaddress = document.createElement('address')
        const theimage = document.createElement("img");//in figure
        const thedescription = document.createElement("p");
        const abutton = document.createElement("button");//learn more
       
       
       
        thedescription.innerText = place.description
        card.appendChild(thedescription)

        theimage.src = `images/${place.photo}`
        theimage.alt = place.name
        aphoto.appendChild(theimage)
        aphoto.setAttribute('loading', 'lazy');
        card.appendChild(aphoto)

        title.innerText = place.name
        card.appendChild(title)

        theaddress.innerText = place.address
        card.appendChild(theaddress)


        abutton.type = "button"
        abutton.className = "button"
        abutton.id = "push"
        abutton.title = "Learn More"
        abutton.value = "Learn More"
        abutton.textContent = "Learn More"
        card.appendChild(abutton)

        placecards.appendChild(card)

    });

}
   
        

        displayCards(victorvillefun)
  
    

