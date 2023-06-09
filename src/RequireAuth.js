import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "./firebase.init";

export const RequireAuth = ({ children }) => {
    const [user] = useAuthState(auth);
    const location = useLocation();

    if (!user) {
        return <Navigate to='/signin' state={{ from: location }} replace></Navigate>
    }
    return children;
}
    ;
