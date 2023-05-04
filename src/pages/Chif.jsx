
import { useEffect, useState } from 'react';

import Row from 'react-bootstrap/Row';
import ChefDetails from './ChefDetails';
import { Container } from 'react-bootstrap';

const Chif = () => {
    const [chefData, setChefData] = useState([])
    useEffect(() => {
        fetch('https://chif-recipy-server-side-rhsabbir1.vercel.app/chef')
            .then(res => res.json())
            .then(data => setChefData(data))
    }, [])
    return (
        <Container className='my-4'>
            <Row xs={1} md={2} className="g-4">

                {
                    chefData.map(chefDetail => <ChefDetails
                        key={chefDetail.id}
                        chefDetail={chefDetail}
                    ></ChefDetails>)
                }
            </Row>
        </Container>
    );
};

export default Chif;