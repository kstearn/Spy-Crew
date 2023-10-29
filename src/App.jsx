import './App.css';
import { supabase } from './client.jsx';
import { createClient } from '@supabase/supabase-js';
import ReadMembers from './routes/ReadMembers.jsx';


export default function App() {
  


  
  return (
    <div className="App">
      <h1>Title</h1>
      <ReadMembers/>
    </div>
  )
}
