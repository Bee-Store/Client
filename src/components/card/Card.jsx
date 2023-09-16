import { Carousel } from "@mantine/carousel";
import { useMediaQuery } from "@mantine/hooks";
import {
  createStyles,
  Paper,
  Text,
  Title,
  Button,
  useMantineTheme,
  rem,
} from "@mantine/core";
import { useEffect, useState } from "react";
import axios from "axios";

const useStyles = createStyles((theme) => ({
  card: {
    height: rem(440),
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    color: theme.white,
    lineHeight: 1.2,
    fontSize: rem(32),
    marginTop: theme.spacing.xs,
  },

  category: {
    color: theme.white,
    opacity: 0.7,
    fontWeight: 700,
    textTransform: "uppercase",
  },
}));

function Card({ image, name }) {
  const { classes } = useStyles();

  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      sx={{ backgroundImage: `url(${image})` }}
      className={classes.card}
    >
      <div>
        <Title order={3} className={classes.title}>
          {name}
        </Title>
      </div>
      <Button variant="white" color="dark">
        Add to cart
      </Button>
    </Paper>
  );
}

// const data = [
//   {
//     image:
//       "https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
//     title: "Best forests to visit in North America",
//     category: "nature",
//   },
//   {
//     image:
//       "https://plus.unsplash.com/premium_photo-1683309569303-2dfc02db98c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
//     title: "Hawaii beaches review: better than you think",
//     category: "beach",
//   },
//   {
//     image:
//       "https://images.unsplash.com/photo-1682687982502-1529b3b33f85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
//     title: "Mountains at night: 12 best locations to enjoy the view",
//     category: "nature",
//   },
//   {
//     image:
//       "https://images.unsplash.com/photo-1693333962626-4c8a65c530ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
//     title: "Aurora in Norway: when to visit for best experience",
//     category: "nature",
//   },
//   {
//     image:
//       "https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
//     title: "Best places to visit this winter",
//     category: "tourism",
//   },
//   {
//     image:
//       "https://images.unsplash.com/photo-1582721478779-0ae163c05a60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
//     title: "Active volcanos reviews: travel at your own risk",
//     category: "nature",
//   },
// ];

export default function ProductCard() {
  const [data, setData] = useState()
  useEffect(() => {
    axios
      .get("http://localhost:3000/products")
      .then((res) => {
        console.log(res.data)
        setData(res.data);
      })
      .catch((e) => console.error(e));
  }, []);
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = data && data.map((item, index) => (
    <Carousel.Slide key={index}>
      <Card {...item} />
    </Carousel.Slide>
  ));

  return (
    <Carousel
      slideSize="50%"
      breakpoints={[{ maxWidth: "sm", slideSize: "100%", slideGap: rem(2) }]}
      slideGap="xl"
      align="start"
      slidesToScroll={mobile ? 1 : 2}
    >
      {slides}
    </Carousel>
  );
}
