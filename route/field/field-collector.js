function showDashboard(){
    document.getElementById('table').style.display = 'block'
    document.getElementById('formtab').style.display = 'none'
}

function showReport(){
    document.getElementById('table').style.display = 'none'
    document.getElementById('formtab').style.display = 'block'
}

function submitReport(){
    location.reload()
}

function clearReport(){
    windows.reload()
}