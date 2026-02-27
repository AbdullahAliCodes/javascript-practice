
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
    // add getColor function that takes 1 param of color and returns color 
    getColor(colour) {
        // const { red, blue, grey, black} = allColors;
        return allColors.red
    }
}

console.log(allColors.getColor("red"));
// expected output: red-hexcode 