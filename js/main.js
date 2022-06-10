let currenteIndex = 0;

const changeImage = () => {
    const currentImg = document.querySelector(".z-1");
    currentImg.classList.remove("z-1")

    currenteIndex = parseInt(currentImg.dataset.zIndex);

    if (currenteIndex === 4) {
        currenteIndex = 0
    }
    currenteIndex++

    const nextImg = document.querySelector(`#img-${currenteIndex}`)
    nextImg.classList.add("z-1")
}

setInterval(changeImage, 3000)