import './Header.css';
import Link from '../Link/Link';


function Header({logo}){
	return(
		<header className="App-header">
	        <img 
		    	src={logo}
		    	className="App-logo"
		    	alt="logo"
	        />
	        <p>
	          Edit <code>src/App.js</code> and save to reload.
	        </p>
	    	<Link
	    		url='https://react.org'
	    		title='Learn react'
	    	/>
      </header>

	)
}


export default Header;