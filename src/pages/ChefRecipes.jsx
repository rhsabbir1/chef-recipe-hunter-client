import React from 'react';
import { ListGroup } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ChefRecipes = ({ recipe }) => {

    const { recipe_name, recipe_img, methods_of_cookies, rating, ingredients } = recipe;


     const handleFavourite = () => toast("Add to Favourite!");
   
    return (

        <Card className='m-2'>

            <Card.Img variant="top" src={recipe_img} fluid />

            <Card.Body>
                <h4>{recipe_name}</h4>
                <Card.Text>
                    <span className='fw-bold'>Methods of cookies</span> : {methods_of_cookies}
                    <h5 className='mt-2'>Rating: {rating}</h5>
                    <h5 className='mt-2'>Ingredients</h5>
                    <ListGroup>
                        <ListGroup.Item>{ingredients.item1}</ListGroup.Item>
                        <ListGroup.Item>{ingredients.item2}</ListGroup.Item>
                        <ListGroup.Item>{ingredients.item3}</ListGroup.Item>
                        <ListGroup.Item>{ingredients.item4}</ListGroup.Item>
                        <ListGroup.Item>{ingredients.item5}</ListGroup.Item>
                        <ListGroup.Item>{ingredients.item6}</ListGroup.Item>
                        <ListGroup.Item>{ingredients.item7}</ListGroup.Item>
                        <ListGroup.Item>{ingredients.item8}</ListGroup.Item>
                    </ListGroup>
                    <button onClick={handleFavourite} className='btn btn-primary my-4'>Favourite</button>
                    <ToastContainer />
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default ChefRecipes;