// import React from 'react'
// import PropTypes from 'prop-types'
// import {connect} from 'react-redux'

// /**
//  * COMPONENT
//  */
// export const UserHome = props => {
//   const {email} = props

//   return (
//     <div>
//       <h3>Welcome, {email}</h3>
//     </div>
//   )
// }

// /**
//  * CONTAINER
//  */
// const mapState = state => {
//   return {
//     email: state.user.email
//   }
// }

// export default connect(mapState)(UserHome)

// /**
//  * PROP TYPES
//  */
// UserHome.propTypes = {
//   email: PropTypes.string
// }


import React from 'react';
import Navbar from './navbar';

const Home = () => {

  return (
  <div>
    <p>
      Hello! We are _____ . Thank you for taking us shopping with you. We are here to help guide you toward making valuable consumer choices that benefit the community and world around you. That way you can shop with a piece of mind knowing where your hard earned money is going and with satisfaction that you are an informed consumer.
      A couple of pointers along the way. As you shop we will be right there with you, giving you a thumbs up or down based on the companies responsibility rating. We are also here to give you direction to learn more about the companies you are purchasing from and a little reward if those companies are good players. Just click on the icon to find out more. Check your account to see if you have earned rewards and of course...
      Happy Shopping!
    </p>
    <Navbar />
  </div>
  )
}
export default Home
