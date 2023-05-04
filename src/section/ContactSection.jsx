import React from 'react';

const ContactSection = () => {
    return (
        <div>
            <div className="card mb-3  my-4">
                <div className="row g-4">
                    <div className="col-md-4">
                        <img src="https://images.wsj.net/im-581988/M" className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <h4>Contact Us</h4>
                        <div className='w-50'>
                            <div class="mb-3">
                                <input type="email" class="form-control" placeholder='email'/>
                            </div>
                            <div class="mb-3">
                                <input type="text" class="form-control" id="Text" placeholder='Wright something ....'/>
                            </div>
                            
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactSection;