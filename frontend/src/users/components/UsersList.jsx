

import UserItem from './UserItem';
import './UsersList.css';

const UsersList = (props) => {


  return (
    
        props.items.length === 0 ? 
        <h1>No Users Found</h1>
        :
        <ul className='users-list'>
            {
                props.items.map ( user => <UserItem user = {user} />)
            }
        </ul>  
  );
}

export default UsersList;