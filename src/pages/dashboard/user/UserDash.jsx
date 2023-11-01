import { useState } from "react";
import { Group, Code, Paper } from "@mantine/core";
import {
  IconBellRinging,
  IconFingerprint,
  IconKey,
  IconSettings,
  Icon2fa,
  IconDatabaseImport,
  IconReceipt2,
  IconSwitchHorizontal,
  IconLogout,
} from "@tabler/icons-react";
import classes from "./userdash.module.css";

const tabsData = [
  {
    label: "Notifications",
    icon: IconBellRinging,
    content: "Content for Notifications",
  },
  { label: "Billing", icon: IconReceipt2, content: "Content for Billing" },
  { label: "Security", icon: IconFingerprint, content: "Content for Security" },
  { label: "SSH Keys", icon: IconKey, content: "Content for SSH Keys" },
  {
    label: "Databases",
    icon: IconDatabaseImport,
    content: <h1>Hello</h1>,
  },
  {
    label: "Authentication",
    icon: Icon2fa,
    content: "Content for Authentication",
  },
  {
    label: "Other Settings",
    icon: IconSettings,
    content: "Content for Other Settings",
  },
];

export default function UserDash() {
  const [activeTab, setActiveTab] = useState("Billing");

  const tabs = tabsData.map((item) => (
    <a
      className={classes.link}
      data-active={item.label === activeTab || undefined}
      key={item.label}
      onClick={() => setActiveTab(item.label)}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </a>
  ));

  const activeTabContent = tabsData.find(
    (tab) => tab.label === activeTab
  )?.content;

  return (
    <div className={classes.userDashboard}>
      <nav className={classes.navbar}>
        <div className={classes.navbarMain}>
          <Group className={classes.header} justify="space-between">
            <Code fw={700}>v3.1.2</Code>
          </Group>
          {tabs}
        </div>

        <div className={classes.footer}>
          <a
            href="#"
            className={classes.link}
            onClick={(event) => event.preventDefault()}
          >
            <IconSwitchHorizontal className={classes.linkIcon} stroke={1.5} />
            <span>Change account</span>
          </a>

          <a
            href="#"
            className={classes.link}
            onClick={(event) => event.preventDefault()}
          >
            <IconLogout className={classes.linkIcon} stroke={1.5} />
            <span>Logout</span>
          </a>
        </div>
      </nav>
      <div className={classes.tabContent}>
        <Paper className={classes.contentPaper}>{activeTabContent}</Paper>
      </div>
    </div>
  );
}
