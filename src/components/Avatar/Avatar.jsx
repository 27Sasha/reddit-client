import React from 'react';
import './Avatar.css';
const AVATAR_URL = "https://ui-avatars.com/api/?background=ededed&color=3d5af1&bold=true&name=";

export default function Avatar(props) {
    return (
        <img
            src={`${AVATAR_URL}${props.name}`}
            alt={props.name}
            className="avatar-profile-image"
        />
    );
};