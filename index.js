function cursorEffect () {
    var page1Content = document.querySelector (".page1-content")
var cursor = document.querySelector("#cursor")

page1Content.addEventListener("mousemove", function(action){

    gsap.to("#cursor", {
    
        x : action.x,
        y : action.y
    })
   
})

page1Content.addEventListener("mouseenter" , function(){

    gsap.to(cursor, {
        scale:1,
        opacity:1
        
    })
})


page1Content.addEventListener("mouseleave" , function(){

    gsap.to(cursor, {
        scale:0,
        opacity: 0
    })
})

}

cursorEffect()

function page2Animation () {
   
    gsap.from (".elem h1", {
        y:120,
        stagger:0.25,
        duration:1,
        scrollTrigger:{
            trigger:"#page2",
            scroller: "#main",
            start:"top 47%",
            end:"top 46%",
          
        }
    })
    
}

page2Animation()
