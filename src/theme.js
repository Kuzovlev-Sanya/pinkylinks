import { theme } from "@chakra-ui/core";

const pinkyPink = {
  ...theme,
  styles: {
    global: {
      "html, body": {
        color: "gray.900",
        background: "pink.100",
        fontFamily: "proxima-nova, arial, sans-serif"
      },
      a: {
        borderBottom: "1px solid",
        borderColor: "blackAlpha.300",
        color: "blue.700",
        _hover: {
          borderColor: "blackAlpha.700",
          textDecoration: "none"
        }
      }
    }
  },
  fonts: {
    ...theme.fonts,
    heading: "bressay, serif"
  },
  colors: {
    ...theme.colors,
    brand: {
      900: "#1a365d",
      800: "#153e75",
      700: "#2a69sac"
    },
    gray: {
      900: "#303030"
    },
    pink: {
      50: "#FFFBFB",
      100: "#FEF3F3",
      200: "#FEE7E7",
      300: "#FDDCDC",
      400: "#FDD0D0",
      500: "#FCC4C4",
      600: "#FCB8B8",
      700: "#FBABAB",
      800: "#FA8F8F",
      900: "#F75656"
    },
    blue: {
      50: "#EFF3FC",
      100: "#DFE7FA",
      200: "#BECFF4",
      300: "#9EB7EF",
      400: "#7DA0E9",
      500: "#5D88E4",
      600: "#3D70DE",
      700: "#235AD1",
      800: "#2154C2",
      900: "#1E4EB3"
    },
    gold: {
      600: "#C29B0C",
      700: "#AE8A0B"
    }
  }
};

export default pinkyPink;
