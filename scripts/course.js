const classes = [
    {
        className: "CSE110",
        classType: "cse",
        credit: 2,
        completed: "YES"
    },
    {
        className: "CSE111",
        classType: "cse",
        credit: 2,
        completed: "YES"
    },
    {
        className: "WDD130",
        classType: "wdd",
        credit: 2,
        completed: "YES"
    },
    {
        className: "WDD131",
        classType: "wdd",
        credit: 2,
        completed: "YES"
    },
    {
        className: "WDD231",
        classType: "wdd",
        credit: 2,
        completed: "NO"
    },
      
    ];


const myClases = classes;

function showAll() {
     
   myClases = myClases;
    createClassCard();
}


function showWdd() {
    // let namesB = names.filter(name => name.charAt(0) === 'B');
    
    //document.querySelector(".piclist").removeChild();
    
    myClases = myClases.filter(classes = classes.classType = "wdd");
    createClassCard();
}
function showCse() {
    
    
    mytemples = mytemples.filter(classes = classes.classType = "cse");
    createClassCard();
}
function findCredits() {
       
    mytemples = mytemples.filter(classes => classes.area > 90000);
    createClassCard();
}

function createClassCard() {
    mytemples.forEach(classes => {
        let classcard = document.createElement("section");
        let cardName = document.createElement("p"); 
        cardName.textContent = classes.className;
        classcard.appendChild(cardName);
       
        document.querySelector(".cardlist").appendChild(classcard);


    }

    )
};


 /* classButton.querySelector(".cardlist").appendChild("testone"); */
