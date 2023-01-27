import React, { useEffect, useState } from 'react';
import ProductDisplay from './ProductDisplay'
import { Row } from 'react-bootstrap';


const ProductFetch = () => {


    const [product, setProduct] = useState([]);




    useEffect(() => {

        fetch('productData.json').then((res) => res.json()).then((data) => {
            setProduct(data)
        }).catch((error) => {
            console.log(error.message)
        })

    }, [])


    return (
        <div>

            <h1>Product-List : {product.length}</h1>

            <Row xs={12} lg={3} md={2}>

                {
                    product.map((v, index) => <ProductDisplay key={index} product={v}></ProductDisplay>)

                }

            </Row>

        </div>
    );
};

export default ProductFetch;