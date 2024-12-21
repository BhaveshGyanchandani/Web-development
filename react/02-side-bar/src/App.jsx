import { useState } from "react";
import { NewProject } from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import { ProjectSidebar } from "./components/ProjectSidebar";
import { SelectedProject } from "./components/SelectedProject";

function App() {

  const [projectState ,setProjectState] =useState({
    selectedProjectId :undefined,
    projects : [],
    tasks :[]
  });
  
  function handleStartAddProject(){
    setProjectState(prevState=>{
      return {
        ...prevState,
        selectedProjectId :null,
         
      }
    })
  }

  function handleAddtask(text){
    setProjectState(prevState =>{
      const taskId=Math.random();

      const newTask ={
          id : taskId,
          text :text,
          projectId :prevState.selectedProjectId,
      }
      return {
        ...prevState,
        tasks : [newTask, ...prevState.tasks]
      }
    })
  }

  function handleDeleteTask(id){
    setProjectState(prevState=>{
      return {
        ...prevState,
        selectedProjectId :undefined,
        tasks : prevState.tasks.filter((tasks)=>tasks.id !== id ),
         
      }
    })
  }

  function handleAddProject(projectData){

    setProjectState(prevState =>{
      const newProject ={
          ...projectData,
          id : Math.random()
      }
      return {
        ...prevState,
        selectedProjectId :undefined,
        projects : [...prevState.projects ,newProject ]
      }
    })
}

function handleDeleteProject(){
  setProjectState(prevState=>{
    return {
      ...prevState,
      selectedProjectId :undefined,
      projects : prevState.projects.filter((project)=>project.id !== prevState.selectedProjectId ),
       
    }
  })
}

function handleCancelAddProject(){
  setProjectState(prevState=>{
    return {
      ...prevState,
      selectedProjectId :null,
       
    }
  })
}



function handleSelectProject(id){
  setProjectState((prevState)=>{
    return {
      ...prevState,
      selectedProjectId:id,
    };
  });
}

const selectedProject = projectState.projects.find(project =>project.id === projectState.selectedProjectId);

  let content = <SelectedProject project={selectedProject} onDelete={handleDeleteProject} onAddTask={handleAddtask} onDeleteTask={handleDeleteTask} selectedProjectId={projectState.selectedProjectId}  tasks={projectState.tasks} />;
  if(projectState.selectedProjectId === null){
      content =<NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject}/>
  }
  else if(projectState.selectedProjectId === undefined){
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }
  return (

    <main className="h-screen my-8 flex gap-8">
        <ProjectSidebar onSelectProject={handleSelectProject} onStartAddProject={handleStartAddProject} projects={projectState.projects} />
        {content}
        
    </main>

  );
}

export default App;
