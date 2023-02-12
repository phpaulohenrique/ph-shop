import { styled } from "../styles"

export const Container = styled("div", {
    // maxWidth: "1180px",
    // margin: "0 auto",
    // marginTop: "4rem",

    display: "grid",
    gridTemplateColumns: "200px 1fr",
    gap: "2rem",
})

export const ContainerProducts = styled("main", {
    // backgroundColor: "gray",
    display: "flex",
    gap: "3rem",
    flexWrap: "wrap",

    a: {
        textDecoration: "none",
    },
})
