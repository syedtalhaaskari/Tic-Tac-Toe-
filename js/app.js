function toggleMode() {
    let toggle = document.getElementById("colorMode").checked;
    var r = document.querySelector(':root')
    if (toggle) {
        r.style.setProperty('--theme-bg-color', '#2a2b2c');
        r.style.setProperty('--theme-color', 'white');
        r.style.setProperty('--theme-border-color', 'white');
    } else {
        r.style.setProperty('--theme-bg-color', 'white');
        r.style.setProperty('--theme-color', '#4c6986');
        r.style.setProperty('--theme-border-color', '#4c6986');
    }
}

function changeColorX(color) {
    document.querySelector(':root').style.setProperty('--player-x-color', color)
}

function changeColorO(color) {
    document.querySelector(':root').style.setProperty('--player-o-color', color)
}

window.onload = () => {
    console.log("Ye")
}