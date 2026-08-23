



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

        thetolerance.innerHTML = `<span>TOLERANCE:</span> ${resistor.tolerance}`
        card.appendChild(thetolerance)

        thepower.innerHTML = `<span>POWER:</span> ${resistor.power_range}`
        card.appendChild(thepower)

        thetemp_coeff.innerHTML = `<span>TEMPERATURE COEFFICIENT:</span> ${resistor.temp_coefficient}`
        card.appendChild(thetemp_coeff)

        thestability.innerHTML = `<span>STABILITY:</span> ${resistor.stability}`
        card.appendChild(thestability)

        thenoise.innerHTML = `<span>NOISE:</span> ${resistor.noise}`
        card.appendChild(thenoise)

        goodfor.innerHTML = `<span>USES:</span> ${resistor.good_for}`
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


   
   

const composition = document.querySelector('#composition');
const carbonfilm = document.querySelector('#carbonfilm');
const metalfilm = document.querySelector('#metalfilm');
const metalfoil = document.querySelector('#metalfoil');
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
    document.getElementById("mytitle").textContent = "Carbon Composition"; 
    displayBoxText.innerHTML = "This resistor has been around for a long time. It was used in older equipment and devices. It is good to experiment with. You can use it to build a L.E.D. circuit because precision or stability is not important. If the resister changes the resistance it will not change the brightness that much.";
    displayBox.showModal();
    
})
carbonfilm.addEventListener("click", () =>  {
    document.getElementById("mytitle").textContent = "Carbon Film"; 
    displayBoxText.innerHTML = "This is better then a carbon composition resistor.";
    displayBox.showModal();
    
})
metalfilm.addEventListener("click", () => {
        document.getElementById("mytitle").textContent = "Metal Film";
        displayBoxText.innerHTML = "Much better then the carbon film resistor.";
        displayBox.showModal();
    
})
metalfoil.addEventListener("click", () => {
        document.getElementById("mytitle").textContent = "Metal Foil";
        displayBoxText.innerHTML = "Better then metal film. And they are not restricted to standard resistance values";

        displayBox.showModal();
    
    })
