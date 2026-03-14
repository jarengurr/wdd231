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
    createTempleCard();
}


function showWdd() {
    // let namesB = names.filter(name => name.charAt(0) === 'B');
    
    //document.querySelector(".piclist").removeChild();
    
    mytemples = mytemples.filter(temple => temple.area > 90000);
    createTempleCard();
}
function showCse() {
    
    
    mytemples = mytemples.filter(temple => temple.area > 90000);
    createTempleCard();
}
function findCredits() {
       
    mytemples = mytemples.filter(temple => temple.area > 90000);
    createTempleCard();
}




const classButton = document.querySelector("#myClasses");

/* classButton.querySelector(".piclist").appendChild("testone");
classButton.querySelector(".piclist").appendChild("testtwo");
 */