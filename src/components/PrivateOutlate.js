import React, { useContext } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router';
import { webContent } from '../App';

const PrivateOutlate = () => {
    const [user] = useContext(webContent);

    const location = useLocation();
    return (
        <div>
            {
                user ? <Outlet /> : <Navigate to='/login' state={{ from: location }} replace />
            }
        </div>
    );
};

export default PrivateOutlate;