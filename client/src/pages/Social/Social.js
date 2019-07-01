import React, { Fragment, useContext } from 'react';

import AuthContext from '../../context/AuthContext';

import Drawer from '../../components/Navigation/SocialDrawer';
import Friends from '../../components/Social/Home/FriendSideBar';
import Story from '../../components/Social/Story/Story';
import Timeline from '../../components/Social/Story/Timeline';

function Social() {

  const auth = useContext(AuthContext);

    return (
      <div className="container-fluid colp">
          <div className="row">
            <div className="col-12">
                <Drawer/>
            </div>
          </div>
          <div className="row">
            <div className="col-4">
                <Friends user={auth.user}/>
            </div>
            <div className="col-8">
                <Story />
                <Timeline />
            </div>
          </div>
      </div>
    );
}

export default Social;