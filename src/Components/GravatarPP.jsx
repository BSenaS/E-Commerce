import React from "react";
import md5 from "md5";
export const GravatarPP = ({ email }) => {
  const emailHash = md5(email.trim().toLowerCase());

  //Gravatar url
  const gravatarUrl = `https://www.gravatar.com/avatar/${emailHash}`;

  return (
    <div>
      <img
        src={gravatarUrl}
        alt="Gravatar"
        style={{ borderRadius: `50%`, width: 35, height: 35 }}
      />
    </div>
  );
};
