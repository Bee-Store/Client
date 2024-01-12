import {
  Paper,
  TextInput,
  PasswordInput,
  Checkbox,
  Button,
  Title,
  Text,
  Anchor,
} from "@mantine/core";
import { IconX, IconCheck } from "@tabler/icons-react";
import { useForm } from "@mantine/form";
import classes from "./AuthenticationImage.module.css";
import Navbar from "../../../../components/navbar/navbar";
import { notifications } from "@mantine/notifications";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../../../features/login/loginSlice";
import { useNavigate } from "react-router";
import { fetchCart, syncCart } from "../../../../features/cart/cartSlice";

export default function AdminLogin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },
  });
  const Login = (values) => {
    fetch("http://localhost:5000/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: values.email, password: values.password }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.data) {
          dispatch(
            setUser({
              name: data.data.user.username,
              email: data.data.user.email,
              access_token: data.data.access_token,
              id: data.data.user._id,
              is_admin: data.data.user.isAdmin,
            })
          );
          notifications.show({
            title: "Login success",
            message: data.message,
            icon: <IconCheck />,
          });
          localStorage.removeItem("cart"); // Clear the local storage cart
          dispatch(syncCart()); // Sync the local storage cart with the backend after logging in
          navigate("/");
        } else {
          notifications.show({
            title: "Login Failed",
            color: "red",
            message: data.message,
            icon: <IconX />,
          });
        }
      })
      .catch((error) => console.error("Error:", error));
  };
  return (
    <div className={classes.wrapper}>
      <Navbar />
      <Paper className={classes.form} radius={0} p={30}>
        <form
          onSubmit={form.onSubmit((values) => Login(values))}
          className="mt-[5em]"
        >
          <Title
            order={2}
            className={classes.title}
            ta="center"
            mt="md"
            mb={50}
          >
            Welcome back to Mantine!
          </Title>

          <TextInput
            label="Email address"
            placeholder="hello@gmail.com"
            size="md"
            {...form.getInputProps("email")}
          />
          <PasswordInput
            label="Password"
            placeholder="Your password"
            mt="md"
            size="md"
            {...form.getInputProps("password")}
          />
          <button className="bg-blue-500 text-white py-1 px-10 rounded-md mt-[1em]" type="submit">
            Login
          </button>
        </form>

        {/* <Text ta="center" mt="md">
          Don&apos;t have an account?
          <Anchor href="#" fw={700} onClick={(event) => event.preventDefault()} ml={6}>
            Register
          </Anchor>
        </Text> */}
      </Paper>
    </div>
  );
}
