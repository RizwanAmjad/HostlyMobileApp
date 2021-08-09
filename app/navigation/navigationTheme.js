import { DefaultTheme } from "@react-navigation/native";
import colors from "../config/colors";

const customTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: colors.background,
  },
};

export default customTheme;
