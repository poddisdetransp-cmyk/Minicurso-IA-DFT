import { NavLink } from 'react-router-dom';
import { BookOpen, ChevronRight, X } from 'lucide-react';
import courseData from '../data/courseData.json';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-header">
        <div className="logo-container">
          <BookOpen className="logo-icon" size={28} />
          <div className="logo-text">
            <h2>IA Aplicada</h2>
            <p>Gestão Pública</p>
          </div>
        </div>
        <button className="close-button" onClick={onClose}>
          <X size={24} />
        </button>
      </div>

      <nav className="sidebar-nav">
        <ul>
          {courseData.map((module) => (
            <li key={module.id}>
              <NavLink
                to={`/${module.id}`}
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                onClick={() => {
                  // Close sidebar on mobile after clicking a link
                  if (window.innerWidth <= 768) {
                    onClose();
                  }
                }}
              >
                <span className="nav-link-text">
                  {module.title.startsWith('Módulo') 
                    ? module.title.replace('Módulo ', 'M') 
                    : module.shortTitle}
                </span>
                <ChevronRight className="chevron-icon" size={16} />
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      
      <div className="sidebar-footer">
        <p>Curso de Autoaprendizado</p>
      </div>
    </aside>
  );
}
