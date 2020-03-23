// import React, {Component} from 'react'
// import {connect} from 'react-redux'
// import {withRouter, Route, Switch} from 'react-router-dom'
// import PropTypes from 'prop-types'
// import {me} from './store'

// class Routes extends Component {
//   componentDidMount() {
//     this.props.loadInitialData()
//   }

//   render() {
//     const {isLoggedIn, isAdmin} = this.props

//     return (
//       <Switch>
//         {/* Routes placed here are available to all visitors */}
//         <Route path="/login" component={Login} />
//         {/* <Route exact path="/" component={Home} />
//         <Route path="/signup" component={Signup} /> */}
//         <Route path="/search" component={Checkout} />

//         <Route
//           path="/experiences/:experienceId"
//           component={props => (
//             <ConnectedSingleExperience {...props} isLoggedIn={isLoggedIn} />
//           )}
//         />
//         <Route
//           exact
//           path="/cart"
//           component={() => <ConnectedCart isLoggedIn={isLoggedIn} />}
//         />
//         {isLoggedIn && (
//           <Switch>
//             {/* Routes placed here are only available after logging in */}
//             <Route path="/home" component={Carousel} />
//             {isAdmin && (
//               <Switch>
//                 {/* Routes placed here are only available if the user is an admin */}
//                 {/* <Route path="/home" component={UserHome} /> */}
//                 <Route exact path="/admin" component={adminHome} />
//                 <Route
//                   exact
//                   path="/admin/users"
//                   component={ConnectedAdminAllUsers}
//                 />
//                 <Route
//                   path="/admin/user/:userId"
//                   component={ConnectedEditUser}
//                 />
//               </Switch>
//             )}
//           </Switch>
//         )}

//         {/* Displays our Login component as a fallback */}
//         <Route component={Login} />
//       </Switch>
//     )
//   }
// }

// /**
//  * CONTAINER
//  */
// const mapState = state => {
//   return {
//     // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
//     // Otherwise, state.user will be an empty object, and state.user.id will be falsey
//     isLoggedIn: !!state.user.id,
//     isAdmin: !!state.user.isAdmin
//   }
// }

// const mapDispatch = dispatch => {
//   return {
//     loadInitialData() {
//       dispatch(me())
//     }
//   }
// }

// // The `withRouter` wrapper makes sure that updates are not blocked
// // when the url changes
// export default withRouter(connect(mapState, mapDispatch)(Routes))

// /**
//  * PROP TYPES
//  */
// Routes.propTypes = {
//   loadInitialData: PropTypes.func.isRequired,
//   isLoggedIn: PropTypes.bool.isRequired,
//   isAdmin: PropTypes.bool.isRequired
// }
