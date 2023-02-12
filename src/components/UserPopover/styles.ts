import { styled } from "@/styles/styles"
import * as Popover from "@radix-ui/react-popover"

export const Container = styled("div", {
    // marginTop: "1rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: ".6rem",

    span: {
        marginBottom: ".2rem",
        fontSize: "sm",
    },

    a: {
        width: "100%",
        textDecoration: "none",
    },

    button: {
        // marginTop: "2rem",
        backgroundColor: "transparent",
        color: "$blue300",
        borderRadius: 4,
        padding: ".4rem",
        cursor: "pointer",
        fontWeight: "500",
        fontSize: "$xsm",
        // height: "2.4rem",
        width: "100%",
        border: "1px solid $blue300",

        display: "flex",
        alignItems: "center",
        // justifyContent: "center",
        gap: "0.4rem",
        textDecoration: "none",

        svg: {
            width: "1.6rem",
            height: "1.6rem",
            weight: "thin",
        },
    },
})

export const PopoverTrigger = styled(Popover.Trigger, {
    // borderBottom: "1px solid red",
    // background: "red",
    border: 0,
})

export const PopoverContent = styled(Popover.Content, {
    // borderBottom: "1px solid red",
    // background: "red",
    minWidth: "180px",
    padding: ".8rem .6rem",
    borderRadius: 8,
    border: "2px solid $gray300",
    background: "$gray200",

    // position: "relative",
})

export const PopoverClose = styled(Popover.Close, {
    position: "absolute",
    right: ".6rem",
    top: ".5rem",

    border: 0,
    background: "transparent",

    // "&:hover": {
    //     cursor: "pointer",
    //     filter: "brightness(.8)",
    //     transition: "filter 0.2s",
    // },
})
