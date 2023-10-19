import { Graph } from "react-d3-graph";

const GraphComponent = ({terms, handleTermClick, setIsGraphOpen}) => {
  // graph payload (with minimalist structure)
  const data = {
    nodes: [
      { id: "AJAX",},
      { id: "Angular",},
      { id: "CSR",},
      { id: "DOM",},
      { id: "ES6",},
      { id: "FCP",},
      { id: "HTML",},
      { id: "JSON",},
      { id: "JavaScript",},
      { id: "MVVM",},
      { id: "PRPL",},
      { id: "PWA",},
      { id: "REST API",},
      { id: "React",},
      { id: "SPA",},
      { id: "SSR",},
      { id: "TBT",},
      { id: "TTFB",},
      { id: "TTI",},
      { id: "TypeScript",},
      { id: "VDOM",},
      { id: "Vue",},
      { id: "XHTML",},
      { id: "XML",},
      { id: "Браузер",},
      { id: "Двусторонняя привязка",},
      { id: "Компонент",},
      { id: "Кроссбраузерность",},
      { id: "Маршрутизация",},
      { id: "Отрисовка компонента",},
      { id: "Фреймворк",},
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

