import { Graph } from "react-d3-graph";

const GraphComponent = ({terms, handleTermClick, setIsGraphOpen}) => {
  // graph payload (with minimalist structure)
  const data = {
    nodes: [
      { id: "AJAX", x: 200, y: 400, },
      { id: "Angular", x: 500, y: 450, },
      { id: "CSR", x: 500, y: 50, },
      { id: "DOM", x: 600, y: 250, },
      { id: "ES6", x: 400, y: 450, },
      { id: "FCP", x: 700, y: 150, },
      { id: "HTML", x: 400, y: 250, },
      { id: "JSON", x: 200, y: 350, },
      { id: "JavaScript", x: 500, y: 400, },
      { id: "MVVM", x: 600, y: 550, },
      { id: "PRPL", x: 600, y: 50, },
      { id: "PWA", x: 600, y: 100, },
      { id: "REST API", x: 200, y: 300, },
      { id: "React", x: 600, y: 350, },
      { id: "SPA", x: 500, y: 150, },
      { id: "SSR", x: 400, y: 100, },
      { id: "TBT", x: 200, y: 250, },
      { id: "TTFB", x: 200, y: 150, },
      { id: "TTI", x: 200, y: 100, },
      { id: "TypeScript", x: 500, y: 300, },
      { id: "VDOM", x: 600, y: 300, },
      { id: "Vue", x: 600, y: 450, },
      { id: "XHTML", x: 400, y: 400, },
      { id: "XML", x: 300, y: 300, },
      { id: "Браузер", x: 600, y: 200, },
      { id: "Двусторонняя привязка", x: 400, y: 500,},
      { id: "Компонент", x: 700, y: 350, },
      { id: "Кроссбраузерность", x: 465, y: 250,},
      { id: "Маршрутизация", x: 700, y: 450,},
      { id: "Отрисовка компонента", x: 700, y: 250,},
      { id: "Фреймворк", x: 600, y: 400, },
    ],
    links: [
      { source: "AJAX", target: "JSON" },
      { source: "Angular", target: "JavaScript" },
      { source: "CSR", target: "SPA" },
      { source: "DOM", target: "VDOM" },
      { source: "ES6", target: "JavaScript" },
      { source: "FCP", target: "PWA" },
      { source: "HTML", target: "XML" },
      { source: "JSON", target: "XML" },
      { source: "JavaScript", target: "TypeScript" },
      { source: "MVVM", target: "Vue" },
      { source: "PRPL", target: "PWA" },
      { source: "PWA", target: "SPA" },
      { source: "REST API", target: "JSON" },
      { source: "SPA", target: "SSR" },
      { source: "SSR", target: "CSR" },
      { source: "TBT", target: "TTFB" },
      { source: "TTFB", target: "TTI" },
      { source: "TypeScript", target: "JavaScript" },
      { source: "VDOM", target: "React" },
      { source: "Vue", target: "MVVM" },
      { source: "Браузер", target: "Кроссбраузерность" },
      { source: "Двусторонняя привязка", target: "MVVM" },
      { source: "Компонент", target: "Фреймворк" },
      { source: "Angular", target: "Фреймворк" },
      { source: "Angular", target: "Двусторонняя привязка" },
      { source: "Vue", target: "Фреймворк" },
      { source: "React", target: "Фреймворк" },
      { source: "Браузер", target: "Отрисовка компонента" },
      { source: "XHTML", target: "HTML" },
      { source: "XHTML", target: "XML" },
      { source: "Браузер", target: "TTFB" },
      { source: "Браузер", target: "TTI" },
      { source: "Браузер", target: "TBT" },
      { source: "Браузер", target: "SPA" },
      { source: "Браузер", target: "PWA" },
      { source: "Браузер", target: "FCP" },
      { source: "JavaScript", target: "HTML" },
      { source: "JavaScript", target: "React" },
      { source: "Фреймворк", target: "Маршрутизация" },
      { source: "HTML", target: "TypeScript" },
      { source: "Браузер", target: "HTML" },
    ],
  };

  // the graph configuration, just override the ones you need
  const myConfig = {
    height: 700,
    width: 1000,
    nodeHighlightBehavior: true,
    automaticRearrangeAfterDropNode: true,
    node: {
      color: "blue",
      size: 120,
      highlightStrokeColor: "blue",
    },
    link: {
      highlightColor: "blue",
    },
  };

  const onClickNode = function (nodeId) {
    setIsGraphOpen(false);
    handleTermClick(nodeId);
  };

  return (
    <Graph
      id="graph-id" // id is mandatory
      data={data}
      config={myConfig}
      onClickNode={onClickNode}
      // onClickLink={onClickLink}
      style={{ maxWidth: "100%" }}
    />
  );
};

export default GraphComponent;

