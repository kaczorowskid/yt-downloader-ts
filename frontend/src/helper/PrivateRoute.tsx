import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { config } from '../config';
import { useCurrentUser } from '../hooks/useCurrentUser'

interface PrivateRouteProps {
    path: RouteProps['path'];
    component: React.ElementType;
};

const PrivateRoute: React.FC<PrivateRouteProps> = ({ component: Component, ...rest }) => {

    const { login } = config.routerPath;
    const { state } = useCurrentUser();

    return (
        <>
            {!state.isLoading && < Route exact {...rest} render={(props) => (
                state.isLogged ? <Component {...props} /> : <Redirect to={login} />
            )} />}
        </>
    )

};

export default PrivateRoute;