import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { ModuleViewer } from './components/ModuleViewer';

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/introducao" replace />} />
          <Route path=":moduleId" element={<ModuleViewer />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
