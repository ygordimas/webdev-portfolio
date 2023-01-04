import { useState } from "react";
import { Container } from "./assets/components/Container";
import { ProjectsList } from "./assets/components/ProjectsList";
import projects from "./utils/listofprojects";

function App() {
  return (
    <div>
      <ProjectsList list={projects} />
    </div>
  );
}

export default App;
