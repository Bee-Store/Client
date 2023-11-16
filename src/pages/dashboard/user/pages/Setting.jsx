import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Button,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { useSelector } from "react-redux";

export default function Setting() {
  const userState = useSelector((state) => state.user);

  const form = useForm({
    initialValues: { oldPassword: "", newPassword: "", confirmNewPassword: "" },

    // functions will be used to validate values at corresponding key
    validate: {
      oldPassword: (value) =>
        value.length < 2 ? "Password must have at least 2 letters" : null,
      newPassword: (value) =>
        value.length < 6 ? "New Password must be at least 6" : null,
      confirmNewPassword: (value, values) =>
        value !== values.newPassword ? "Passwords did not match" : null,
    },
  });
  return (
    <Container size={420} my={40}>
      <Title ta="center" className="font-900">
        Update your credentials here!
      </Title>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <form
          onSubmit={form.onSubmit((values) => {
            console.log(values.oldPassword);
            fetch(`${import.meta.env.VITE_BASE_URL}auth/user`, {
              method: "POST",
              headers: {
                Authorization: `Bearer ${userState.access_token}`,
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                oldPassword: values.oldPassword,
                newPassword: values.newPassword,
              }),
            })
              .then((res) => res.json())
              .then((data) => {
                notifications.show({
                  title: "Success",
                  message: data.message,
                });
                if (data === "Token is not valid") {
                  notifications.show({
                    title: data,
                    message: "Token has expired, login to proceed.",
                  });
                  localStorage.clear();
                  navigate("/");
                  window.location.reload();
                }
              });
          })}
        >
          <PasswordInput
            label="Old Password"
            placeholder="Enter Your Current password"
            {...form.getInputProps("oldPassword")}
            required
            mt="md"
          />

          <PasswordInput
            label="New Password"
            placeholder="Enter Your New password"
            {...form.getInputProps("newPassword")}
            required
            mt="md"
          />

          <PasswordInput
            label="Confirm Your New Password"
            placeholder="Confirm Your New password"
            {...form.getInputProps("confirmNewPassword")}
            required
            mt="md"
          />
          <Button fullWidth mt="xl" className="bg-sky-600" type="submit">
            Update
          </Button>
        </form>
      </Paper>
    </Container>
  );
}
