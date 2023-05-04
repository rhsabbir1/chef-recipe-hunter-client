import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div>
            <div className="card mb-3  my-4">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src="https://images.wsj.net/im-581988/M" className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Welcome Indian Food cafe</h5>
                            <p className="card-text">The challenge that restaurants have is that people come in, eat, pay, and leave. There’s little opportunity to build relationships and invite diners back.

                                That’s where texting comes in. When you collect phone numbers you have a connection to your customers that you can use to drive sales and increase customer lifetime value.

                                The most common way restaurants drive repeat business using phone numbers is by sending time-sensitive promotions that often lead to immediate sales. .</p>
                            <p className="card-text"><small className="text-muted"><Link>More details</Link></small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;