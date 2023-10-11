import {
  Paper,
  Title,
  Text,
  TextInput,
  Button,
  Container,
  Group,
  Anchor,
  Center,
  Box,
  rem,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { IconArrowLeft, IconX } from "@tabler/icons-react";
import classes from "./ForgotPassword.module.css";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import { notifications } from "@mantine/notifications";
import { useNavigate } from "react-router";
import axios from "axios";

export default function ForgotPassword() {
  const navigate = useNavigate()
  const form = useForm({
    initialValues: { email: "" },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  const submitForm = () => {
    const formItem = new FormData();

    formItem.append("email", form.values.email);

    if (form.validate().hasErrors === true) {
      for (const [key, value] of Object.entries(form.validate().errors)) {
        notifications.show({
          title: `Invalid ${key}`,
          message: `${value}🤥`,
          color: "red",
          autoClose: 2000,
          icon: <IconX />,
        });
      }
    }

    axios({
      method: "post",
      url: `${import.meta.env.VITE_BASE_URL}auth/forgot/password`,
      data: {
        email: form.values.email,
      },
    })
      .then((res) => {
        console.log(res.data.message);
        notifications.show({
          title: `Success`,
          message: `${res.data.message}`,
          autoClose: 2000,
        });
        navigate("/forgot/reset");
      })
      .catch((error) => {
        notifications.show({
          title: `${error.response.data.message}`,
          message: `Check if you entered the correct information🤥`,
          color: "red",
          autoClose: 2000,
          icon: <IconX />,
        });
      });
  };

  return (
    <>
      <Navbar />
      <Container size={460} mt={200} mb={50}>
        <Title className={classes.title} ta="center">
          Forgot your password?
        </Title>
        <Text c="dimmed" fz="sm" ta="center">
          Enter your email to get a reset link
        </Text>

        <Paper withBorder shadow="md" p={30} radius="md" mt="xl">
          <form onSubmit={form.onSubmit((values) => values)}>
            <TextInput
              label="Your email"
              placeholder="me@mantine.dev"
              {...form.getInputProps("email")}
              required
            />

            <Button
              className={classes.control}
              style={{
                backgroundColor: "blue",
              }}
              mt={10}
              type="submit"
              onClick={submitForm}
            >
              Reset password
            </Button>
          </form>

          <Group justify="space-between" mt="lg" className={classes.controls}>
            <Anchor c="dimmed" size="sm" className={classes.control}>
              <Center inline>
                <IconArrowLeft
                  style={{ width: rem(12), height: rem(12) }}
                  stroke={1.5}
                />
                <Box ml={5}>Back to the login page</Box>
              </Center>
            </Anchor>
          </Group>
        </Paper>
      </Container>
      <Footer />
    </>
  );
}
