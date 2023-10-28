import React, { useState, useEffect } from "react";
import { Text, Avatar, Group } from "@mantine/core";

export default function GetInTouch() {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_BASE_URL}contact`)
      .then((res) => res.json())
      .then((data) => setMessages(data.data));
  }, []);

  return (
    <div className="mt-7 ml-12">
      {messages &&
        messages.map((message, index) => {
          return (
            <div key={index}>
              <Group>
                <Avatar
                  src="https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80"
                  alt="Jacob Warnhalter"
                  radius="xl"
                />
                <Text size="sm">{message.name}</Text>
                <Text size="xs" c="dimmed">
                  {message.email}
                </Text>
              </Group>
              <Text pl={54} pt="sm" size="xl">
                {message.topic}
              </Text>
              <Text pl={54} pt="sm" size="sm">
                {message.message}
              </Text>
            </div>
          );
        })}
    </div>
  );
}
