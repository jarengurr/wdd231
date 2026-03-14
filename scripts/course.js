const classes2 = [
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


let myClases = classes2;

function showAll() {
     
   myClases = classes2;
    createClassCard();
}


function showWdd() {
    // let namesB = names.filter(name => name.charAt(0) === 'B');
    
    //document.querySelector(".piclist").removeChild();
    
    myClases = myClases.filter(myClases = myClases.classType = "wdd");
    createClassCard();
}
function showCse() {
    
    
    myClases = myClases.filter(myClases = myClases.classType = "cse");
    createClassCard();
}
function findCredits() {
       
    myClases = myClases.filter();
    createClassCard();
}
function addCredits() {
    let holdcredit = 0;
    myClases.forEach(classes => {
    if (classes.completed == "YES") {
        holdcredit = holdcredit + classes.credit;
    }
})
}

function createClassCard() {
    myClases.forEach(classes => {
        let classcard = document.createElement("section");
        let cardName = document.createElement("p"); 
        cardName.textContent = classes.className;
        classcard.appendChild(cardName);
       
        document.querySelector(".cardlist").appendChild(classcard);


    }

    )
};


 /* classButton.querySelector(".cardlist").appendChild("testone"); */
