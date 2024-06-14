import PropTypes from 'prop-types';

const Link = ({route}) => {
    return (
        <li className='mr-10' >
        <a href={'routh.path'}>{route.name}</a>
    </li>
    );
};
Link.propTypes = {
route: PropTypes.object
     }
export default Link;


