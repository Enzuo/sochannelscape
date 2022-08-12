


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
    console.log("end", e)
    e.target.style.left = (e.x-elementX) + "px"
    e.target.style.top = (e.y-elementY) + "px"

    let id = e.target.dataset.id
    // DATAXY[id][0] = e.x
    // DATAXY[id][1] = e.y
}

function displayData(data){
    console.log("data", data)
    for(let i=0; i<data.length; i++){
        let entityData = data[i]
        let name = entityData[0]
        let logo = entityData[1]
        let platform = entityData[2][0][0]
        let subcount = entityData[2][0][1]
        let x = entityData[4]
        let y = entityData[5]
        createEntity(i, name, logo, platform, subcount, x, y)
    }
}


/**
 * 
 * 
 * 
 */

function createEntity(id, name, logo, platform, subcount, x, y){
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
    let platformSubCount = document.createElement("div")
    platformSubCount.className = "sub-count"
    platformSubCount.innerHTML = subcount
    platformIcon.appendChild(platformIconImg)
    platformContainer.appendChild(platformIcon)
    platformContainer.appendChild(platformSubCount)


    let nameContainer = document.createElement("div")
    nameContainer.className = "name"
    nameContainer.innerHTML = name


    entity.appendChild(entityImgContainer)
    entity.appendChild(platformContainer)
    entity.appendChild(nameContainer)
    entity.style.left = x + "px"
    entity.style.top = y + "px"


    document.body.appendChild(entity)
}






