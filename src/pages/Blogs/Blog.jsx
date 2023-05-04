import React from 'react';
import './Blog.css'
import { Container } from 'react-bootstrap';

const Blog = () => {
    return (
        <div className='blog-page'>
            <Container className='my-4'>
                <h4> 1 .In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally</h4>
                <h4> 2 .PropTypes.bool : The prop should be a Boolean.
                    PropTypes.number : The prop should be a number.
                    PropTypes.string : The prop should be a string.
                    PropTypes.func : The prop should be a function.
                    PropTypes.array : The prop should be an array.</h4>
                    <h4>3. NodeJS is the package, which provides the JavaScript run-time environment, whereas Express is a framework that sits on top of NodeJS and helps us to handle requests and responses</h4>
                    <h4>4. Custom React JS hooks offer reusability as when a custom hook is created, it can be reused easily, which makes the code cleaner and reduces the time to write the code. It also enhances the rendering speed of the code as a custom hook does not need to be rendered again and again while rendering the whole code</h4>
            </Container>
        </div>
    );
};

export default Blog;