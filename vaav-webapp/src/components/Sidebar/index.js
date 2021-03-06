import React from 'react'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { auth } from '../../firebase/firebase.utils';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { 
  SidebarContainer,  
  Icon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute
} from './SidebarElements'

const Sidebar = ({isOpen, toggle, currentUser}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
      <FontAwesomeIcon icon={faTimes} color='white' />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink  to="about" onClick={toggle}>
            About Us
          </SidebarLink>
          <SidebarLink  to="product" onClick={toggle}>
            Product
          </SidebarLink>
          <SidebarLink  to="partner" onClick={toggle}>
            Partner With Us
          </SidebarLink>
          <SidebarLink  to="contact" onClick={toggle}>
            Contact Us
          </SidebarLink>
          {
            currentUser ?
              null
            :
              <SidebarLink  to="signup" onClick={toggle}>
                Sign Up
              </SidebarLink>
          }
        </SidebarMenu>
        <SideBtnWrap>
          {
            currentUser ?
              <SidebarRoute to='/'  onClick={() => auth.signOut()}>
                Sign Out
              </SidebarRoute>
            :
              <SidebarRoute to="/signin" onClick={toggle}>
                Sign In
              </SidebarRoute>
          }
        </SideBtnWrap>
      </SidebarWrapper>
      
      
    </SidebarContainer>
  )
}

const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser
})

export default connect(mapStateToProps)(Sidebar);
