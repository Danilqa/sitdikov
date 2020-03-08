const color = { primary: '#000', secondary: '#fff' };
const sizeRatio = 5;
const wrapper = { width: 1024, padding: sizeRatio * 12 };
const column = { width: sizeRatio * 44, margin: sizeRatio * 16 };
const numberOfColumnsInRow = 3;
const breakpoints = {
    mobile: column.width * numberOfColumnsInRow + column.margin * (numberOfColumnsInRow - 1) + wrapper.padding * 2
};
const base = { fontSize: 17 };

export const Theme = {
    base,
    color,
    sizeRatio,
    wrapper,
    column,
    breakpoints
};
