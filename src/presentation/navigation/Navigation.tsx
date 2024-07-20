import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { routes } from "./routes";

export const Navigation = () => {
  return (
    <Router>
      <Routes>
        {routes.map((route) => (
          <Route
            key={route.id}
            path={route.path}
            element={
              <>
                <route.layout>
                  <route.component />
                </route.layout>
              </>
            }
          />
        ))}
      </Routes>
    </Router>
  );
};
