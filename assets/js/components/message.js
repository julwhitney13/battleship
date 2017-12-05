// Referenced https://medium.freecodecamp.org/lets-build-a-react-chatroom-component-ed353982d826
import React from 'react';

const Message = ({content}) => (
    <li>
        {content.user}: {content.text}
    </li>
);

export default Message;
