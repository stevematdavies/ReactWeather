const React = require('react');
const { Link, IndexLink } = require('react-router');
const Styles = require('Styles');

module.exports = () => 
            
            <div>
                 <IndexLink to='/'	    activeClassName="active"  activeStyle={Styles.activeLink} >Get Weather</IndexLink>
                 <Link to='/about'      activeClassName="active"  activeStyle={Styles.activeLink} >About</Link>
                 <Link to='/examples'   activeClassName="active"  activeStyle={Styles.activeLink} >Examples</Link>
                 <hr />
            </div>
   