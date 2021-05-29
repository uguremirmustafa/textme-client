import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Join = () => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  return (
    <div>
      <div>
        <h1>join</h1>
        <div>
          <input
            type="text"
            placeholder="name"
            onChange={(e) => setName(e.target.value)}
            name="name"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="room"
            onChange={(e) => setRoom(e.target.value)}
            name="room"
          />
        </div>
        <Link
          onClick={(e) => (!name || !room ? e.preventDefault() : null)}
          to={`/chat?name=${name}&room=${room}`}
        >
          sign in
        </Link>
      </div>
    </div>
  );
};

export default Join;
