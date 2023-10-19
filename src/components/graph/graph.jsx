import { Graph } from "react-d3-graph";

const GraphComponent = ({terms, handleTermClick, setIsGraphOpen}) => {
  // graph payload (with minimalist structure)
  const data = {
    nodes: [
      { id: "AJAX", x: 200, y: 400, fontSize: 12, highlightFontSize: 12 },
      { id: "Angular", x: 500, y: 450, fontSize: 12, highlightFontSize: 12 },
      { id: "CSR", x: 500, y: 50, fontSize: 12, highlightFontSize: 12 },
      { id: "DOM", x: 600, y: 250, fontSize: 12, highlightFontSize: 12 },
      { id: "ES6", x: 400, y: 450, fontSize: 12, highlightFontSize: 12 },
      { id: "FCP", x: 700, y: 150, fontSize: 12, highlightFontSize: 12 },
      { id: "HTML", x: 400, y: 250, fontSize: 12, highlightFontSize: 12 },
      { id: "JSON", x: 200, y: 350, fontSize: 12, highlightFontSize: 12 },
      { id: "JavaScript", x: 500, y: 400, fontSize: 12, highlightFontSize: 12 },
      { id: "MVVM", x: 600, y: 550, fontSize: 12, highlightFontSize: 12 },
      { id: "PRPL", x: 600, y: 50, fontSize: 12, highlightFontSize: 12 },
      { id: "PWA", x: 600, y: 100, fontSize: 12, highlightFontSize: 12 },
      { id: "REST API", x: 200, y: 300, fontSize: 12, highlightFontSize: 12 },
      { id: "React", x: 600, y: 350, fontSize: 12, highlightFontSize: 12 },
      { id: "SPA", x: 500, y: 150, fontSize: 12, highlightFontSize: 12 },
      { id: "SSR", x: 400, y: 100, fontSize: 12, highlightFontSize: 12 },
      { id: "TBT", x: 200, y: 250, fontSize: 12, highlightFontSize: 12 },
      { id: "TTFB", x: 200, y: 150, fontSize: 12, highlightFontSize: 12 },
      { id: "TTI", x: 200, y: 100, fontSize: 12, highlightFontSize: 12 },
      { id: "TypeScript", x: 500, y: 300, fontSize: 12, highlightFontSize: 12 },
      { id: "VDOM", x: 600, y: 300, fontSize: 12, highlightFontSize: 12 },
      { id: "Vue", x: 600, y: 450, fontSize: 12, highlightFontSize: 12 },
      { id: "XHTML", x: 400, y: 400, fontSize: 12, highlightFontSize: 12 },
      { id: "XML", x: 300, y: 300, fontSize: 12, highlightFontSize: 12 },
      { id: "Браузер", x: 600, y: 200, fontSize: 12, highlightFontSize: 12 },
      { id: "Двусторонняя привязка", x: 400, y: 500, fontSize: 12, highlightFontSize: 12,},
      { id: "Компонент", x: 700, y: 350, fontSize: 12, highlightFontSize: 12 },
      { id: "Кроссбраузерность", x: 465, y: 250, fontSize: 12, highlightFontSize: 12,},
      { id: "Маршрутизация", x: 700, y: 450, fontSize: 12, highlightFontSize: 12,},
      { id: "Отрисовка компонента", x: 700, y: 250, fontSize: 12, highlightFontSize: 12,},
      { id: "Фреймворк", x: 600, y: 400, fontSize: 12, highlightFontSize: 12 },
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
    ],
  };

  // the graph configuration, just override the ones you need
  const myConfig = {
    height: "600px",
    width: "100%",
    nodeHighlightBehavior: true,
    staticgraph: true,
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

    // const onClickLink = function (source, target) {
    //   window.alert(`Clicked link between ${source} and ${target}`);
    // };

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
