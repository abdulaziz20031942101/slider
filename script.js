const sr = ScrollReveal({
    origin:'top',
    distance:'1000px',
    duration:2500,
    delay:1500,
    reset:false
})

sr.reveal(`.home-1`,{origin:"right"})
sr.reveal(`.home-2`,{origin:"bottom"})

sr.reveal(`.home-3`,{origin:"top"})
sr.reveal(`.home-4`,{origin:"left"})
