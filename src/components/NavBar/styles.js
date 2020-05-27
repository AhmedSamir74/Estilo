import { createStyles } from "@material-ui/core";
import { COLORS } from "../../constants";

export const styles = createStyles({
  navIcon: {
    margin: "0px 6px",
    position: 'relative'
  },
  sliderCont: {
    height: 100,
    overflow: 'hidden',
    backgroundColor: COLORS.primary,
    display: 'flex',
    position: 'relative'
  }
});

export const definedStyles = createStyles({
  screen: {
    height: 270,
    color: COLORS.white,
    backgroundImage: `url(${require('../../assets/navbarContImg.jpg')})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingBottom: 15
  },
  img: {
    height: "100%",
    width: "100%",
  },
  loginLink: {
    color: COLORS.primary,
  },
});
