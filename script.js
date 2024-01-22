
//https://www.youtube.com/watch?v=g0VXhAYkDm4

function Validation() {
    let nomFac = document.getElementById("nom").value
    let erreurNom = document.getElementById("erreur-nom-fac")
    if (nomFac == null) {
        erreurNom.textContent = "Le nom doit être rempli"
        return false
    }
    else {
        erreurNom.textContent = ""
        return false
    }

    let adresseFac = document.getElementById("adresse").value
    let erreurAdd = document.getElementById("erreur-add-fac")
    if (adresseFac == null) {
        erreurAdd.textContent = "Le nom doit être rempli"
        return false
    }
    else {
        erreurAdd.textContent = ""
        return false
    }

    let livCheck = document.getElementById("checkliv").checked
    if (livCheck == true) {

    }
    else {

        let nomLiv = document.getElementById("nom2").value
        let erreurNom2 = document.getElementById("erreur-nom-liv")

        if (nomLiv == null) {
            erreurNom2.textContent = "Le nom doit être rempli"
            return false
        }
        else {
            erreurNom2.textContent = ""
            return false
        }

        let adresseLiv = document.getElementById("adresse2").value
        let erreurAdd2 = document.getElementById("erreur-add-liv")

        if (adresseLiv == null) {
            erreurAdd2.textContent = "Le nom doit être rempli"
            return false
        }
        else {
            erreurAdd2.textContent = ""
            return false
        }
    }


}