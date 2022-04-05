function RatingState() {
    const main = document.querySelector(".main")
    main.setAttribute("class", "main rating")

    const starImgContainer = document.createElement("div")
    starImgContainer.setAttribute("class", "starImgContainer")
    const starImg = document.createElement("img")
    starImg.setAttribute("class", "img-keepsize")
    starImg.src = './images/icon-star.svg'
    starImgContainer.appendChild(starImg)

    const header = document.createElement("h2")
    header.setAttribute("class", "header")
    header.textContent = "How did we do?"

    const paragraph = document.createElement("p")
    paragraph.setAttribute("class", "paragraph")
    paragraph.textContent = "Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!"

    const ratingChoices = document.createElement("div")
    ratingChoices.setAttribute("class", "ratingChoices")

    for(let i = 0; i < 5; i++) {
        const ratingChoice = document.createElement("p")
        ratingChoice.setAttribute("class", "ratingChoice")
        ratingChoice.textContent = i + 1

        ratingChoice.addEventListener("click", (e) => {
            if(ratingChoice.className.includes("selected")){
                ratingChoice.classList.remove("selected")
            }else {
                if(checkForSelected()) {
                    checkForSelected().classList.remove("selected")
                }
                ratingChoice.classList.add("selected")
            }
        })

        ratingChoice.addEventListener("touchend", () => {
            if(ratingChoice.className.includes("selected")){
                ratingChoice.classList.remove("selected")
            }else {
                if(checkForSelected()) {
                    checkForSelected().classList.remove("selected")
                }
                ratingChoice.classList.add("selected")
            }
        })

        ratingChoices.appendChild(ratingChoice)    
    }

    const submitBtn = document.createElement("button")
    submitBtn.setAttribute("class", "submitBtn")
    submitBtn.textContent = "SUBMIT"

    submitBtn.addEventListener("click", () => {
        let rating = Array.from(document.querySelectorAll(".ratingChoice")).find(item => item.className.includes("selected"))

        if(rating) {
            clearDisplay()
            ThankyouState(rating.textContent)
        }

    })

    main.appendChild(starImgContainer)
    main.appendChild(header)
    main.appendChild(paragraph)
    main.appendChild(ratingChoices)
    main.appendChild(submitBtn)
}

function checkForSelected() {
    const ratingChoices = Array.from(document.querySelectorAll(".ratingChoice"))

    return ratingChoices.find(item => item.className.includes("selected"))
}

function ThankyouState(rating) {
    const main = document.querySelector(".main")
    main.classList.add("centered")
    
    const thankyouImg = document.createElement("img")
    thankyouImg.src = "./images/illustration-thank-you.svg"
    thankyouImg.setAttribute("class", "img-keepsize margin-bottom")

    const ratingDisplay = document.createElement("p")
    ratingDisplay.setAttribute("class", "ratingDisplay margin-bottom")
    ratingDisplay.textContent = `You selected ${rating} out of 5`

    const header = document.createElement("h2")
    header.setAttribute("class", "thankyouHeader margin-bottom")
    header.textContent = "Thank you!"

    const paragraph = document.createElement("p")
    paragraph.setAttribute("class", "thankyouParagraph margin-bottom")
    paragraph.textContent = "We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!"

    main.appendChild(thankyouImg)
    main.appendChild(ratingDisplay)
    main.appendChild(header)
    main.appendChild(paragraph)
}

function clearDisplay() {
    const main = document.querySelector(".main")
    main.setAttribute("class", "main")

    while(main.firstChild) {
        main.removeChild(main.firstChild)
    }
}

RatingState()