oxide.addEventListener("click", () =>  {
    document.getElementById("mytitle").textContent = "Metal Oxide Film"; 
    displayBoxText.innerHTML = "A great resistor.";
    displayBox.showModal();
    
})
thick.addEventListener("click", () =>  {
    document.getElementById("mytitle").textContent = "Thick Film (Standard SMD)"; 
    displayBoxText.innerHTML = "This resistor has been around for a long time. It was used in older equipment and devices. It good to experiment with. You can use it to build a L.E.D. circuit because precision or stability is not important. If the resister changes the resistance it will not change the brightness that much.";
    displayBox.showModal();
    
})
thin.addEventListener("click", () =>  {
    document.getElementById("mytitle").textContent = "Thin Film (Precision SMD)"; 
    displayBoxText.innerHTML = "This resistor has been around for a long time. It was used in older equipment and devices. It good to experiment with. You can use it to build a L.E.D. circuit because precision or stability is not important. If the resister changes the resistance it will not change the brightness that much.";
    displayBox.showModal();
    
})
wirewound.addEventListener("click", () =>  {
    document.getElementById("mytitle").textContent = "Wirewound"; 
    displayBoxText.innerHTML = "This tends to have high inductance but can take a lot of power. There are non-inductive wirewound resistors but the will be more expensive.";
    displayBox.showModal();
    
})
precisionmf.addEventListener("click", () =>  {
    document.getElementById("mytitle").textContent = "Precision Metal Film"; 
    displayBoxText.innerHTML = "This resistor has been around for a long time. It was used in older equipment and devices. It good to experiment with. You can use it to build a L.E.D. circuit because precision or stability is not important. If the resister changes the resistance it will not change the brightness that much.";
    displayBox.showModal();
    
})
lowtcr.addEventListener("click", () =>  {
    document.getElementById("mytitle").textContent = "Low Tempreture Coefficient"; 
    displayBoxText.innerHTML = "This resistor has been around for a long time. It was used in older equipment and devices. It good to experiment with. You can use it to build a L.E.D. circuit because precision or stability is not important. If the resister changes the resistance it will not change the brightness that much.";
    displayBox.showModal();
    
})
current.addEventListener("click", () =>  {
    document.getElementById("mytitle").textContent = "Current Sense Resistor"; 
    displayBoxText.innerHTML = "This resistor has been around for a long time. It was used in older equipment and devices. It good to experiment with. You can use it to build a L.E.D. circuit because precision or stability is not important. If the resister changes the resistance it will not change the brightness that much.";
    displayBox.showModal();
    
})
power.addEventListener("click", () =>  {
    document.getElementById("mytitle").textContent = "High Power"; 
    displayBoxText.innerHTML = "This resistor has been around for a long time. It was used in older equipment and devices. It good to experiment with. You can use it to build a L.E.D. circuit because precision or stability is not important. If the resister changes the resistance it will not change the brightness that much.";
    displayBox.showModal();
    
})
hv.addEventListener("click", () =>  {
    document.getElementById("mytitle").textContent = "High Voltage"; 
    displayBoxText.innerHTML = "This resistor has been around for a long time. It was used in older equipment and devices. It good to experiment with. You can use it to build a L.E.D. circuit because precision or stability is not important. If the resister changes the resistance it will not change the brightness that much.";
    displayBox.showModal();
    
})
therm.addEventListener("click", () =>  {
    document.getElementById("mytitle").textContent = "Thermistors"; 
    displayBoxText.innerHTML = "This resistor has been around for a long time. It was used in older equipment and devices. It good to experiment with. You can use it to build a L.E.D. circuit because precision or stability is not important. If the resister changes the resistance it will not change the brightness that much.";
    displayBox.showModal();
    
})
noninductive.addEventListener("click", () =>  {
    document.getElementById("mytitle").textContent = "Non-Inductive "; 
    displayBoxText.innerHTML = "Good for high frequency circuits.";
    displayBox.showModal();
    
})
mov.addEventListener("click", () =>  {
    document.getElementById("mytitle").textContent = "Metal Oxide Varistor"; 
    displayBoxText.innerHTML = "MOV or Metal Oxide Varistors are rated for voltage. They will turn on and draw current only when a voltage level is hit.";
    displayBox.showModal();
    
})
pot.addEventListener("click", () =>  {
   document.getElementById("mytitle").textContent = "Potentiometers"; 
    displayBoxText.innerHTML = "These are good for many things like a Volume control.";
    displayBox.showModal();
    
})
trim.addEventListener("click", () =>  {
    document.getElementById("mytitle").textContent = "Trimmers"; 
    displayBoxText.innerHTML = "These are small and some need to be turned by a small screwdriver.";
    displayBox.showModal();
    
})
rheostats.addEventListener("click", () =>  {
    //alert("Hello World!");
    document.getElementById("mytitle").textContent = "Rheostats (High Power variable resistors)"; 
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
    alert("Inductance is the ratio of currents rate of change and the voltage of a coil. Inductance from a wirewound reisistor does not affect dc circuits too much but in a high frequency AC curcuit, your 5 ohm resistor could become a 7000 ohm resistor");
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
    alert("Stable resistor is one that does not change its resistance due to a change in resistor temperature, outside temperature, humitidy, voltage, time or other causes");
})
noiseInfo.addEventListener("click", () => {
    alert("Tells you how much noise the resistor gives off to a circuit. Its kind of like the resitor is a sound generator. Not loud enough to hear but a circuit can pick it up.");
})
usesInfo.addEventListener("click", () => {
    alert("This is just giving you ideas on how you can best use that resistor.");
})
}
displayCards(resistortype)