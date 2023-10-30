import {Link} from 'react-router-dom';

const Member = ({id, name, intelligence, specialization}) => {
  return(
    <div className="Member">
      <Link
        to={`/details/${id}`}>
        <h3>{name}</h3>
      </Link>
      
      <p>Intelligence: {intelligence}</p>
      <p>Specialization: {specialization}</p>
    </div>
  )
}

export default Member;