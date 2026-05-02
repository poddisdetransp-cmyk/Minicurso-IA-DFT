import { useEffect, useRef, useState } from 'react';
import mermaid from 'mermaid';

mermaid.initialize({
  startOnLoad: false,
  theme: 'dark',
  fontFamily: 'Inter, sans-serif',
  securityLevel: 'loose',
  flowchart: {
    useMaxWidth: true,
    htmlLabels: true,
  }
});

interface MermaidProps {
  chart: string;
}

export function MermaidDiagram({ chart }: MermaidProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [svgContent, setSvgContent] = useState<string>('');
  const [id] = useState(() => `mermaid-${Math.random().toString(36).substr(2, 9)}`);

  useEffect(() => {
    const renderChart = async () => {
      try {
        if (chart) {
          const { svg } = await mermaid.render(id, chart);
          setSvgContent(svg);
        }
      } catch (error) {
        console.error("Mermaid failed to render", error);
        setSvgContent(`<div class="mermaid-error">Erro ao renderizar diagrama</div>`);
      }
    };
    renderChart();
  }, [chart, id]);

  return (
    <div 
      className="mermaid-container fade-in"
      ref={containerRef}
      dangerouslySetInnerHTML={{ __html: svgContent }}
    />
  );
}
