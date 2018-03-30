import React from 'react';
import { Link } from 'react-router-dom';

const header = () => {
    return (
        <header>
            <div>
                <Link to="/controlled"> controlled </Link>
                <Link to="/dashboard"> dashboard </Link>
                <Link to="/login"> Login </Link>
            </div>
        </header>
    );
};

export default header;