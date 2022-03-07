/*eslint-disable*/
import { useState } from "react";
import SidebarComponent from "../component/SidebarComponent";

export default function SidebarContainer() {
  const [collapseShow, setCollapseShow] = useState("hidden");
  return (
    <SidebarComponent
      collapseShow={collapseShow}
      setCollapseShow={setCollapseShow}
    />
  );
}
