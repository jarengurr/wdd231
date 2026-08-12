



import { resistortype } from '../data/resistors.mjs'
console.log(resistortype)


const myhold = document.querySelector("#mymodal")
const placecards = document.querySelector('#cards');














function displayCards(resistortype) {
     
    resistortype.forEach(resistor => {
        const card = document.createElement("div");
        const title = document.createElement("h2");
        //const aphoto = document.createElement('figure');
        const thetolerance = document.createElement("p");
        const thepower = document.createElement("p");
        const thetemp_coeff = document.createElement("p");
        const thestability = document.createElement("p");
        const thenoise = document.createElement("p");
        const goodfor = document.createElement("p");
        //const theimage = document.createElement("img");//in figure
        const thedescription = document.createElement("p");
        const abutton = document.createElement("button");//learn more
       
       
       
        
        //theimage.src = `images/${place.photo}`
        //theimage.alt = place.name
        //aphoto.appendChild(theimage)
        //aphoto.setAttribute('loading', 'lazy');
        //card.appendChild(aphoto)

        title.innerText = resistor.type
        card.appendChild(title)

        thetolerance.innerText = `TOLERANCE: ${resistor.tolerance}`
        card.appendChild(thetolerance)

        thepower.innerText = `POWER: ${resistor.power_range}`
        card.appendChild(thepower)

        thetemp_coeff.innerText = `TEMPERATURE COEFFICIENT: ${resistor.temp_coefficient}`
        card.appendChild(thetemp_coeff)

        thestability.innerText = `STABILITY: ${resistor.stability}`
        card.appendChild(thestability)

        thenoise.innerText = `NOISE: ${resistor.noise}`
        card.appendChild(thenoise)

        goodfor.innerText = `USES: ${resistor.good_for}`
        card.appendChild(goodfor)




        abutton.type = "button"
        abutton.className = "button"
        abutton.id = resistor.code
        abutton.title = "Learn More"
        abutton.value = "Learn More"
        abutton.textContent = "Learn More"
        card.appendChild(abutton)

        placecards.appendChild(card)

    });

}
   
        // Get the modal
//var modal = document.getElementById("myModal");

// Get the button that opens the modal
//var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
//var span = document.getElementsByClassName("close")[0];


// When the user clicks on <span> (x), close the modal


// When the user clicks anywhere outside of the modal, close it

/*const modal = document.querySelector('#composition');
const closeModal = document.querySelector('#closeModal');
 // display the modal dialog right away.
// Usually you will want to wait for a user action to show the modal dialog
closeModal.addEventListener('click', () => {
  modal.close();
});

    displayCards(resistortype)
    document.getElementById("composition").addEventListener("click", () =>  {
        alert("Hello World!");
        modal.showModal();
    })
*/
displayCards(resistortype)
const composition = document.querySelector('#composition');
const carbonfilm = document.querySelector('#carbonfilm');
const metalfilm = document.querySelector('#metalfilm');
const oxide = document.querySelector('#oxide');
const thick = document.querySelector('#thick');
const thin = document.querySelector('#thin');
const wirewound = document.querySelector('#wirewound');
const precisionmf = document.querySelector('#precisionmf');
const lowtcr = document.querySelector('#lowtcr');
const current = document.querySelector('#current');
const power = document.querySelector('#power');
const hv = document.querySelector('#hv');
const noninductive = document.querySelector('#noninductive');
const therm = document.querySelector('#therm');
const mov = document.querySelector('#mov');
const pot = document.querySelector('#pot');
const trim = document.querySelector('#trim');
const rheostats = document.querySelector('#rheostats');

const displayBox = document.querySelector("#dialogbox")
const displayBoxText = document.querySelector("#dialogbox div")
const closeModal = document.querySelector('#closeModal');

closeModal.addEventListener("click", () => {
    displayBox.close();
})


