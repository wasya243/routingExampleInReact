import React, {Component} from 'react';
import {Link, Route, Switch} from 'react-router-dom';

/* Home component */
const Home = () => (
    <div>
        <h2>Home</h2>
    </div>
);

/* Category component */
const Category = () => (
    <div>
        <h2>Category</h2>
    </div>
);

class A extends Component {
    render() {
        return (
            <div>
                <h2>2</h2>
            </div>
        );
    }
}

/* Products component */
const Products = () => (
    <div>
        <A/>
    </div>
);

const Header = () => (
    <nav className="navbar navbar-light">
        <ul className="nav navbar-nav">
            <li><Link to="/">Homes</Link></li>
            <li><Link to="/category">Category</Link></li>
            <li><Link to="/products">Products</Link></li>
        </ul>
    </nav>
);

const Footer = () => (
    <div>Footer</div>
);

const Main = () => (
    <div>
        <Route path="/" component={Home}/>
        <Route path="/category" component={Category}/>
        <Route path="/products" component={Products}/>
    </div>
);



class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Main/>
                <Footer/>
            </div>
        );
    }
}

export default App;
