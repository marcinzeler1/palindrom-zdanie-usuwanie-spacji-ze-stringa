console.log("witaj!");

const text = prompt("podaj wyraz");
const usunac = text.replaceAll(" ","");
const dlugosc = usunac.length;
//console.log(dlugosc);
const tablica = [];
const acilbat = [];

function palindrom () { 
    //let spacje = text.replaceAll(" ","");
    for(i=0; i<dlugosc; i++) {
    litera = usunac.charAt(i);
    //console.log(litera);
    tablica.push(litera);
    acilbat.unshift(litera);
    document.getElementById("normal").innerHTML = tablica;
    document.getElementById("wspak").innerHTML = acilbat;
    }
    
    //console.log(tablica);
    //console.log(acilbat);
    if(porownaj(tablica, acilbat) == true) {
        console.log("zgadza się!!! to zdanie to palindrom")
    } else {
        console.log("niestety..., podaj kolejne zdanie")
    }
}

function porownaj() {
    return Array.isArray(tablica) &&
    Array.isArray(acilbat) &&
    tablica.length === acilbat.length &&
    tablica.every((val, index) => val === acilbat[index]);
}
palindrom(text);


//console.log(porownaj(tablica, acilbat));
// const word = "kajak";
//const tab = [...word];
//console.log(tab.reverse().join("") === tab.join("")); //true czyli palindrom
