import { useState } from "react";

import SideBar from "./components/SideBar";
import NoProject from "./components/mainPageContent/NoProject";

function App() {
  const [mainPageContent, setMainPageContent] = useState(<NoProject />);

  function handleChangeMainPageContent(newPage) {
    setMainPageContent((prevContent) => {
      return newPage;
    });
  }

  return (
    <>
      <div className="mainContainer">
        <SideBar onNavigate={handleChangeMainPageContent} />
        {mainPageContent}
      </div>
    </>
  );
}

export default App;
