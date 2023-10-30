import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
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
    <div>
      <h2>{member.name}</h2>
      <p>{member.intelligence}</p>
      <p>{member.specialization}</p>
    </div>
  )
}

export default CrewDetail;