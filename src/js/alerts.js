import elements from '../alerts.json'


if (elements){
let alertSection = document.createElement('section')
elements.forEach((item) => {
    console.log(item)
        let message = item.message
        let color = item.color
        let background = item.backgroundcolor

        let p = document.createElement('p')
        p.innerHTML = message
        p.style.background = background
        p.style.color = color
        p.style.textAlign = "center"
        p.style.fontSize = "32px"
        
        alertSection.appendChild(p)
    
    })
document.querySelector('main').prepend(alertSection)

}

console.log(elements)
export default elements