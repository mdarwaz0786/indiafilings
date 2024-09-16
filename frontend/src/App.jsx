import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routesConfig from "./routesConfig/routesConfig.jsx";

const App = () => {
  const renderRoutes = (routes) => {
    return routes.map((route, index) => {
      if (route.children) {
        return (
          <Route key={index} path={route.path} element={route.element}>
            {
              route.children.map((child, idx) => (
                <Route key={idx} path={child.path} element={child.element} />
              ))
            }
          </Route>
        );
      };
      return <Route key={index} path={route.path} element={route.element} />;
    });
  };

  return (
    <Router>
      <Routes>
        {
          renderRoutes(routesConfig)
        }
      </Routes>
    </Router>
  );
};

export default App;
