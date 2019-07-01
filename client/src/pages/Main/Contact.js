import React from 'react';

import Drawer from '../../components/Navigation/Drawer';
import ContactForm from '../../components/Contact/ContactForm';

function Contact() {

    return (
        <div className="container-fluid marg colp">
            <div className="row marg colp">
                <div className="col-12 marg colp">
                    <Drawer contact="change" />
                </div>
            </div>
            <div className="row marg colp">
                <div className="col-12 marg colp">
                    <ContactForm />
                </div>
            </div>
        </div>
    );
}

export default Contact;