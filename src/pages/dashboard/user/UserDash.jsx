import { useState } from "react";
import { useNavigate } from "react-router";
import { Group, Code, Paper } from "@mantine/core";
import {
  IconFingerprint,
  IconKey,
  IconSettings,
  Icon2fa,
  IconDatabaseImport,
  IconReceipt2,
  IconLogout,
} from "@tabler/icons-react";
import classes from "./userdash.module.css";
import Orders from "./pages/Orders";
import Setting from "./pages/Setting";

const tabsData = [
  {
    label: "Oder",
    icon: IconReceipt2,
    content: <Orders />,
  },
  {
    label: "Profile",
    icon: IconSettings,
    content: <Setting />,
  },
];

export default function UserDash() {
  const navigate = useNavigate();
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
            <IconLogout className={classes.linkIcon} stroke={1.5} />
            <span
              onClick={() => {
                localStorage.clear();
                navigate("/");
                window.location.reload();
              }}
            >
              Logout
            </span>
          </a>
        </div>
      </nav>
      <div className={classes.tabContent}>
        <Paper className={classes.contentPaper}>{activeTabContent}</Paper>
      </div>
    </div>
  );
}
