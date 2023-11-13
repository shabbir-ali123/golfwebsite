import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import ScoreBoard from "./pages/ScoreBoard";
import OngoingIndiviualScore from "./pages/OngoingIndiviualScore";
import OngoingTeamScore from "./pages/OngoingTeamScore";
import OngoingEvent from "./pages/LiveScoringTable";
import EventMainPage from "./pages/EventMainPage";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/ongoing-indiviual-score":
        title = "";
        metaDescription = "";
        break;
      case "/ongoing-team-score":
        title = "";
        metaDescription = "";
        break;
      case "/ongoing-event":
        title = "";
        metaDescription = "";
        break;
      case "/event-main-page":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<OngoingEvent />} />
      <Route
        path="/ongoing-indiviual-score"
        element={<OngoingIndiviualScore />}
      />
      <Route path="/ongoing-team-score" element={<OngoingTeamScore />} />
      <Route path="/score-board" element={<ScoreBoard />} />
      <Route path="/event-main-page" element={<EventMainPage />} />
    </Routes>
  );
}
export default App;
