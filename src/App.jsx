import { Switch } from "antd";
import SocialCard from "./components/SocialCard";
import { useState } from "react";
import OverviewCard from "./components/OverviewCard";
import { social, overview } from "./utils/data";

const App = () => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = (checked) => {
    if (checked) setIsDark(true);
    else setIsDark(false);
    console.log(isDark);
  };

  return (
    <div className={`lg:relative ${isDark && "darkBg"} min-h-screen`}>
      <header
        className={`lg:flex items-center justify-between bg-slate-50 ${
          isDark && "dark"
        } lg:px-8 px-4 pt-8 lg:pb-32 pb-8 `}
      >
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold">Social Media Dashboard</h1>
          <p className="text-sm font-semibold text-gray-400">
            Total followers: 20,000
          </p>
        </div>
        <hr className="my-4 border-gray-500 lg:hidden" />
        <div className="flex justify-between gap-4">
          <p className="text-sm font-semibold text-gray-400">Dark Mode</p>
          <Switch onChange={toggleTheme} />
        </div>
      </header>
      <div
        className={`w-full p-4 h-fit lg:absolute lg:inset-y-28 ${
          isDark && "darkBg"
        }`}
      >
        <div className="flex flex-col flex-wrap justify-center gap-6 my-6 lg:flex-row">
          {social.map(({ media, handle, followers, visitors }, id) => (
            <SocialCard
              key={id}
              isDark={isDark}
              media={media}
              handle={handle}
              followers={followers}
              visitors={visitors}
            />
          ))}
        </div>
        <div className="my-12">
          <h2
            className={`my-6 text-2xl font-semibold lg:px-10 ${
              isDark && "text-white"
            }`}
          >
            Overview - Today
          </h2>
          <div className="flex flex-col flex-wrap justify-center gap-4 lg:flex-row">
            {overview.map(({ engage, media, amount, percent, type }, id) => (
              <OverviewCard
                key={id}
                isDark={isDark}
                engage={engage}
                media={media}
                amount={amount}
                percent={percent}
                type={type}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
