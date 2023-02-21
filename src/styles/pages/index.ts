import { styled } from "../styles"

export const Container = styled("div", {
    // maxWidth: "1180px",
    // margin: "0 auto",
    // marginTop: "4rem",

    display: "grid",
    gridTemplateColumns: "200px 1fr",
    gap: "2rem",

    "@bp1": {
        gridTemplateColumns: " 1fr",
        justifyContent: "center",
    },
})

export const ContainerProducts = styled("main", {
    // backgroundColor: "gray",
    display: "flex",
    gap: "2rem",
    flexWrap: "wrap",

    a: {
        textDecoration: "none",
    },

    "@bp1": {
        justifyContent: "center",
    },
})
