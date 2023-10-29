
const Member = ({name, intelligence, specialization}) => {
  return(
    <div className="Member">
      <h3>{name}</h3>
      <p>Intelligence: {intelligence}</p>
      <p>Specialization: {specialization}</p>
    </div>
  )
}

export default Member;