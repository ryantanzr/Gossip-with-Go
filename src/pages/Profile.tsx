import { Button } from "@mui/material";
import { Link } from "react-router-dom";

import ButtonStack from "../components/ButtonStack";
import React, { useState } from "react";

const Profile: React.FC = () => {
    const [user] = useState({
        userName: 'Lorem',
        userID: '000'
    });

    return (
        <>            
            <ButtonStack/>
            <h1> {user.userName} </h1>
            <p> <i> uid: {user.userID} </i></p>

        </>
    );
};

export default Profile;
