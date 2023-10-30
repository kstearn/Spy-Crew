import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {supabase} from '../client.jsx';

const UpdateMember = () => {
  let params = useParams();

  const [member, setMember] = useState({id: "", name: "", intelligence: "", specialization: ""});
  const [newMember, setNewMember] = useState(member);

  useEffect(() => {
    const getMember = async () => {
      const {data, error} = await supabase
        .from("Crew")
        .select()
        .eq("id", params.id)
        .single();

      setMember(data);
    }
    getMember();
  }, []);

  const handleChange = (event) => {
      const {name, value} = event.target;
      setNewMember( (prev) => {
          return {
              ...prev,
              [name]:value,
          }
      })
  };

  const updateMember = async (event) => {
    event.preventDefault();

    await supabase
      .from('Crew')
      .update({ name: newMember.name, intelligence: newMember.intelligence,  specialization: newMember.specialization})
      .eq('id', params.id);

    window.location = "/";
  }

  const deleteMember = async (event) => {
    event.preventDefault();

    await supabase
      .from('Crew')
      .delete()
      .eq('id', params.id); 

    window.location = "/";
  }
  
  return (
    <div>
      <div>
        <h2>{member.name}</h2>
        <p>Current intelligence: {member.intelligence}</p>
        <p>Current specialization: {member.specialization}</p>
        <br />
      </div>
      <div>
        <form>
            <label for="name">New Name</label> <br />
            <input type="text" id="name" name="name" value={newMember.name} onChange={handleChange}/><br />
            <br/>

            <label for="intelligence">New Intelligence</label><br />
            <input type="text" id="intelligence" name="intelligence" value={newMember.intelligence} onChange={handleChange}/><br />
            <br/>

            <label for="specialization">New Specialization</label><br />
          <input type="text" id="specialization" name="specialization" value={newMember.specialization} onChange={handleChange}/>
            <br/><br/>
          
            <button onClick={updateMember} >Update</button>
          
            <button className="deleteButton" onClick={deleteMember}>Delete</button>
        </form>
      </div>
    </div>
  )
}

export default UpdateMember;