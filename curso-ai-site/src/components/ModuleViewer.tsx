import { useParams, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useEffect, useMemo } from 'react';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import courseData from '../data/courseData.json';

export function ModuleViewer() {
  const { moduleId } = useParams<{ moduleId: string }>();
  const navigate = useNavigate();

  // Find the current module index
  const currentIndex = useMemo(() => {
    return courseData.findIndex((m) => m.id === moduleId);
  }, [moduleId]);

  const module = courseData[currentIndex];
  
  const prevModule = currentIndex > 0 ? courseData[currentIndex - 1] : null;
  const nextModule = currentIndex < courseData.length - 1 ? courseData[currentIndex + 1] : null;

  // Scroll to top when module changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [moduleId]);

  if (!module) {
    return (
      <div className="not-found">
        <h2>Módulo não encontrado</h2>
        <button onClick={() => navigate('/')} className="btn-primary">
          Voltar para o início
        </button>
      </div>
    );
  }

  return (
    <div className="module-viewer fade-in">
      <div className="markdown-content">
        <ReactMarkdown 
          remarkPlugins={[remarkGfm]}
          components={{
            // Custom renderers for a more premium feel
            h1: ({node, ...props}) => <h1 className="md-h1" {...props} />,
            h2: ({node, ...props}) => <h2 className="md-h2" {...props} />,
            h3: ({node, ...props}) => <h3 className="md-h3" {...props} />,
            blockquote: ({node, ...props}) => (
              <blockquote className="md-blockquote" {...props} />
            ),
            code: ({node, inline, className, children, ...props}: any) => {
              const match = /language-(\w+)/.exec(className || '')
              return !inline ? (
                <div className="code-block-wrapper">
                  <div className="code-block-header">
                    <span className="code-lang">{match ? match[1] : 'text'}</span>
                  </div>
                  <pre className="md-pre">
                    <code className={className} {...props}>
                      {children}
                    </code>
                  </pre>
                </div>
              ) : (
                <code className="md-code-inline" {...props}>
                  {children}
                </code>
              )
            },
            table: ({node, ...props}) => (
              <div className="table-wrapper">
                <table className="md-table" {...props} />
              </div>
            ),
            a: ({node, href, ...props}) => {
              if (href?.startsWith('#')) {
                const anchor = decodeURI(href.substring(1));
                const targetModule = courseData.find(m => 
                  m.shortTitle.toLowerCase().replace(/\s+/g, '-') === anchor
                );
                
                if (targetModule) {
                  return (
                    <a 
                      className="md-link" 
                      href={`/${targetModule.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        navigate(`/${targetModule.id}`);
                      }}
                      {...props} 
                    />
                  );
                }
              }
              return <a className="md-link" href={href} target="_blank" rel="noopener noreferrer" {...props} />
            },
            li: ({node, className, children, ...props}: any) => {
              if (className === 'task-list-item') {
                return <li className="md-task-list-item" {...props}>{children}</li>
              }
              return <li {...props}>{children}</li>
            }
          }}
        >
          {module.content}
        </ReactMarkdown>
      </div>

      <div className="module-navigation">
        {prevModule ? (
          <button 
            className="nav-button prev"
            onClick={() => navigate(`/${prevModule.id}`)}
          >
            <ArrowLeft size={20} />
            <div className="nav-button-text">
              <span className="nav-label">Anterior</span>
              <span className="nav-title">{prevModule.shortTitle}</span>
            </div>
          </button>
        ) : <div />}

        {nextModule ? (
          <button 
            className="nav-button next"
            onClick={() => navigate(`/${nextModule.id}`)}
          >
            <div className="nav-button-text">
              <span className="nav-label">Próximo</span>
              <span className="nav-title">{nextModule.shortTitle}</span>
            </div>
            <ArrowRight size={20} />
          </button>
        ) : (
          <button className="nav-button next complete">
            <div className="nav-button-text">
              <span className="nav-label">Curso Concluído</span>
              <span className="nav-title">Parabéns!</span>
            </div>
            <CheckCircle2 size={20} />
          </button>
        )}
      </div>
    </div>
  );
}
