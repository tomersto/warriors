const types = ["Axeman", "Swordman", "Archer", "Magical"]
const images = {
    Axeman: "https://vignette.wikia.nocookie.net/travian/images/6/65/Axeman.jpg/revision/latest/top-crop/width/360/height/450?cb=20110423061015&path-prefix=en",
    Swordman: "https://cdnb.artstation.com/p/assets/images/images/020/324/785/large/ting-xu-swordman.jpg?1567349824",
    Magical: "https://www.netclipart.com/pp/m/262-2626844_magician-png-illustration.png",
    Archer: "https://www.freepngimg.com/thumb/clash_of_clans/6-2-clash-of-clans-archer-png.png",
}
const DOM = {}

function generateWarrior() {
    const level = Math.round(Math.random() * 10)
    const power = Math.round(Math.random() * 100)
    const type = types[Math.floor(Math.random() * types.length)]
    return {
        type: type,
        level: level,
        power: power,
        damage: level * power,
        image: images[type],
    }
}

function generateWarriors(numberOfWarriors) {
    if (typeof numberOfWarriors !== 'number') return;
    const warriors = []
    for (let index = 0; index < numberOfWarriors; index++) {
        warriors.push(generateWarrior())
    }
    return warriors;
}

(function () {
    const warriors = generateWarriors(100)
    DOM.warriorsMain = document.getElementById('warriorsMain')

    draw(warriors, DOM.warriorsMain)

}())

function draw(data, containerDiv) {
    if (!Array.isArray(data)) return
    if (typeof containerDiv !== 'object') return
    data.forEach(warrior => {
        // containerDiv.appendChild(drawCard(warrior))
        // console.log(drawCard(warrior))
        containerDiv.appendChild(drawCard(warrior))
    })
}


function drawCard(cardData) {
    let mainDiv = document.createElement('div')
    mainDiv.className = "card"
    mainDiv.style.width = "18rem"
    mainDiv.style.margin = "10px"
    
    let mainImg = document.createElement('img')
    mainImg.className = "card-img-top"
    mainImg.style.height = "300px"
    mainImg.src = cardData.image
    mainDiv.appendChild(mainImg)

    let descriptionDiv = document.createElement('div')
    descriptionDiv.className = 'card-body'
    mainDiv.appendChild(descriptionDiv)

    let title = document.createElement('h5')
    title.className = 'card-title'
    title.innerText = cardData.type
    descriptionDiv.appendChild(title)

    let pLevel = document.createElement('p')
    pLevel.className = 'card-text'
    pLevel.innerText = `Level: ${cardData.level}`
    descriptionDiv.appendChild(pLevel)

    let pPower = document.createElement('p')
    pPower.className = 'card-text'
    pPower.innerText = `Power: ${cardData.power}`
    descriptionDiv.appendChild(pPower)

    let pDamage = document.createElement('p')
    pDamage.className = 'card-text'
    pDamage.innerText = `Damage: ${cardData.damage}`
    descriptionDiv.appendChild(pDamage)

    return mainDiv

}
