import '../App.scss'

const breakpoints = {
    mobile: "600px",
    tablet: "1000px",
    desktop: "1001px",
}

export const devices = {
    mobile: `(max-width: ${breakpoints.mobile})`,
    tablet: `(max-width: ${breakpoints.tablet})`,
    desktop: `(min-width: ${breakpoints.desktop})`,
}

export const colors = {
    black: "#222222",
    white: "#fefefe",
    ltWhite: "#F5F5F5",
    brown: "#711500",
    gray: "#756969",
    trGray: "#75696944",
    ltGray: "#DBD7DE",
    red: "#EE7070",
    brownAccent: "#FFDFD8"
}

export const values = {
    height: "100vh",
    width: "100%",
    wkHeight: "100em",
    wkWidth: "100em",
    radius: "50%",
    borderRadius: "1em",
    smallRadius: ".5em",
    text: "1em",
    smallText: ".5em",
    largeText: "2.5em",
    extraLargeText: "14em",
    font: 'Inter',
}