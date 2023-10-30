import { useState } from 'react';
import { supabase } from '../client.jsx';

const CreateMember = () => {

  const [member, setMember] = useState({name: "", intelligence: "", specialization: ""});

  const handleChange = (event) => {
      const {name, value} = event.target;
      console.log("Name: ", name, " value: ", value);
      setMember( (prev) => {
          return {
              ...prev,
              [name]:value,
          }
      })
  };

  const createMember = async (event) => {
    event.preventDefault();
    
    await supabase
      .from('Crew')
      .insert([
        { name: member.name, intelligence: member.intelligence, specialization: member.specialization },
      ])
      .select();

    window.location = "/";
  };
  
  
  return(
    <div>
      <h2>Create a Spy</h2>
      <form>
        <label>Name: </label>
          <input type="text" name="name" value={member.name} onChange={handleChange} /> <br/><br/>

        <label>Intelligence: </label>
        <input type="number" min="1" max="10" step="1" name="intelligence" value={member.intelligence} onChange={handleChange} /> <br /><br/>

        <label>Specialization: </label>
        <input type="text" name="specialization" value={member.specialization} onChange={handleChange} /> <br /><br/>

        <button onClick={createMember}>Submit</button>
      </form>
    </div>
  )
}

export default CreateMember;