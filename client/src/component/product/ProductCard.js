import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { getoneproduct } from '../../JS/actions/productaction';
const ProductCard = ({prd}) => {

  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={prd.img} style={{width:"250px" ,heigth:"350px"}}/>
    <Card.Body>
      <Card.Title> {prd.name}</Card.Title>
      <Card.Text>
        {prd.price} dt
      </Card.Text>
      <Card.Text>
        {prd.qtes || "non disponible" } 
      </Card.Text>
      <Link to={`/${prd._id}`}>
      <Button 
      variant="primary">See details</Button> 
      </Link>
    </Card.Body>
  </Card>
  )
}

export default ProductCard