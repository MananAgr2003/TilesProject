import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import banner from "../assets/banner4.png";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    background: `url(${banner})`,
    backgroundSize: "100% 100%",
    color: "#FFFFFF",
    padding: "50px 0",

    marginTop: "80px",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },

  heading: {
    fontWeight: "semi-bold",
    marginBottom: "25px",
    fontFamily: "montserrat",
    position: "relative",
    left: "5rem",

    fontWeight: "bold",
    filter: "brightness(100%)",
  },
  link: {
    fontWeight: "bold",

    color: "#FFFFFF",
    marginBottom: "15px",
    fontFamily: "montserrat",

    filter: "brightness(100%)",
    cursor: "pointer",
    textDecoration: "none",
  },
  Link: {
    fontWeight: "bold",

    color: "#FFFFFF",
    marginBottom: "15px",
    fontFamily: "montserrat",

    filter: "brightness(100%)",
    cursor: "pointer",
    textDecoration: "none",
  },
  links: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
    left: "5rem",
  },
}));

const handleClick = (index) => {
  console.log(index);
};

const Footer = () => {
  const classes = useStyles();

  const elements = [
    {
      heading: "Company Info",
      options: ["Site Map", "Catalouge", "We Are Hiring", "Blog"],
    },
    {
      heading: "Legal",
      options: ["We Are Hiring", "Career", "Blog", "About Us"],
    },
    {
      heading: "Features",
      options: [
        "Buisness Marketing",
        "User Analytics",
        "Live Chat",
        "Unlimited Support",
      ],
    },
    {
      heading: "Resources",
      options: ["IOS & Android", "Watch A Demo", "Customers", "API"],
    },
    {
      heading: "Get In Touch",
      options: [
        "(480) 555-0103",
        "4517 Washington Ave. Manchester, Kentucky 39495",
        "debra.holt@example.com ",
      ],
    },
  ];

  return (
    <footer className={classes.root}>
      <Container>
        <Grid container spacing={4}>
          {elements.map((element, index) => (
            <Grid item xs={12} sm={2} key={index}>
              <Typography className={classes.heading}>
                {element.heading}
              </Typography>
              <div className={classes.links}>
                {element.options.map((option, index) => (
                  <div>
                    {option === "Site Map" ? (
                      <Link
                        to="/sitemap"
                        className={classes.Link}

                      >
                        <p
                          key={index}
                          onClick={handleClick(index)}
                          className={classes.link}
                        >
                          {option}
                        </p>
                      </Link>
                    ) : option === "Catalouge" ? (
                      <Link
                      to="/catalouge"
                      className={classes.Link}

                    >
                      <p
                        key={index}
                        onClick={handleClick(index)}
                        className={classes.link}
                      >
                        {option}
                      </p>
                    </Link>
                    ) : (
                      <p
                        href="#"
                        key={index}
                        onClick={handleClick(index)}
                        className={classes.link}
                        sx={{
                          filter: "brightness(100%)",
                        }}
                      >
                        {option}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
