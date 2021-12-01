import React from 'react';
// import '@atlaskit/css-reset';
import initialData from '../initial-data';
import { DragDropContext } from 'react-beautiful-dnd';
import Column from './Column';
import styled from 'styled-components';
import ReactDOM from 'react-dom';

const Container = styled.div`
  display: flex;
`;

export default class Relation extends React.Component {
    tasklist = []
    state =initialData;
    nameid = null;
    
    onDragEnd = result => {
        const { destination, source, draggableId } = result;
    
        if (!destination) {
          return;
        }
    
        if (
          destination.droppableId === source.droppableId &&
          destination.index === source.index
        ) {
          return;
        }
    
        const start = this.state.columns[source.droppableId];
        const finish = this.state.columns[destination.droppableId];
    
        if (start === finish) {
          const newTaskIds = Array.from(start.taskIds);
          newTaskIds.splice(source.index, 1);
          newTaskIds.splice(destination.index, 0, draggableId);
    
          const newColumn = {
            ...start,
            taskIds: newTaskIds,
          };
    
          const newState = {
            ...this.state,
            columns: {
              ...this.state.columns,
              [newColumn.id]: newColumn,
            },
          };
    
          this.setState(newState);
          return;
        }
    
        // Moving from one list to another
        const startTaskIds = Array.from(start.taskIds);
        startTaskIds.splice(source.index, 1);
        const newStart = {
          ...start,
          taskIds: startTaskIds,
        };
    
        const finishTaskIds = Array.from(finish.taskIds);
        finishTaskIds.splice(destination.index, 0, draggableId);
        const newFinish = {
          ...finish,
          taskIds: finishTaskIds,
        };
    
        const newState = {
          ...this.state,
          columns: {
            ...this.state.columns,
            [newStart.id]: newStart,
            [newFinish.id]: newFinish,
          },
        };
        this.setState(newState);
       };

      sendDataLIST = list =>{
        // console.log("LIST",list)
        // console.log("Name Rel " + this.nameid)
        
      };
      setNameId = (nameid) => {
        this.nameid = nameid;
      };
      
       render() {
        return (
          <DragDropContext onDragEnd={this.onDragEnd}>
            <Container>
            {this.state.columnOrder.map(columnId => {
              const column = this.state.columns[columnId];
              const tasks = column.taskIds.map(taskId => this.state.tasks[taskId]);
               if (columnId === 'column-2')
                return (
                  <>
                    <Column key={column.id} column={column} tasks={tasks} shouldcreatebutton={true} sendData={this.sendDataLIST} setNameId={this.setNameId}/>
                  </>
                )
                else  
                return <Column key={column.id} column={column} tasks={tasks} shouldcreatebutton={false} sendData={this.sendDataLIST} setNameId = {this.setNameId}/>; 
            })}
            
            </Container>
            
          </DragDropContext>
        );
      }
    }





