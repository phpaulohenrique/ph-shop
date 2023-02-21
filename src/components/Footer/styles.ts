import { styled } from "@/styles/styles"

export const FooterContainer = styled("footer", {
    width: "100%",
    // height: "6rem",
    // background: "blue",
    position: "absolute",
    bottom: 0,
    left: 0,
    borderTop: "1px solid $gray300",
    color: "$gray700",
    fontSize: "$xsm",

    backgroundColor: "$gray200",
    // background: "linear-gradient(0deg, rgba(195,219,255,1) 0%, rgba(240,243,255,1) 40%, rgba(241,241,241,1) 100%)",

    // maxWidth: "1180px",
    // margin: "0 auto",
    // marginTop: "8rem",
    padding: "1rem 1rem 4rem",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "1rem",
    flexDirection: "column",
})
