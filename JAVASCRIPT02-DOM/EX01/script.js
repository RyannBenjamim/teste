const contactSection = document.getElementById("contacts-list")

function addContact() {
    const h3 = document.createElement("h3")
    h3.innerText = "Contato"

    const ul = document.createElement("ul")

    // Nome li
    const nameLi = document.createElement("li")
    nameLi.innerHTML = "Name:"

    const nameInput = document.createElement("input")
    nameInput.type = "text"
    nameInput.name = "fullname"
    
    nameLi.appendChild(nameInput)
    ul.appendChild(nameLi)
    ul.appendChild(document.createElement("br"))

    // Telefone li
    const phoneLi = document.createElement("li")
    phoneLi.innerHTML = "Telefone:"

    const phoneInput = document.createElement("input")
    phoneInput.type = "text"
    phoneInput.name = "phone"
    
    phoneLi.appendChild(phoneInput)
    ul.appendChild(phoneLi)
    ul.appendChild(document.createElement("br"))

    // Endereço li
    const addressLi = document.createElement("li")
    addressLi.innerHTML = '<label for="address">Endereço:</label>'

    const addressInput = document.createElement("input")
    addressInput.type = "text"
    addressInput.name = "address"
    addressInput.id = "address"
    
    addressLi.appendChild(addressInput)
    ul.appendChild(addressLi)
    ul.appendChild(document.createElement("br"))

    // Adicionando tudo na Section
    contactSection.append(h3, ul)
}

function removeContact() {
    const titles = document.getElementsByTagName("h3")
    const contacts = document.getElementsByTagName("ul")

    contactSection.removeChild(titles[titles.length - 1])
    contactSection.removeChild(contacts[contacts.length - 1])
}