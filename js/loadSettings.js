/* 
//existingEntries ruft alle vorhandenen Items vom localstorage ab
let existingSettingsEntries = localStorage.getItem("settingsDataImage")


// Wenn es noch keine Einträge gibt erstelle einen leeren Array
if (existingSettingsEntries === null) {
    existingSettingsEntries = []
} else {
    let backgroundBody = document.body
    backgroundBody.setAttribute('backgroundImage', 'url(' + existingSettingsEntries + ')')
    console.log(existingSettingsEntries)
} */