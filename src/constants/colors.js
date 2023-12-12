export const themeOptions = {
  Blue: 'blue',
};

export const ThemeColors = {
  [themeOptions.Blue]: {
    white: 'rgb(255, 255, 255)',
    //primary colors
    primary: 'rgb(0, 85, 184)',
    primary70: 'rgb(58, 121, 194)',
    primary50: 'rgb(102, 149, 204)',
    primary40: 'rgb(129, 168, 214)',
    primary30: 'rgb(199, 216, 235)',
    primary10: 'rgb(233, 238, 245)',
    //secondary colors
    secondary: 'rgb(0, 85, 184)',
    secondary90: 'rgb(19, 100, 194)',
    secondary70: 'rgb(58, 121, 194)',
    secondary50: 'rgb(102, 149, 204)',
    secondary30: 'rgb(199, 216, 235)',
    secondary10: 'rgb(233, 238, 245)',
    //semantics
    information: 'rgb(42, 0, 249)',
    approved: 'rgb(119, 162, 30)',
    warning: 'rgb(255, 175, 11)',
    error: 'rgb(195, 0, 0)',
    // semantics -40
    neutral40: 'rgba(140, 138, 138, 0.4)',
    information40: 'rgb(175, 149, 255)',
    approved40: 'rgb(196, 220, 159)',
    warning40: 'rgb(255, 223, 147)',
    error40: 'rgb(244, 149, 151)',
    //overlay
    overlay: 'rgba(18, 18, 18, 0.85)',
    //shadow
    elevation: 'rgb(72, 95, 127)',
    //text colors
    text: 'rgb(18, 18, 18)',
    text70: 'rgb(57, 56, 56)',
    text50: 'rgb(113, 109, 109)',
    text40: 'rgb(140, 138, 138)',
    text30: 'rgb(205, 203, 203)',
  },
};

export const getTheme = (themeName = themeOptions.Blue) => {
  return ThemeColors[themeName];
};
