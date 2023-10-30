import { useState, useEffect } from "react";
import Member from '../components/Member.jsx';
import { supabase } from '../client.jsx';

const ReadMember = () => {
  const [members, setMembers] = useState(null);
  
  useEffect(() => {
    const getMembers = async () => {
      const {data, error} = await supabase.from("Crew").select("*");
      setMembers(data);
      console.log(data);
    }
    getMembers();
  }, []);
  
  return(
    <div className="MembersList">
      {members ? 
        members.map((member, index) => {
          return <Member key={index} id={member.id} name={member.name} intelligence={member.intelligence} specialization={member.specialization} />
        }) :
        "No crew members yet!"}
    </div>
  )
}

export default ReadMember;