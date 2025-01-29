
const motsFrancais = ["clameur","gouaille","dodeliner","endimanché"]
const motsJaponais = ["(群衆の)どよめき、叫び声", "f:からかい、嘲り", "(頭や体を)軽くゆする、こっくりこっくりする","晴着を着た、めかしこんだ、ぎこちない、堅苦しい"]

let i=0
let k=0

let afficherFr = document.querySelector(".zoneMot")
let afficherJp = document.querySelector(".zoneRep")

// quand on appuis sur Fr, on affiche 2ème mot français 
let BtnFr = document.getElementById("btnFr")
BtnFr.addEventListener("click", () => {

    if(motsFrancais[i] === undefined){
        afficherFr.innerText = "c'est fini !"
    } else{
        afficherFr.innerText = motsFrancais[i]
        i++
    }
    
})  


// quand on appuis sur JP, on affiche la rep en japonais
let BtnJp = document.getElementById("btnJp")
BtnJp.addEventListener("click", () => {

    if (motsJaponais[k] === undefined){
        afficherJp.innerText = "c'est fini !"
    } else{
        afficherJp.innerText = motsJaponais[k]
        k++
    }
    
}) 




