import {useState, useEffect} from 'react';
import {useParams, Link} from 'react-router-dom';
import {supabase} from '../client.jsx';

const CrewDetail = () => {
  let params = useParams();

  const [member, setMember] = useState({id: "", name: "", intelligence: "", specialization: ""});

  useEffect(() => {
    const getMember = async () => {
      const {data, error} = await supabase
        .from("Crew")
        .select()
        .eq("id", params.id)
        .single();
      
      setMember(data);
      console.log(data);
    }
    getMember();
  }, []);
  
  return (
    <div className="content">
      <h2>Special Agent {member.name}</h2>
      <p>Intelligence: {member.intelligence}</p>
      <p>Specialization: {member.specialization}</p>
      <Link
        to={`/update/${params.id}`}>
        <button>Edit</button>
      </Link>
    </div>
  )
}

export default CrewDetail;