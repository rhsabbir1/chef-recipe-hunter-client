import React from 'react';
import { Container, Image } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import ChefRecipes from './ChefRecipes';
import CardGroup from 'react-bootstrap/CardGroup'

const ViewRecipes = () => {
    const chifAllData = useLoaderData()
    const { recipes, chef_Name, chef_Picture, years_of_experience, likes, numbers_of_recipes } = chifAllData;
    console.log(chifAllData)

    return (
        <div>
            <Container className='my-4 d-flex'>
                <div>
                    <Image src={chef_Picture} fluid />
                </div>
                <div className='ms-4'>
                    <h4>{chef_Name}</h4>
                    <p>Numbers of recipes : {numbers_of_recipes}</p>
                    <p>Likes : {likes}</p>
                    <p>Nubber of Recipes : {numbers_of_recipes}</p>
                    <p>Years of Experience : {years_of_experience}</p></div>
            </Container>

            <Container>
                <CardGroup>
                    {
                        recipes.map(recipe => <ChefRecipes
                            key={recipe.id}
                            recipe={recipe}
                        ></ChefRecipes>)
                    }
                </CardGroup>
            </Container>
        </div>
    );
};

export default ViewRecipes;