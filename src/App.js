import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import './App.css';
import { Navbar, NavbarBrand } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import Footer from './components/Footer';
import Homepage from './pages/Homepage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

class App extends React.Component{

  constructor(props){
    super(props);
    this.state ={
      title: 'Nicky Sarah Mohan',
      headerLinks: [
        { title: 'Home', path: '/'},
        { title: 'About', path: '/about'},
        { title: 'Contact', path: '/contact'},

      ],
      home :{
        title : 'Project List',
        subtitle : 'Projects that made a difference',
        text :'Checkout my projects below'
      },
      about :{
        title : 'About Me'
      },
      contact :{
        title : 'Get in touch'
      }
    }
  }

  render(){
    return (
<Router>
  <Container fluid={true} className= "p=0">
      <Navbar className="border-bottom" bg= "transparent" expand= "lg">
        <NavbarBrand>
          Nicky Sarah Mohan
        </NavbarBrand>

        <NavbarToggle aria-controls ="navbar-toggle"></NavbarToggle>
        <NavbarCollapse id ="navbar-toggle">

          <Nav className="ml-auto">
            <Link className="nav-link" to="/"> Home </Link>
            <Link className="nav-link" to="/about"> About </Link>
            <Link className="nav-link" to="/contact"> Contact </Link>
          </Nav>
        </NavbarCollapse>
      </Navbar>

      <Route path="/" exact render ={() => <Homepage title ={this.state.home.title}
      subtitle ={this.state.home.subtitle}
      text ={this.state.home.text}/>}></Route>

      <Route path="/about" render ={()=> <AboutPage title={this.state.about.title}/>}></Route>

      <Route path="/contact" render ={() => <ContactPage title ={this.state.contact.title}/>}></Route>      <Footer/>
  </Container>
</Router>
      );
  };
  
}

export default App;
