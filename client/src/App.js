//import dependencies
import React from "react";
import {Container} from "@material-ui/core";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {GoogleOAuthProvider} from "@react-oauth/google";

//import components
import Navbar from "./components/Navbar/Navbar";
import Forum from "./components/Forum/Forum";
import Auth from "./components/Auth/Auth";

const App = () => {
    return <BrowserRouter>
        <Container maxWidth="lg">
            <Navbar/>
            <Switch>
                <Route path='/forum' exact><Forum/></Route>
                <Route path='/auth' exact>
                    <GoogleOAuthProvider clientId="218423465251-2nom4ohe7gfur3e6e0uh09uo9mcdun19.apps.googleusercontent.com">
                        <Auth/>
                    </GoogleOAuthProvider>
                </Route>
                <Route path='/'></Route>
            </Switch>
        </Container>
    </BrowserRouter>
}

export default App