// // if
// console.log(localStorage.getItem('color-theme') === 'dark');
// // is TRUE
// // or
// console.log(!('color-theme' in localStorage));
// // and
// console.log(window.matchMedia('(prefers-color-scheme: dark)').matches);
// // is TRUE
// // else we are on Dark Theme in a browser
// console.log(!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);


// if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
//     document.documentElement.classList.add('dark');
//     console.log(document.documentElement.classList)
// } else {
//     document.documentElement.classList.remove('dark')
//     console.log(document.documentElement.classList)
// }

const COLORS = {
    purplePerso: "#d400ff83",
    turquoisePerso: "#04c4b483",
    greyPerso: "#737373",
    darkGreenPerso: "#008a7e"
}

const FONTS = {
    myFont: 'PM'
}

const SCREENS = {
    "w-256": '256px',
    // => @media (min-width: 256px) { ... }
}

const PADDING = {
    PP: '5px 10px 10px;',
    pr5px: '0 10px 0 0;',
}

tailwind.config = {
    theme: {
        extend: {
            colors: COLORS,
            fontFamily: FONTS,
            screens: SCREENS,
            padding: PADDING
        }
    }
}