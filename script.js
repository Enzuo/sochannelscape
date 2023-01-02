
let displayMode = 0

window.addEventListener('DOMContentLoaded', () => {
    initXY(DATA)
    displayData(DATA.map((d, index) => d.concat(DATAXY[index])))
    initDragEvents()
    
    let copyButton = document.getElementById("copy")
    copyButton.addEventListener("click", () => {
        let copyData = UTILS.stringify(DATAXY)// JSON.stringify(DATAXY, null, 2)
        console.log(copyData)
        navigator.clipboard.writeText(copyData)
    })

    let displayButton = document.getElementById("display")
    displayButton.addEventListener("click", () => {
        displayMode ++
        displayMode = displayMode > 1 ? 0 : displayMode
        // trigger redisplay
        displayData(DATA.map((d, index) => d.concat(DATAXY[index])))
    })

});


function initXY(data){
    for(let i=0; i< data.length; i++){
        if(!DATAXY[i]){
            DATAXY[i] = [0,0]
        }
    }
}

function initDragEvents(){
    const elements = document.getElementsByClassName("entity");
    for (var i = 0; i < elements.length; i++) {
        let element = elements[i]
        element.addEventListener("dragstart", handleDragStart);
        element.addEventListener("dragend", handleDragEnd);
    }
}

var elementX = 0
var elementY = 0
function handleDragStart(e) {
    var rect = e.target.getBoundingClientRect();
    elementX = e.clientX - rect.left; 
    elementY = e.clientY - rect.top;
}

function handleDragEnd(e) {
    // Add the target element's id to the data transfer object
    // ev.dataTransfer.setData("text/plain", ev.target.id);
    // console.log("end", e)
    let x = (e.x-elementX)
    let y = (e.y-elementY)
    e.target.style.left = x + "px"
    e.target.style.top = y + "px"

    let id = e.target.dataset.id
    DATAXY[id][0] = x
    DATAXY[id][1] = y
}

function displayData(data){
    console.log("data", data)
    let graph = document.getElementById("graph")
    graph.innerHTML = ''
    for(let i=0; i<data.length; i++){
        let entityData = data[i]
        let name = entityData[0]
        let logo = entityData[1]
        let platform = entityData[2][0][0]

        let lastSubCountIndex = entityData[2][0].length - 1
        let lastSubCount = entityData[2][0][lastSubCountIndex]
        let previousSubCountIndex = lastSubCountIndex - 1 || 1
        let previousSubCount = entityData[2][0][previousSubCountIndex]
        let growth = lastSubCount - previousSubCount
        let growthPercent = growth !== 0 ? growth / previousSubCount : 0

        let x = entityData[4]
        let y = entityData[5]
        let isFav = DATAFAV.findIndex(a => a === logo) >= 0 ? true : false 
        let entity = createEntity(i, name, logo, platform, lastSubCount, x, y, isFav, growth, growthPercent)
        graph.appendChild(entity)
    }
}


/**
 * 
 * 
 * 
 */

function createEntity(id, name, logo, platform, subcount, x, y, isFav, growth, growthPercent){
    let entity = document.createElement("div");
    entity.className = "entity"
    entity.draggable = true
    entity.dataset.id = id


    let entityImgContainer = document.createElement("div")
    entityImgContainer.className = "logo"
    let entityImg = document.createElement("img")
    entityImg.draggable = false
    entityImg.src = "static/" + logo + ".jpg"
    entityImgContainer.appendChild(entityImg)


    let platformContainer = document.createElement("div")
    platformContainer.className = "platform"
    let platformIcon = document.createElement("div")
    platformIcon.className = "platform-icon"
    let platformIconImg = document.createElement("img")
    platformIconImg.draggable = false
    platformIconImg.src = "static/icon-" + platform + ".png"
    platformIcon.appendChild(platformIconImg)
    let platformSubCount = document.createElement("div")
    platformSubCount.className = "sub-count"
    platformSubCount.innerHTML = subcount

    let platformGrowth = document.createElement("div")
    platformGrowth.className = "growth"
    let platformGrowthAbsolute = document.createElement("div")
    platformGrowthAbsolute.className = "growth-absolute"
    platformGrowthAbsolute.innerHTML = (growth > 0 ? '+' : '') + Math.floor(growth)
    let platformGrowthPercent = document.createElement("div")
    platformGrowthPercent.className = "growth-percent"
    platformGrowthPercent.innerHTML = Math.floor(growthPercent * 100) + '%'
    platformGrowth.appendChild(platformGrowthAbsolute)
    platformGrowth.appendChild(platformGrowthPercent)



    if(displayMode === 0){
        platformContainer.appendChild(platformIcon)
        platformContainer.appendChild(platformSubCount)
    }
    if(displayMode === 1){
        platformContainer.appendChild(platformGrowth)
    }


    let nameContainer = document.createElement("div")
    nameContainer.className = "name"
    nameContainer.innerHTML = name

    if(isFav){
        let starContainer = document.createElement("div")
        starContainer.className = "star"
        starContainer.innerHTML = '💛'
        entity.appendChild(starContainer)
    }


    entity.appendChild(entityImgContainer)
    entity.appendChild(platformContainer)
    entity.appendChild(nameContainer)
    entity.style.left = x + "px"
    entity.style.top = y + "px"


    return entity
}






