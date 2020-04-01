
import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link as RouterLink} from 'react-router-dom'
import {logout} from '../store'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import {makeStyles} from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Link from '@material-ui/core/Link'
import style from './navbar.css';
import SearchIcon from '@material-ui/icons/Search';
import PersonIcon from '@material-ui/icons/Person';
import HomeIcon from '@material-ui/icons/Home';
import IconButton from '@material-ui/core/IconButton';
import SvgIcon from '@material-ui/core/SvgIcon';
import DescriptionIcon from '@material-ui/icons/Description';

const useStyles = makeStyles(theme => ({
  appBar: {
    top: 'auto',
    bottom: 0,
  },
  grow: {
    flexGrow: 1,
  },
  // SearchIcon:{
  //   flex: auto,
  // },
  // PersonIcon:{
  //   flex: auto,
  // },
  // HomeIcon: {
  //   flex: auto,
  // },
  // DescriptionIcon:{
  //   flex: auto,
  // }
  // toolbarButtons: {
  //   flex: auto,
  // }

}));



  const BottomAppBar = props => {
    function handleClick(e){
      e.preventDefault();
      if(e.target.name = 'home') history.push('/')
      else if(e.target.name = 'news') history.push('/news')
      else if(e.target.name = 'search') history.push('/search')
      else if(e.target.name = 'signup') history.push('/signup')
      else history.push('/')
    }
  const classes = useStyles()
  // let navRoutes = () => {
  //   if (props.isAdmin) {
  //     return <Admin handleClick={props.handleClick} />
  //   } else if (props.isLoggedIn) {
  //     return <LoggedIn handleClick={props.handleClick} />
  //   } else {
  //     return <NotLoggedIn />
  //   }
  // }

  return (
    <AppBar position="fixed" style={{ background: 'transparent'}} className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
          <IconButton name='home' onClick ={props.handleClick} component={RouterLink} to="/">
          <HomeIcon/>
          </IconButton>
          <IconButton name='news' onClick ={props.handleClick} component={RouterLink} to="/news">
           <DescriptionIcon/>
           </IconButton>
           <IconButton name='search' onClick ={props.handleClick} component={RouterLink} to="/search">
           <SearchIcon/>
           </IconButton>
          <IconButton name='login' onClick ={props.handleClick} component={RouterLink} to="/login">
           <PersonIcon/>
           </IconButton>
        {/* <nav>{navRoutes()}</nav> */}
      </Toolbar>
    </AppBar>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id,
    isAdmin: !!state.user.isAdmin
  }
}

// const mapDispatch = dispatch => {
//   function handleClick() {
//     dispatch((logout))
//   }
//   return (
//     handleClick
//   )
// }
export default connect(mapState)(BottomAppBar)

/**
 * PROP TYPES
 */
BottomAppBar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  isAdmin: PropTypes.bool.isRequired
}

