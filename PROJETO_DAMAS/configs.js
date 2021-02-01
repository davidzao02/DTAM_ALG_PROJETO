let radios = document.getElementsByName('radiosSound')

for (let i = 0; i < radios.length; i++) {
    if (radios[0].checked) {
        if (typeof (Storage) !== undefined) {
            localStorage.setItem('sound', true)
        }else{
            alert(`THIS BROWSER DOESN'T SUPPORT LOCAL STORAGE!`)
        }
    }else if(radios[1].checked) {
        if (typeof (Storage) !== undefined) {
            localStorage.setItem('sound', false)
        }else{
            alert(`THIS BROWSER DOESN'T SUPPORT LOCAL STORAGE!`)
        }
    }
    
}