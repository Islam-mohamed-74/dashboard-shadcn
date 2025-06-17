"use client";
import React from "react";
import {
  AlertCircle,
  Archive,
  ArchiveX,
  ArrowRight,
  File,
  Inbox,
  MessagesSquare,
  Search,
  Send,
  ShoppingCart,
  Trash2,
  Users2,
} from "lucide-react";
import { Nav } from "./Nav";
import { Button } from "./button";
import {
  useWindowSize,
  useWindowWidth,
  useWindowHeight,
} from "@react-hook/window-size";
export default function SideNavbar() {
  const [isCollapsed, setIsCollapsed] = React.useState(false);
  const toggleCollapsed = () => setIsCollapsed(!isCollapsed);
  const onlyWidth = useWindowWidth();

  const mobile = onlyWidth < 768;

  return (
    <div className="relative min-w-[80px] border-r px-5 pb-10 pt-24">
      {!mobile && (
        <div className="absolute right-[-20px] top-7 ">
          <Button
            variant="secondary"
            className={"rounded-full p-2 cursor-pointer"}
            onClick={toggleCollapsed}
          >
            <ArrowRight />
          </Button>
        </div>
      )}
      <Nav
        isCollapsed={mobile ? true : isCollapsed}
        links={[
          {
            title: "Dashboard",
            href: "/",
            label: "128",
            icon: Inbox,
            variant: "default",
          },
          {
            title: "Users",
            href: "/users",
            label: "9",
            icon: File,
            variant: "ghost",
          },
          {
            title: "Orders",
            href: "/orders",
            label: "",
            icon: Send,
            variant: "ghost",
          },
          {
            title: "Settings",
            href: "/settings",
            label: "23",
            icon: ArchiveX,
            variant: "ghost",
          },
        ]}
      />
    </div>
  );
}
