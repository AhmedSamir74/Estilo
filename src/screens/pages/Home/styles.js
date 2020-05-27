import { createStyles } from "@material-ui/core";
import { COLORS } from "../../../constants";

export default createStyles({
  screen: {
    flex: 1,
  },
  navbarCont: {
    height: 300,
    overflow: "hidden",
    color: COLORS.white,
  },
  img: {
    height: "100%",
    width: "100%",
  },
});
