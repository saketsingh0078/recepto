import React from "react";

const Progressbar = ({ total, rem, containerClass, barClass }) => {
  const unlockedPercentage = (rem / total) * 100;

  return (
    <div className={`w-[274.5px] h-[11.05px] rounded-[73.66px] ${barClass}`}>
      <div
        className={`w-[62.60px] h-full rounded-[73.66px]  ${containerClass}`}
        style={{ width: `${unlockedPercentage}%` }}
      />
    </div>
  );
};

export default Progressbar;
