import React from 'react';
import MyStateButtons from './home/MyStateButtons';
import About from './About';
import EmployeeList from './employees/EmployeeList';
import EmployeeEdit from './employees/EmployeeEdit';
import Reddits from "./reddit/Reddits";
import NotFound from './404';
import MyMenu from './MyMenu';
import Footer from './Footer';
import Todos from './todosRedux/Todos'
import './custom.scss'; 
import {Container}  from 'reactstrap';
import {BrowserRouter, Switch, Route}  from 'react-router-dom';


//JSX Becomes React.createElement (name, attribute, contents)
export default class App extends React.Component
{
    render() {
        return (
            <BrowserRouter>
              <div>
                <MyMenu />
                <Container>
                    <Switch>
                        <Route exact path="/" component={MyStateButtons} />
                        <Route path="/about" component={About} />
                        <Route path="/list/add" component={EmployeeEdit} />
                        <Route path="/list/:id"  render={routeProps => 
                              <EmployeeEdit  {...routeProps} />}  />
                        <Route path="/list" component={EmployeeList} />
                        <Route path="/todos" component={Todos} />
                        <Route path="/reddits" component={Reddits} />
                        <Route component={NotFound} />
                    </Switch>
                    <Footer />
                </Container>
              </div>
            </BrowserRouter>
        );
    }
}