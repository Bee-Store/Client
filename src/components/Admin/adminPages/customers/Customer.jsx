// import { Group, Text } from "@mantine/core";
import React, { useEffect, useState } from "react";
import { Avatar, Text, Button, Paper } from "@mantine/core";

export default function Customer() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BASE_URL}auth`)
      .then((res) => res.json())
      .then((data) => setUsers(data.data));
  }, []);

  return (
    <div className="mt-7 ml-12">
      <h1>This is where users will be displayed</h1>
      {users &&
        users.map((user, index) => {
          console.log(user);
          return (
            <div key={index}>
              <Paper
                radius="md"
                withBorder
                p="lg"
                bg="var(--mantine-color-body)"
              >
                <Avatar
                  src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80"
                  size={120}
                  radius={120}
                  mx="auto"
                />
                <Text ta="center" fz="lg" fw={500} mt="md">
                  {user.username}
                </Text>
                <Text ta="center" c="dimmed" fz="sm">
                  {user.email}
                </Text>
                <Text ta="center" c="dimmed" fz="sm">
                  {`0${user.phoneNumber}`}
                </Text>
              </Paper>
            </div>
          );
        })}
    </div>
  );
}
