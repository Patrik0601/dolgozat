function seconds() {
    let time = "14:34:42"
    let ido = time.split(`:`);
    let ora = parseInt(ido[0]) * 60 * 60;
    let perc = parseInt(ido[1]) * 60;
    let masodperc = parseInt(ido[2]);
    let egyNapMasodpercben = 24 * 60 * 60;
    let maradekIdoMasodpercben = egyNapMasodpercben - (ora + perc + masodperc);
    return(maradekIdoMasodpercben);
}
console.log(seconds("24:00:00"));

function gradeCalculator(eredmeny) {
    let score = 54;
    let maximum = 80;
    if ( 89 < ((score * 100) / maximum) < 101){
        eredmeny = "A"
    }
    else if (79 < ((score * 100) / maximum) < 90){
        eredmeny = "B"
    }
    else if (69 < ((score * 100) / maximum) < 80){
        eredmeny = "C"
    }
    else if (59 < ((score * 100) / maximum) < 70){
        eredmeny = "D"
    }
    else if (79 < ((score * 100) / maximum) < 60){
        eredmeny = "E"
    }
    else if (0 < ((score * 100) / maximum) < 50){
        eredmeny = "F"
    }
    else{
        eredmeny = "Nem megfelelő érték."
    }
}
console.log(gradeCalculator(eredmeny))