import { Link } from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../css/manga.css'


function MyNav() {

    return (
        <>
            <div id='navbar'>
                <Navbar bg="" >

                    <Container >
                        <Link to="/" className="navbar-brand" >Navbar </Link>
                        <Nav className="me-auto">
                            <Link className="navbar-brand" to="/">Home</Link>
                            <Link className="navbar-brand" to="/manga">Manga</Link>
                            <Link className="navbar-brand" to="/shop">Shop</Link>
                        </Nav>
                    </Container>

                </Navbar>
            </div>
        </>
    )
}

export default MyNav;

