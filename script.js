
//https://www.youtube.com/watch?v=g0VXhAYkDm4

function Validation() {

    let livCheck = document.getElementById("checkliv").checked
    let nomLiv = document.getElementById("nom2").value
    let adresseLiv = document.getElementById("adresse2").value
    if (livCheck) {
        document.getElementById("nom2").value = document.getElementById("nom").value
        document.getElementById("adresse2").value = document.getElementById("adresse").value

    }
    else {

        if (nomLiv == "") {
            document.getElementById("erreur-nom-liv").classList.remove("hidden")
            return false
        }
        else {
            document.getElementById("erreur-nom-liv").classList.add("hidden")

        }


        let erreurAdd2 = document.getElementById("erreur-add-liv")

        if (adresseLiv == "") {
            document.getElementById("erreur-add-liv").classList.remove("hidden")
            return false
        }
        else {
            document.getElementById("erreur-add-liv").classList.add("hidden")

        }
    }


}