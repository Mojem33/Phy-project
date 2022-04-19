const box = document.querySelector(".box")

const observer = new ResizeObserver(entries =>{
   const boxElement = entries[0]
   const isSmall = boxElement.contentRect.width < 150
   boxElement.target.style.backgroundColor = isSmall ?"#013220" : "BACKGROUND1.png"
})

observer.observe(box)
