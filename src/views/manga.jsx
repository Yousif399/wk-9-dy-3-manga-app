import { useContext, useEffect, useState, } from "react";
import axios from "axios";
import { Card } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import '../css/manga.css'
import { DataContext } from "../context/DataProvider";

const Manga = () => {
    useEffect(() => { console.log('shop has been rendered or re-rendered') });

    
    const getManga = async () => {
        let response = await axios.get('http://127.0.0.1:5000/api/manga');
        return response.status === 200 ? response.data : 'no data'
        
    }
    
    const loadManga = async () => {
        let data = await getManga();
        setManga(data.manga);
        
    }
    const [manga, setManga] = useState(() => loadManga());
    const {cart, setCart} = useContext(DataContext)

    const addManga = (manga) =>{
        // copy
        let copyCart = {...cart};
        // change copy
        copyCart.size ++;
        copyCart.total += Math.floor(manga.price * 100)/100
        // set state 
        copyCart.manga[manga.id] ?
        copyCart.manga[manga.id].quantity ++
        :
        copyCart.manga[manga.id] = {data : manga, quantity : 1}
        console.log(copyCart);
        setCart(copyCart);



    }

    return (
        <div>
            <h1>Here Are The Mangas I Have</h1>
            <div className="container  d-flex justify-content-cente">
                <div className="row">
                    {/* {console.log(manga)} */}
                    {manga && manga.length > 0 ? manga.map((m, index) => {
                        return <Card key={index} index={m.id} style={{ width: '35rem' }}>
                            <Card.Img className="img" variant="top" src={m.img} />
                            <Card.Body>

                                <Card.Title> Title: {m.title}</Card.Title>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item>Rating: {m.rating} <i className="fa-solid fa-star-half-stroke"></i></ListGroup.Item>
                                <ListGroup.Item>Type: {m.type} </ListGroup.Item>
                                <ListGroup.Item>Price: <i className="fa-solid fa-dollar-sign"></i> {m.price} </ListGroup.Item>
                            </ListGroup>
                            <Card.Body id="btns">
                                <Button className="add-btn" variant="outline-dark" onClick={() => addManga(m)} >ADD to Cart</Button>
                                <Button variant="outline-dark">Buy</Button>
                            </Card.Body>
                        </Card>

                    }) :
                        <Card className="text-center">

                            <Card.Body>
                                <Card.Title>WWHOPS !!!!  <i className="fa-solid fa-face-sad-tear"></i></Card.Title>
                                <Card.Text>
                                    LOADING ...... <i className="fa-solid fa-spinner"></i> LOADING .... <i className="fa-solid fa-spinner"></i>  STILL LOADING ..... <i className="fa-solid fa-spinner"></i>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    }
                </div>

            </div>
        </div>
    )
}

export default Manga;




{/* <Button variant="primary">Go somewhere</Button> */ }
{/* <Card.Footer className="text-muted">2 days ago</Card.Footer> */ }