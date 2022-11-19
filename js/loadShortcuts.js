

//existingEntries ruft alle vorhandenen Items vom localstorage ab
let existingEntries = JSON.parse(localStorage.getItem("grid-sites-data"))


// Wenn es noch keine Einträge gibt erstelle einen leeren Array
if (existingEntries === null) {
    existingEntries = []
} else {
    existingEntries.forEach(websiteDataStored => {
        // Der shortcutWrapper ist die Box in der das Bild und der Name der Webseite erscheinen
        let shortcutWrapper = document.createElement("a") // a Element wird erstellt
        shortcutWrapper.setAttribute('role', 'button')
        shortcutWrapper.setAttribute('class', 'shortcuts')
        shortcutWrapper.setAttribute('href', websiteDataStored.url)
        shortcutWrapper.setAttribute('title', websiteDataStored.name)

        let shortcutImageWrapper = document.createElement("div") // div Element wird erstellt für das favIcon
        shortcutImageWrapper.setAttribute('class', 'shortcutImageClass')

        let shortcutImage = document.createElement("img") // img Element ist das favIcon
        let favIcon = 'https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=' + websiteDataStored.url + '&size=128'
        shortcutImage.setAttribute('class', 'favIcons')
        shortcutImage.setAttribute('src', favIcon)
        shortcutImage.setAttribute('alt', websiteDataStored.name)

        let shortcutName = document.createElement("div") // div Element wird erstellt für den Namen
        shortcutName.setAttribute('class', 'shortcutNameClass')
        shortcutName.innerHTML = websiteDataStored.name

        // Alle Änderungen werden ins Dokument übertragen bzw. als Child vom shortcutWrapper
        document.getElementById('speedDials').insertBefore(shortcutWrapper, document.getElementById('add'))
        shortcutWrapper.appendChild(shortcutImageWrapper)
        shortcutImageWrapper.appendChild(shortcutImage)
        shortcutWrapper.appendChild(shortcutName)

    })
}