
/********************************
        Open Settings Popup
********************************/

function openSettingsPopup() {
    const settingsMenu = document.getElementById('settings')

    if (settingsMenu.style.display !== 'flex') {
        settingsMenu.style.display = 'flex'
    } return
}


/********************************
        Settings Tabs
********************************/

const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget)
    tabContents.forEach(tabContent => {
      tabContent.classList.remove('active')
    })
    tabs.forEach(tab => {
      tab.classList.remove('active')
    })
    tab.classList.add('active')
    target.classList.add('active')
  })
})


/**********************************
Background Image
**********************************/

function toggleBackgroundImage() {
    let checkbox = document.getElementById('backgroundImageCheckbox')
    if (checkbox.checked == true) {
        document.body.style.backgroundImage = 'url(https://www.akamai.com/site/im-demo/perceptual-standard.jpg)'
    } else {
        document.body.style.backgroundImage = 'none';
    }
}

/**********************************
Shortcuts
**********************************/



/**********************************
Design
**********************************/



/********************************
Close Settings Popup (cancel)
********************************/

function quitSettingsPopup() {
    const settingsMenu = document.getElementById('settings')

    if (settingsMenu.style.display !== 'none') {
        settingsMenu.style.display = 'none'
    } return
}