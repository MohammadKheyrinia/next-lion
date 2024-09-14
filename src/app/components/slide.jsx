"use client"

export const slideLeft = () => {
    const slider = document.getElementById('slider');
    if (slider) {
        slider.scrollLeft -= 215;
    }
}

export const slideRight = () => {
    const slider = document.getElementById('slider');
    if (slider) {
        slider.scrollLeft += 215;
    }
}
