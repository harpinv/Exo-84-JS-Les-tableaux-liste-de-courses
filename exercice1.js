// Inutile de modifier le code suivant
let articles = [
    "Orangina",
    "Creme Fraiche",
    "Tartiflette",
    "Emmental",
    "Bananes",
    "Chips",
    "Bieres",
    "Pizza"
];

// Votre code à partir d'ici :

let list = document.getElementById('listeCourse');
let element = document.getElementById('element');
let efface = document.getElementById('efface');


for(let i = 0; i < articles.length; i++) {
    let pop = document.createElement('li');
    pop.innerText = articles[i] + " ";
    let lot = document.createElement('a');
    lot.innerText = "m";
    lot.style.color = "blue";
    pop.append(lot);
    list.append(pop);

    lot.addEventListener('click', function () {
        if(pop.innerText === lot.innerText) {
            pop.innerText = articles[i] + " ";
            pop.append(lot);
        } else {
            pop.innerText = " ";
            pop.append(lot);
        }
    })
}

element.addEventListener('click', function () {
    let mope = document.createElement('li');
    let ajoute = document.getElementById('ajoute').value;
    let lit = document.createElement('a');
    lit.innerText = "m";
    lit.style.color = "blue";
    mope.innerText = ajoute + " ";
    mope.append(lit);
    list.append(mope)
    articles.push(ajoute);

    lit.addEventListener('click', function () {
        if(mope.innerText === lit.innerText) {
            mope.innerText = ajoute + " ";
            mope.append(lit);
        } else {
            mope.innerText = " ";
            mope.append(lit);
        }
    })
})

efface.addEventListener("click", function () {
    let myLi = document.getElementsByTagName('li');
    myLi[myLi.length - 1].remove();
    articles.pop();
})






