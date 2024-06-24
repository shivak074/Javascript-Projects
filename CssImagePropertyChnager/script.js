const width = document.querySelector("#width");
const borderradius = document.querySelector("#borderradius");
const padding = document.querySelector("#padding");
const blur = document.querySelector("#blur");
const image = document.querySelector("#image");
const color = document.querySelector("#Colour");
const property = document.querySelectorAll(".properties");
const imags = document.querySelector(".imags");

property.forEach((ranges) => {
    ranges.addEventListener("change", function() {
        const setwidth = width.value;
        image.style.width = setwidth + "%";
        image.style.height = setwidth + "%";
        
        const setborderradius = borderradius.value;
        image.style.borderRadius = setborderradius + "%";
        
        
        const setpadding = padding.value;
        image.style.padding = setpadding + "px";

        const setcolor = color.value;
        imags.style.backgroundColor = setcolor;
        
        const setblur = blur.value;
        image.style.filter = "blur(" + setblur + "px)";
    })
});
