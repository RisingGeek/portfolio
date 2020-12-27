import React from "react";
import "./AchievementCard.css";
import * as Svg from '../../Svg';

export default function AchievementCard({ cardInfo, isDark }) {
  function openUrlInNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <div className={isDark ? "dark-mode certificate-card" : "open-source-card"}>
      <div className="repo-name-div">
        <Svg.Repo />
        <p className="repo-name">{cardInfo.repoName}</p>
      </div>
      <div className="repo-description"></div>
      <div className="certificate-card-footer">
        {cardInfo.footer.map((v, i) => {
          return (
            <span
              key={i}
              className={isDark ? "dark-mode certificate-tag" : "certificate-tag"}
              onClick={() => openUrlInNewTab(v.url)}
            >
              {v.name}
            </span>
          );
        })}
      </div>
    </div>
  );
}
