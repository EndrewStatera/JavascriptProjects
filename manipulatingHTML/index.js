
//MANIPULATING HTML

//CREATE ELEMENTS
    let createdElement = document.createElement("h1");

//ADD ATRIBUTES
    createdElement.textContent = "Açaí is life, bruh";
    createdElement.id = "created";
    createdElement.style.color = "purple";
    createdElement.style.textAlign = "center";
    createdElement.style.stroke = "black";
//APPEND ELEMENT
    //document.body.append(createdElement)
    //document.getElementById("box1").prepend(createdElement);
    document.body.insertBefore(createdElement, document.getElementById("box2"));
//DELETE ELEMENTS

