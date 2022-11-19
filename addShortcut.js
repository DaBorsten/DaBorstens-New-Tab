
/**********************************************************************
                                Functions
**********************************************************************/


/***********************************
        Add New Website Popup
***********************************/

function openAddWebsitePopup() {
    const DisplayPopup = document.getElementById('newWebsite')

    if (DisplayPopup.style.display !== 'flex') {
        DisplayPopup.style.display = 'flex'
    } return
}

function applyNewWebsite() {
    const DisplayPopup = document.getElementById('newWebsite')
    let websiteLink = document.getElementById('websiteUrl').value // Webseiten Link aus Eingabefeld auslesen und in Variable speichern
    let websiteNameValue = document.getElementById('websiteName').value // Webseiten Name aus Eingabefeld auslesen und in Variable speichern

    if (websiteLink && websiteNameValue !== null) {

        /**********************************
        Shortcut für Webseiten
        **********************************/

        // Der shortcutWrapper ist die Box in der das Bild und der Name der Webseite erscheinen
        let shortcutWrapper = document.createElement("a") // a Element wird erstellt
        shortcutWrapper.setAttribute('role', 'button')
        shortcutWrapper.setAttribute('class', 'shortcuts')
        shortcutWrapper.setAttribute('href', websiteLink)
        shortcutWrapper.setAttribute('title', websiteNameValue)

        let shortcutImage = document.createElement("div") // div Element wird erstellt für das Bild
        shortcutImage.setAttribute('class', 'shortcutImageClass')

        let shortcutName = document.createElement("div") // div Element wird erstellt für den Namen
        shortcutName.setAttribute('class', 'shortcutNameClass')
        shortcutName.innerHTML = websiteNameValue

        // Alle Änderungen werden ins Dokument übertragen bzw. als Child vom shortcutWrapper
        document.getElementById('speedDials').insertBefore(shortcutWrapper, document.getElementById('add'))
        shortcutWrapper.appendChild(shortcutImage)
        shortcutWrapper.appendChild(shortcutName)




        /********************************
            Local Storage
        ********************************/

        let websiteData = {
            name: websiteNameValue,
            url: websiteLink,
        }

        // Macht aus websiteData einen String und speichert ihn in grid-sites-data
        localStorage.setItem('grid-sites-data', JSON.stringify(websiteData))

        // Nun werden die neuen Daten an existierenden Einträge gepusht
        existingEntries.push(websiteData);

        // Nun neuen und alten Daten werden zu einenm String gemacht und grid-sites-data hinzugefügt
        localStorage.setItem("grid-sites-data", JSON.stringify(existingEntries))


        // Das Popup wird geschlossen
        DisplayPopup.style.display = 'none'
    }
}

function quitAddWebsitePopup() {
    const DisplayPopup = document.getElementById('newWebsite')

    if (DisplayPopup.style.display !== 'none') {
        DisplayPopup.style.display = 'none'
    } return
}
/*********************************************************************/