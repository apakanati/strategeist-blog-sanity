/**
 * Return whether the given value is a valid hex color code.
 */
const isValidHex = (value: string): boolean => {
    if (value.substring(0, 1) !== '#') {
        return false;
    }

    if (value.length !== 4 && value.length !== 7) {
        return false;
    }

    if (/[^0-9a-f]/.test(value.toLowerCase().substring(1))) {
        return false;
    }

    return true;
};

/**
 * Return whether the given value is a valid HSL color code.
 */
const isValidHsl = (value: string): boolean => {
    if (value.substring(0, 4) !== 'hsl(') {
        return false;
    }

    if (value.substring(value.length - 1) !== ')') {
        return false;
    }

    const pieces = value
        .toLowerCase()
        .replace('hsl(', '')
        .replace(')', '')
        .split(',');

    if (pieces.length <= 0 || pieces.length > 3) {
        return false;
    }

    const hue = parseFloat(pieces[0]);
    const saturation = pieces[1];
    const lightness = pieces[2];
    const saturationInt = parseInt(saturation.replace('%', ''));
    const lightnessInt = parseInt(lightness.replace('%', ''));

    if (!Number.isInteger(hue)) {
        return false;
    }

    if (saturation.substring(saturation.length - 1) !== '%' || !Number.isInteger(saturationInt)) {
        return false;
    }

    if (lightness.substring(lightness.length - 1) !== '%' || !Number.isInteger(lightnessInt)) {
        return false;
    }

    if (hue < 0 || hue > 360) {
        return false;
    }

    if (saturationInt < 0 || saturationInt > 100) {
        return false;
    }

    if (lightnessInt < 0 || lightnessInt > 100) {
        return false;
    }

    return true;
}

/**
 * Return whether the given value is a valid HSLA color code.
 */
const isValidHsla = (value: string): boolean => {
    if (value.substring(0, 5) !== 'hsla(') {
        return false;
    }

    if (value.substring(value.length - 1) !== ')') {
        return false;
    }

    const pieces = value
        .toLowerCase()
        .replace('hsla(', '')
        .replace(')', '')
        .split(',');

    if (pieces.length <= 0 || pieces.length > 4) {
        return false;
    }

    const hue = parseFloat(pieces[0]);
    const saturation = pieces[1];
    const lightness = pieces[2];
    const alpha = parseFloat(pieces[3]);
    const saturationInt = parseInt(saturation.replace('%', ''));
    const lightnessInt = parseInt(lightness.replace('%', ''));

    if (!Number.isInteger(hue)) {
        return false;
    }

    if (saturation.substring(saturation.length - 1) !== '%' || !Number.isInteger(saturationInt)) {
        return false;
    }

    if (lightness.substring(lightness.length - 1) !== '%' || !Number.isInteger(lightnessInt)) {
        return false;
    }

    if (Number.isNaN(alpha)) {
        return false;
    }

    if (hue < 0 || hue > 360) {
        return false;
    }

    if (saturationInt < 0 || saturationInt > 100) {
        return false;
    }

    if (lightnessInt < 0 || lightnessInt > 100) {
        return false;
    }

    if (alpha < 0 || alpha > 1) {
        return false;
    }

    return true;
}

/**
 * Return whether the given value is a valid RGB color code.
 */
const isValidRgb = (value: string): boolean => {
    if (value.substring(0, 4) !== 'rgb(') {
        return false;
    }

    if (value.substring(value.length - 1) !== ')') {
        return false;
    }

    const pieces = value
        .toLowerCase()
        .replace('rgb(', '')
        .replace(')', '')
        .split(',')
        .map(piece => piece.trim());

    if (pieces.length <= 0 || pieces.length > 3) {
        return false;
    }

    const red = parseFloat(pieces[0]);
    const green = parseFloat(pieces[1]);
    const blue = parseFloat(pieces[2]);

    if (!Number.isInteger(red) || !Number.isInteger(green) || !Number.isInteger(blue)) {
        return false;
    }

    if (red < 0 || red > 255 || green < 0 || green > 255 || blue < 0 || blue > 255) {
        return false;
    }

    return true;
}

/**
 * Return whether the given value is a valid RGBA color code.
 */
