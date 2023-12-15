const SocialCard = ({ isDark, media, handle, followers, visitors }) => {
  const formatNumber = (num) => {
    if (num >= 10000) {
      const suffixes = ["", "k", "M", "B", "T"];
      const suffixNum = Math.floor(("" + num).length / 3);
      let shortValue = parseFloat(
        (suffixNum !== 0 ? num / Math.pow(1000, suffixNum) : num).toPrecision(2)
      );
      if (shortValue % 1 !== 0) {
        shortValue = shortValue.toFixed(1);
      }
      return shortValue + suffixes[suffixNum];
    }
    return num;
  };

  return (
    <div
      className={`flex flex-col bg-gray-100 w-full lg:w-[300px] h-64 gap-6 px-16 py-10 rounded-md border-t-4 border-blue-600 items-center justify-around hover:bg-gray-300 cursor-pointer transition duration-200 ${
        isDark && "dark"
      }`}
    >
      <div className="flex gap-2">
        <img src={`./assets/icon-${media}.svg`} alt={media} />
        <p className="text-sm font-semibold text-gray-500">{handle}</p>
      </div>
      <div>
        <p className="text-5xl font-bold tracking-wide text-center">
          {formatNumber(followers).toString()}
        </p>
        <p className="tracking-[0.25rem]">FOLLOWERS</p>
      </div>
      <div className="flex items-center gap-2">
        {media === "youtube" ? (
          <img src="./assets/icon-down.svg" alt="down" />
        ) : (
          <img src="./assets/icon-up.svg" alt="up" />
        )}
        <p
          className={`text-sm font-semibold ${
            media === "youtube" ? "text-red-500" : "text-green-500"
          }`}
        >
          {visitors} Today
        </p>
      </div>
    </div>
  );
};

export default SocialCard;
