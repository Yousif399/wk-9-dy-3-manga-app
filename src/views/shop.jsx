import { useContext } from "react";
import { DataContext } from "../context/DataProvider";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Button } from "react-bootstrap";
import '../css/shop.css'

// shop or cart doesn't matter
const Shop = () => {
    const { cart, setCart } = useContext(DataContext)

    const claerCart = () => {
        return setCart({ size: 0, total: 0, manga: {} });
    }
    const addItem = (id) => {
        let copyCart = { ...cart };
        console.log(copyCart)
        copyCart.size++;
        copyCart.total += Math.floor(copyCart.manga[id].data.price * 100) / 100
        // console.log('totallllla', copyCart.total)

        copyCart.manga[id].quantity++;
        setCart(copyCart);
    }
    const removeItem = (id) => {
        let copyCart = { ...cart };
        copyCart.size--;
        copyCart.total -= Math.floor(copyCart.manga[id].data.price * 100) / 100
        copyCart.manga[id].quantity > 1 ? copyCart.manga[id].quantity--
            : delete copyCart.manga[id]
        setCart(copyCart);
    }
    const deleteItem = (id) => {
        let copyCart = { ...cart };
        copyCart.size -= copyCart.manga[id].quantity
        copyCart.total -= Math.floor(copyCart.manga[id].quantity * copyCart.manga[id].price * 100) / 100;
        delete copyCart.manga[id]
        setCart(copyCart)

    }

    return (
        <>
            <h1>Welocme To My Shop:</h1>
            <div className="tot">{cart.total ?<h4>Total: {cart.total}</h4> :null }</div>
                
            <div >
                {Object.values(cart.manga).map((m, index) => {
                    return <Card className="container d-flex-justify-content-center" key={index} style={{ width: '28rem' }}>
                        <Card.Img variant="top" src={m.data.img} />
                        <Card.Body>
                            <Card.Title>{m.data.title}</Card.Title>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>{m.data.price}</ListGroup.Item>
                        </ListGroup>
                        <Card.Text className="span"> 
                            <span><Button className="remove-btn" variant="" onClick={() => removeItem(m.data.id)}>Remove</Button></span>
                            <span className="quan">{m.quantity}</span>
                            <span><Button className="add-btn" variant="" onClick={() => addItem(m.data.id)}>Add</Button></span>
                        </Card.Text>
                        <Card.Body >
                            <Button className="item" variant="" onClick={() => deleteItem(m.data.id)}>remove item</Button>
                        </Card.Body>
                        <div >
                            <Button className="buy-btn" variant="">Buy</Button>
                        </div>
                    </Card>
                })}

                {/* {Object.values(cart.total)} */}

                <Button className="clear-btn" variant="outline-danger" onClick={claerCart}>Clear cart</Button>

            </div>
        </>
    )
}

export default Shop;