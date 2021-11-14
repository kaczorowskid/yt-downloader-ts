import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { config } from '../config';
import { useCurrentUser } from '../hooks/useCurrentUser';

interface PrivateRouteProps {
    path: RouteProps['path'];
    component: React.ElementType;
};

const PrivateRoute: React.FC<PrivateRouteProps> = ({ component: Component, ...rest }) => {

    const { home } = config.routerPath;
    const { state } = useCurrentUser();

    return (
        < Route exact {...rest} render={(props) => (
            state.isLogged ? <Redirect to={home} /> : <Component {...props} />
        )} />
    )

};

export default PrivateRoute;