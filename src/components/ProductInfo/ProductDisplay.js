import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { productActionType } from '../REDUX/ActionType';

const ProductDisplay = ({ product }) => {

    const {
        image, keyFeature, model, rating
    } = product;



    const dispatch = useDispatch();


    return (
        <div>

            <Col className='m-3'>
                <Card>

                    <Card.Body>

                        <Card.Img variant="top" src={image} />
                        <Card.Title className='fs-3'>
                            {model}
                        </Card.Title>



                        <Card.Text className='fs-4'>Product Rating : {rating}</Card.Text>
                        <Card.Text>
                            {
                                keyFeature.map((v, index) => <li key={index}>{v}</li>)
                            }
                        </Card.Text>

                    </Card.Body>
                    <Button variant="outline-danger" onClick={() => dispatch({ type: productActionType.ADD_TO_PRODUCT, payload: product })}> Add-to-Card</Button>

                </Card>

            </Col>

        </div>
    );
};

export default ProductDisplay;