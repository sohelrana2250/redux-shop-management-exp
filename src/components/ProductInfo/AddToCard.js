import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { productActionType } from '../REDUX/ActionType';

const AddToCard = () => {

    const state = useSelector((state) => state);

    console.log(state);

    const dispatch = useDispatch();

    return (
        <div>

            <h1>Add To Card List : {state.card.length}</h1>

            {
                state.card.sort((a, b) => a.id - b.id).map((v, index) => <div key={index} className=' m-3 col d-flex justify-content-center'>
                    <Card style={{ width: '30rem' }}>
                        <Card.Body>
                            <Card.Img variant="top" src={v.image} />
                            <Card.Title>{v.model}</Card.Title>
                            <Card.Text>Quentity : {v.quentity}</Card.Text>
                            <Card.Text className='fs-3'>
                                {v.rating}
                            </Card.Text>



                        </Card.Body>

                        <Button variant="outline-danger" onClick={() => dispatch({ type: productActionType.REMOVE_PRODUCT, payload: v })}> Remove</Button>
                    </Card>
                </div>)
            }


        </div>
    );
};

export default AddToCard;