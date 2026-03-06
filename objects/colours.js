
const primaryColors = {
    red: "red-hexcode",
    blue: "blue"
};

const secondaryColors = {
    grey: "grey",
    black: "black"
};

const allColors = {
    ...primaryColors,
    ...secondaryColors, 
    
    getColor(colour) {
        return allColors.red
    }
}

console.log(allColors.getColor("red"));
// expected output: red-hexcode 









