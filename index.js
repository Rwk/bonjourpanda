document.body.onload = displayFact

const ENDPOINT = "https://some-random-api.ml/animal/panda"

function displayFact() {
    fetch(ENDPOINT)
    .then(response => response.json())
    .then(json => {
        var img = document.createElement('img')
        img.src = json.image
        img.referrerPolicy = 'no-referrer'
        document.getElementById('panda-fact').appendChild(img)

        var blockquote = document.createElement('blockquote')
        blockquote.textContent = json.fact
        document.getElementById('panda-fact').appendChild(blockquote)
    })
    .catch(e => {
        console.log(e)
    })
}
