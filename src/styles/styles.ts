import { createStitches } from "@stitches/react"

export const { styled, getCssText, globalCss } = createStitches({
    theme: {
        colors: {
            white: "#FFF",
            gray900: "#262626",
            gray800: "#202024",
            gray700: "#505050",
            gray500: "#545454",
            gray300: "#c4c4cc",
            gray200: "#e1e1e6",
            gray100: "#F1F1F1",

            green500: "#00B44E",
            green300: "#00b37e",

            blue300: "#0573b3",
            blue500: "#024d78",
        },
        fontSizes: {
            xsm: ".8rem",
            sm: "1rem",
            md: "1.125rem",
            lg: "1.25rem",
            xl: "1.5rem",
            "2xl": "2rem",
        },
    },
})
