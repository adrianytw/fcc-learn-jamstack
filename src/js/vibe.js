// bank for vibes options
const vibes = [
    " ... x3 nuzzles",
    " ... x4 wuzzles",
    " ... x5 rawrxd",
    " ... x6 i hate my life",
]

// choosing a random vibe
var vibe = vibes[Math.floor(Math.random() * Math.floor(vibes.length))]

// displaying a good vibe
document.querySelector(".vibe").append(vibe)