const elements = document.querySelector("#data")
const para = document.querySelector("#para")
const slider = document.querySelector('input[type="range"]')
slider.addEventListener('input', () => para.style.fontSize = slider.value + "px", false)
elements.addEventListener(
    "change",
    (e) => {
        if (e.target.id != "font-size2") {
            para.style[e.target.id] =
                e.target.id == "font-size" ? e.target.value + "px" : e.target.value;
        }
    }
)