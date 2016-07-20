const React = require('react');
const { Link, IndexLink } = require('react-router');
const Styles = require('Styles');

module.exports = React.createClass ({

    onSearch (e) {
        e.preventDefault();
        alert('Not yet wired up!')
    },

    render() {
        return (
            <div className='top-bar'>
                
                <div className="top-bar-left">
                    <ul className='menu'>
                        <li className='menu-text'>React Weather App</li>
                        <li><IndexLink to='/'    activeClassName="active" activeStyle={Styles.activeLink} >Get Weather</IndexLink></li>
                        <li><Link to='/about'    activeClassName="active" activeStyle={Styles.activeLink} >About</Link></li>
                        <li><Link to='/examples' activeClassName="active" activeStyle={Styles.activeLink} >Examples</Link></li>
                    </ul>
                </div>

                <div className="top-bar-right">
                    <form onSubmit={this.onSearch}>
                        <ul className='menu'>
                            <li><input type="search" placeholder="Search Weather" /></li>
                            <li><input type="submit" className="button" value="Get Weather"/></li>
                        </ul>
                    </form>
                </div>
                
            </div>
        )
    }   
}) 
