import { useEffect } from "react";
import { themeChange } from "theme-change";
import { BiMoon, BiSun } from "react-icons/bi";

export default function TopBar() {
  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);
  return (
    <div className="navbar shadow-md justify-between">
      <span className="font-extrabold leading-tight tracking-wide text-2xl">
        Where in the world?
      </span>
      <div className="flex gap-3">
        <button data-set-theme="halloween" data-act-class="text-primary">
          <BiMoon className="text-2xl" />
        </button>

        <button data-set-theme="light" data-act-class="text-primary">
          <BiSun className="text-2xl" />
        </button>
      </div>
    </div>
  );
}
