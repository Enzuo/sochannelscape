


window.addEventListener('DOMContentLoaded', () => {
    displayData(DATA)
    initDrag()
});

function initDrag(){
    // Get the element by id
    const elements = document.getElementsByClassName("entity");
    console.log(elements)
    // Add the ondragstart event listener
    for (var i = 0; i < elements.length; i++) {
        let element = elements[i]
        element.addEventListener("dragstart", dragstart_handler);
        element.addEventListener("dragend", dragend_handler);
    }
}

function dragstart_handler(ev) {
    // Add the target element's id to the data transfer object
    ev.dataTransfer.setData("text/plain", ev.target.id);
    console.log("drag")
}

function dragend_handler(e) {
    // Add the target element's id to the data transfer object
    // ev.dataTransfer.setData("text/plain", ev.target.id);
    console.log("end", e)
    e.target.style.left = e.x + "px"
    e.target.style.top = e.y + "px"
}

function displayData(data){
    console.log("data", data)
    for(let i=0; i<data.length; i++){
        let entityData = data[i]
        let name = entityData[0]
        let logo = entityData[1]
        let platform = entityData[2][0][0]
        let subcount = entityData[2][0][1]
        let x = entityData[3]
        let y = entityData[4]
        createEntity(name, logo, platform, subcount, x, y)
    }
}


/**
 * 
 * 
 * 
 */

function createEntity(name, logo, platform, subcount, x, y){
    let entity = document.createElement("div");
    entity.className = "entity"
    entity.draggable = true


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