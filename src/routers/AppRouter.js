import { firebase } from '../firebase/firebase-config';
import React, { useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import { JournalScreen } from '../components/journal/JournalScreen';
import { AuthRouter } from './AuthRouter';
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';


export const AppRouter = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user?.uid) {
                dispatch(login(user.uid, user.displayName));
            }
        });
    }, [dispatch]);

    return (
        <Router>
            <Switch>
                <Route exact path='/' component={JournalScreen} />
                <Route path='/auth' component={AuthRouter} />

                <Redirect to='/auth/login'/>
            </Switch>
        </Router>
    )
}
