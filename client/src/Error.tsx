import './Error.css';
import { Link } from 'react-router-dom';

function Error() {
	return (
		<div className='error-container'>
			<div className='error'>404</div>
			<div className='error-subtitle'>
				Page Not Found! Go back <span><Link to='/'>Home</Link></span>
			</div>
		</div>
	);
}

export default Error;
