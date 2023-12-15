const OverviewCard = ({ isDark, engage, media, amount, percent, type }) => {
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
      className={`flex flex-col gap-4 p-4 lg:w-[300px] bg-gray-100 hover:bg-gray-300 cursor-pointer transition duration-200 ${
        isDark && "dark"
      }`}
    >
      <div className="flex items-center justify-between">
        <p className="font-semibold text-gray-500">{engage}</p>
        <img src={`./assets/icon-${media}.svg`} alt={media} />
      </div>
      <div className="flex items-center justify-between">
        <p className="text-2xl font-semibold">
          {formatNumber(amount).toString()}
        </p>
        <div className="flex items-center gap-1">
          <img src={`./assets/icon-${type}.svg`} alt={type} />
          <span className="text-xs font-semibold text-green-400">
            {percent}%
          </span>
        </div>
      </div>
    </div>
  );
};

export default OverviewCard;
