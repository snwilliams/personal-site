import { Routes, Route } from 'react-router';
import { Home, Resume, MyProjects } from "./pages";

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
