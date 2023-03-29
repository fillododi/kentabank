import React from "react";
import {Container} from "@material-ui/core";
import {BrowserRouter, Switch, Route} from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Forum from "./components/Forum/Forum";

const App = () => {
    return <BrowserRouter>
        <Container maxWidth="lg">
            <Navbar/>
            <Switch>
                <Route path='/forum' exact><Forum/></Route>
                <Route path='/auth' exact></Route>
                <Route path='/'></Route>
            </Switch>
        </Container>
    </BrowserRouter>
}

export default App