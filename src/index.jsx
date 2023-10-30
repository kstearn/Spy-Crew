import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import CreateMember from './routes/CreateMember.jsx';
import ReadMember from './routes/ReadMembers.jsx';
import UpdateMember from './routes/UpdateMember.jsx';
import DeleteMember from './routes/DeleteMember.jsx';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./routes/Nav.jsx";
import CrewDetail from './components/CrewDetail';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index={true} element={<App />} />
          <Route index= {false} path="/create" element={<CreateMember />} />
          <Route index={false} path="/update/:id" element={<UpdateMember />} />
          <Route index={false} path="/details/:id" element={<CrewDetail />}
/>        
        </Route>
      </Routes>
    </BrowserRouter>
	</React.StrictMode>
)