composition.addEventListener("click", () =>  {
    
    displayBoxText.innerHTML = "This resistor has been around for a long time. It was used in older equipment and devices. It good to experiment with. You can use it to build a L.E.D. circuit because precision or stability is not important. If the resister changes the resistance it will not change the brightness that much.";
    displayBox.showModal();
    
})
carbonfilm.addEventListener("click", () =>  {
    
    displayBoxText.innerHTML = "This is better then a carbon composition resistor.";
    displayBox.showModal();
    
})
metalfilm.addEventListener("click", () =>  {
   
    displayBoxText.innerHTML = "Much better then the carbon film resistor.";
    displayBox.showModal();
    
})
oxide.addEventListener("click", () =>  {
    
    displayBoxText.innerHTML = "A great resistor.";
    displayBox.showModal();
    
})
thick.addEventListener("click", () =>  {
    
    displayBoxText.innerHTML = "This resistor has been around for a long time. It was used in older equipment and devices. It good to experiment with. You can use it to build a L.E.D. circuit because precision or stability is not important. If the resister changes the resistance it will not change the brightness that much.";
    displayBox.showModal();
    
})
thin.addEventListener("click", () =>  {
    
    displayBoxText.innerHTML = "This resistor has been around for a long time. It was used in older equipment and devices. It good to experiment with. You can use it to build a L.E.D. circuit because precision or stability is not important. If the resister changes the resistance it will not change the brightness that much.";
    displayBox.showModal();
    
})
wirewound.addEventListener("click", () =>  {
    
    displayBoxText.innerHTML = "This resistor has been around for a long time. It was used in older equipment and devices. It good to experiment with. You can use it to build a L.E.D. circuit because precision or stability is not important. If the resister changes the resistance it will not change the brightness that much.";
    displayBox.showModal();
    
})
precisionmf.addEventListener("click", () =>  {
    
    displayBoxText.innerHTML = "This resistor has been around for a long time. It was used in older equipment and devices. It good to experiment with. You can use it to build a L.E.D. circuit because precision or stability is not important. If the resister changes the resistance it will not change the brightness that much.";
    displayBox.showModal();
    
})
lowtcr.addEventListener("click", () =>  {
    
    displayBoxText.innerHTML = "This resistor has been around for a long time. It was used in older equipment and devices. It good to experiment with. You can use it to build a L.E.D. circuit because precision or stability is not important. If the resister changes the resistance it will not change the brightness that much.";
    displayBox.showModal();
    
})
current.addEventListener("click", () =>  {
    
    displayBoxText.innerHTML = "This resistor has been around for a long time. It was used in older equipment and devices. It good to experiment with. You can use it to build a L.E.D. circuit because precision or stability is not important. If the resister changes the resistance it will not change the brightness that much.";
    displayBox.showModal();
    
})
power.addEventListener("click", () =>  {
    
    displayBoxText.innerHTML = "This resistor has been around for a long time. It was used in older equipment and devices. It good to experiment with. You can use it to build a L.E.D. circuit because precision or stability is not important. If the resister changes the resistance it will not change the brightness that much.";
    displayBox.showModal();
    
})
hv.addEventListener("click", () =>  {
    
    displayBoxText.innerHTML = "This resistor has been around for a long time. It was used in older equipment and devices. It good to experiment with. You can use it to build a L.E.D. circuit because precision or stability is not important. If the resister changes the resistance it will not change the brightness that much.";
    displayBox.showModal();
    
})
therm.addEventListener("click", () =>  {
    
    displayBoxText.innerHTML = "This resistor has been around for a long time. It was used in older equipment and devices. It good to experiment with. You can use it to build a L.E.D. circuit because precision or stability is not important. If the resister changes the resistance it will not change the brightness that much.";
    displayBox.showModal();
    
})
noninductive.addEventListener("click", () =>  {
   
    displayBoxText.innerHTML = "Good for high frequency circuits.";
    displayBox.showModal();
    
})
mov.addEventListener("click", () =>  {
    
    displayBoxText.innerHTML = "MOV or Metal Oxide Varistors are rated for voltage. THey will turn on and draw current only when a voltage level is hit.";
    displayBox.showModal();
    
})
pot.addEventListener("click", () =>  {
   
    displayBoxText.innerHTML = "These are good for many things like a Volume control.";
    displayBox.showModal();
    
})
trim.addEventListener("click", () =>  {
    
    displayBoxText.innerHTML = "These are small and some need to be turned by a small screwdriver.";
    displayBox.showModal();
    
})
rheostats.addEventListener("click", () =>  {
    //alert("Hello World!");
    displayBoxText.innerHTML = "These tend to be big and cost a lot.";
    displayBox.showModal();
    
})

const inductinfo = document.querySelector('#inductanceI');
const tolinfo = document.querySelector('#toleranceI');
const powerinfo = document.querySelector('#powerI');
const tempcoeInfo = document.querySelector('#tempcoeI');
const stabilityInfo = document.querySelector('#stabilityI');
const noiseInfo = document.querySelector('#noiseI');
const usesInfo = document.querySelector('#usesI');

inductinfo.addEventListener("click", () => {
    alert("Inductance is the ratio of currents rate of change and the voltage of a coil. Inductance does not affect dc circuits too much but in a high frequency AC curcuit, your 5 ohm resistor could become a 7000 ohm resistor");
})
tolinfo.addEventListener("click", () => {
    alert("The tolerance of a resistor is the range a resistor will have. For example, if you have a 100 ohm resistor at 10% tolerance your resister could be anywhere between 90 ohms to 110 ohms ");
})
powerinfo.addEventListener("click", () => {
    alert("Power is how much power the resistor can take. If its small it can take between 4mw to about .5 watts. Some resistors can take upto 7000 watts");
})
tempcoeInfo.addEventListener("click", () => {
    alert("The temperature coefficient tells you how much the resistance of your resistor can change with a change of temperature.");
})
stabilityInfo.addEventListener("click", () => {
    alert("S stable resistor is one that does not change its resistance due to a change in resistor temperature, outside temperature, humitidy, voltage, time or other causes");
})
noiseInfo.addEventListener("click", () => {
    alert("Tells you how much noise the resistor gives off to a circuit.");
})
usesInfo.addEventListener("click", () => {
    alert("This is just giving you ideas on how you can best use that resistor.");
})