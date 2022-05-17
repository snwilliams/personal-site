import { Routes, Route } from 'react-router';
import { Home } from './Home';
import { Resume } from './Resume';
import { MyProjects } from './MyProjects';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<MyProjects />} />
      </Routes>
    </>
  );
}

export default App;
