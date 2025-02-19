import './Drag-drop.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container  from 'react-bootstrap/Container';
import{
  DndContext,
  closestCenter
}from "@dnd-kit/core";
import{
  arrayMove,
  SortableContext,
  verticalListSortingStrategy
}from "@dnd-kit/sortable"
import { useState } from 'react';
import SortableItem from './SortableItem';

function App() {
  const [languages,setLanguages]=useState(["JavaScript","Python","TypeScript"]);
  return (
    <DndContext
    collisionDetection={closestCenter}
    onDragEnd={handleDragEnd}
    >
    <Container className='p-3' style={{"width":("50%")}} align="center">
      <h3>Les languages de programation</h3>
      <SortableContext
      items={languages}
      strategy={verticalListSortingStrategy}
      >
      {languages.map(language =><SortableItem key={language} id={language}/>)}

      </SortableContext>
    </Container>
     
    </DndContext>
  );
  function handleDragEnd(event){
    console.log("Drag and colled");
    const {active,over}=event;
    console.log("ACTIVE: " + active.id);
    console.log("OVER: " + over.id);
    if(active.id !==over.id){
      setLanguages((items)=>{
        const activeIndex=items.indexOf(active.id);
        const overIndex=items.indexOf(over.id);
        console.log(arrayMove(items,activeIndex,overIndex));
        return arrayMove(items,activeIndex,overIndex);
      })
    }
  }
}

export default App;
