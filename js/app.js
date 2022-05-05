const countElement = document.getElementById('visit-count')

updateVisitCount()

function updateVisitCount(){
    fetch('https://api.countapi.xyz/update/nano/site/?amount=1')
    .then(response => response.json())
    .then(response => {
        countElement.textContent = 'Page visits ' + response.value
    })

}