const isValidRgba = (value: string): boolean => {
    if (value.substring(0, 5) !== 'rgba(') {
        return false;
    }

    if (value.substring(value.length - 1) !== ')') {
        return false;
    }

    const pieces = value
        .toLowerCase()
        .replace('rgba(', '')
        .replace(')', '')
        .split(',')
        .map(piece => piece.trim());

    if (pieces.length <= 0 || pieces.length > 4) {
        return false;
    }

    const red = parseFloat(pieces[0]);
    const green = parseFloat(pieces[1]);
    const blue = parseFloat(pieces[2]);
    const alpha = parseFloat(pieces[3]);

    if (!Number.isInteger(red) || !Number.isInteger(green) || !Number.isInteger(blue) || Number.isNaN(alpha)) {
        return false;
    }

    if (red < 0 || red > 255 || green < 0 || green > 255 || blue < 0 || blue > 255 || alpha < 0 || alpha > 1) {
        return false;
    }

    return true;
}

/**
 * Return whether the given value is a valid HTML color name.
 */
const isValidName = (value: string): boolean => {
    const colorNames = [
        'AliceBlue', 'AntiqueWhite', 'Aqua', 'Aquamarine', 'Azure',
        'Beige', 'Bisque', 'Black', 'BlanchedAlmond', 'Blue', 'BlueViolet', 'Brown', 'BurlyWood',
        'CadetBlue', 'Chartreuse', 'Chocolate', 'Coral', 'CornflowerBlue', 'Cornsilk', 'Crimson', 'Cyan',
        'DarkBlue', 'DarkCyan', 'DarkGoldenRod', 'DarkGray', 'DarkGrey', 'DarkGreen', 'DarkKhaki',
        'DarkMagenta', 'DarkOliveGreen', 'DarkOrange', 'DarkOrchid', 'DarkRed', 'DarkSalmon',
        'DarkSeaGreen', 'DarkSlateBlue', 'DarkSlateGray', 'DarkSlateGrey', 'DarkTurquoise',
        'DarkViolet', 'DeepPink', 'DeepSkyBlue', 'DimGray', 'DimGrey', 'DodgerBlue',
        'FireBrick', 'FloralWhite', 'ForestGreen', 'Fuchsia',
        'Gainsboro', 'GhostWhite', 'Gold', 'GoldenRod', 'Gray', 'Grey', 'Green', 'GreenYellow',
        'HoneyDew', 'HotPink',
        'IndianRed', 'Indigo', 'Ivory',
        'Khaki',
        'Lavender', 'LavenderBlush', 'LawnGreen', 'LemonChiffon', 'LightBlue', 'LightCoral',
        'LightCyan', 'LightGoldenRodYellow', 'LightGray', 'LightGrey', 'LightGreen', 'LightPink',
        'LightSalmon', 'LightSeaGreen', 'LightSkyBlue', 'LightSlateGray', 'LightSlateGrey',
        'LightSteelBlue', 'LightYellow', 'Lime', 'LimeGreen', 'Linen',
        'Magenta', 'Maroon', 'MediumAquaMarine', 'MediumBlue', 'MediumOrchid', 'MediumPurple',
        'MediumSeaGreen', 'MediumSlateBlue', 'MediumSpringGreen', 'MediumTurquoise',
        'MediumVioletRed', 'MidnightBlue', 'MintCream', 'MistyRose', 'Moccasin',
        'NavajoWhite', 'Navy',
        'OldLace', 'Olive', 'OliveDrab', 'Orange', 'OrangeRed', 'Orchid',
        'PaleGoldenRod', 'PaleGreen', 'PaleTurquoise', 'PaleVioletRed', 'PapayaWhip',
        'PeachPuff', 'Peru', 'Pink', 'Plum', 'PowderBlue', 'Purple',
        'RebeccaPurple', 'Red', 'RosyBrown', 'RoyalBlue',
        'SaddleBrown', 'Salmon', 'SandyBrown', 'SeaGreen', 'SeaShell', 'Sienna', 'Silver', 'SkyBlue',
        'SlateBlue', 'SlateGray', 'SlateGrey', 'Snow', 'SpringGreen', 'SteelBlue',
        'Tan', 'Teal', 'Thistle', 'Tomato', 'Turquoise',
        'Violet',
        'Wheat', 'White', 'WhiteSmoke',
        'Yellow', 'YellowGreen',
    ];

    return colorNames
        .map(color => color.toLowerCase())
        .includes(value.toLowerCase());
}

/**
 * Validate the given value, returning true if valid, or an error message if not.
 */
export const validateColor = (value: any): true|string => {
    if (typeof value === 'undefined') {
        return true;
    }

    if (
        isValidHex(value)
            ||
        isValidHsl(value)
            ||
        isValidHsla(value)
            ||
        isValidRgb(value)
            ||
        isValidRgba(value)
            ||
        isValidName(value)
    ) {
        return true;
    }

    return 'Color string is invalid. Valid color formats are prefixed hex code (3 or 6 character), RGB, RGBA, HSL, HSLA, or HTML color name.';
};
