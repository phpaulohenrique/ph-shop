import { globalCss, styled } from "./styles"

export const globalStyles = globalCss({
    "*": {
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
    },

    body: {
        "-webkit-font-smoothing": "antialiased",
        backgroundColor: "$gray100",
        color: "$gray800",
    },
    "body, input, textarea, button": {
        fontFamily: "Inter, sans-serif",
        fontWeight: 500,
    },

    "button:disabled": {
        opacity: 0.6,
        cursor: "not-allowed",
    },

    "button:not(:disabled):hover": {
        // backgroundColor: "$blue500",
        filter: "brightness(.8)",
        transition: "filter 0.2s",
    },
})

export const Wrapper = styled("div", {
    maxWidth: "1180px",
    margin: "0 auto",
    marginTop: "4rem",
    padding: "0 1rem",
})
