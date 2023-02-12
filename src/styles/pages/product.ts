import { styled } from "../styles"

export const ProductContainer = styled("main", {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    // alignItems: "stretch",
    gap: "2rem",

    // maxWidth: 1180,
    // margin: "0 auto",
    // background: "blue",
})

export const ImageContainer = styled("div", {
    width: "100%",
    // maxWidth: 576,
    // height: 356,
    borderRadius: 8,
    // background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100% )",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",

    img: {
        objectFit: "cover",
        borderRadius: 8,
    },
})

export const ImagesCarousel = styled("div", {
    width: "100%",
    // border: "1px solid blue",
    marginTop: "1rem",
    display: "flex",
    gap: "1rem",
})
export const ProductDetails = styled("div", {
    display: "flex",
    flexDirection: "column",

    h1: {
        fontSize: "$2xl",
        color: "$gray700",
        fontWeight: "400",
    },

    span: {
        marginTop: "1rem",
        display: "block",
        fontSize: "$2xl",
        color: "$green500",
        fontWeight: "bold",
    },
    p: {
        marginTop: "2.5rem",
        color: "$gray700",
        fontSize: "$sm",
        lineHeight: 1.6,
    },

    button: {
        marginTop: "auto",
        backgroundColor: "$blue300",
        border: 0,
        color: "$white",
        borderRadius: 6,
        padding: ".8rem",
        cursor: "pointer",
        fontWeight: "500",
        fontSize: "$sm",
        width: "10rem",

        // "&:disabled": {
        //     opacity: 0.5,
        //     cursor: "not-allowed",
        // },

        // "&:not(:disabled):hover": {
        //     backgroundColor: "$blue500",
        //     transition: "background 0.2s",
        // },
    },
})

// export const TextOldPrice = styled("span", {
//     marginTop: "1rem",
//     display: "block",
//     fontSize: "$sm",
//     color: "$gray500",
//     fontWeight: "400",
// })

export const ContainerPrice = styled("div", {
    // display: 'flex',
    // alignItems: 'center',

    p: {
        marginTop: "1rem",
        display: "block",
        fontSize: "$sm",
        color: "$gray500",
        fontWeight: "400",
        textDecoration: "line-through",
    },

    span: {
        marginTop: ".4rem",
        display: "block",
        fontSize: "$2xl",
        color: "$green500",
        fontWeight: "bold",
    },
})
