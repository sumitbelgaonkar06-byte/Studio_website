import React, { useState } from 'react';

export default function TeamCard({ member }) {
  const [showBio, setShowBio] = useState(false);

  return (
    <div className="team-card">
      <div
        className="team-avatar-wrapper"
        onClick={() => setShowBio(!showBio)}
        title="Click to toggle bio"
      >
        <img
          src={member.image}
          alt={member.name}
          className="team-avatar-img"
          loading="lazy"
        />
      </div>

      <h3 className="team-name">{member.name}</h3>
      <span className="team-role">{member.role}</span>

      <p className="team-bio">
        {member.bio}
      </p>
    </div>
  );
}
