import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';


const ChefDetails = ({ chefDetail }) => {
    const { id, chef_Name, chef_Picture, years_of_experience, likes, numbers_of_recipes } = chefDetail;
    return (
        <Col>
            <Card>   
                    <Image src={chef_Picture} fluid  />
                
                <Card.Body>
                    <Card.Title>{chef_Name}</Card.Title>
                    <Card.Text>
                        <p>Numbers of recipes : {numbers_of_recipes}</p>
                        <p>Likes : {likes}</p>
                        <p>Nubber of Recipes : {numbers_of_recipes}</p>
                        <p>Years of Experience : {years_of_experience}</p>
                    </Card.Text>
                    <Link to={`/${id}`}><button>View Recipes</button></Link>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default ChefDetails;