import React from 'react';
import styled from 'styled-components';
import { Droppable } from 'react-beautiful-dnd';
import Task from './Task';
import Popup from './Popup';


const Container = styled.div`
  margin: 10px;
  border: 1px solid lightgrey;
  border-radius: 2px;
  width: 320px;
  display: flex;
  flex-direction: column;

`;
const Title = styled.h3`
  padding: 8px;
`;
const TaskList = styled.div`
  padding: 8px;
  transition: background-color 0.2s ease;
  background-color: ${props => (props.isDraggingOver ? 'skyblue' : 'white')};
  flex-grow: 1;
  min-height: 150px;
`;

export default class Column extends React.Component {
    submit = (taskID) => {
      this.props.sendData(this.props.column.taskIds);
      this.setState(
        prevState => ({ ...prevState, buttonpop : true} )
      )
    }

    closePopup = () => {
      this.setState(
        prevState => ({ ...prevState, buttonpop : false} )
      )
    }
    chnagename = (e) => {
      // this.props.setNameId(e.target.value)
      {console.log("name",e.target.value)}
      this.setState(
      prevState => ({ ...prevState, nameid :e.target.value } )
      
      )
    }
    state = { 
      buttonpop : false,
      nameid:null
    } 
    sentToServer =()=>{
      console.log("the name",this.state.nameid)
      fetch("/echo/json/",
      {
       headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json'
           },
           method: "POST",
           body: JSON.stringify({nameid: this.nameid, list: this.list})
           })
           .then(function(res){ console.log(res) })
           .catch(function(res){ console.log(res) })
     }
    render() {
      return (
        <Container>
          <Title>{this.props.column.title}</Title>
          <Droppable droppableId={this.props.column.id}>
            {(provided,snapshot ) => (
              <TaskList ref={provided.innerRef} {...provided.droppableProps}
              isDraggingOver={snapshot.isDraggingOver}>
                {console.log("HELLO 1", this.props.column.taskIds)}
                {this.props.tasks.map((task, index) => (
                  <Task key={task.id} task={task} index={index} tid={this.props.column.taskIds}/>
                ))}
                {provided.placeholder}
              </TaskList>
            )}
          </Droppable>
          
          {
            this.props.shouldcreatebutton===true ? (<><button onClick={this.submit }>create</button> <label>name:<input type="text" name="name" onChange={this.chnagename}/></label>
            </>) : ""
          }
          <Popup trigger={this.state.buttonpop} settrigger={this.closePopup} sentfun={this.sentToServer} >
            {
              // window.alert('recipe id successfully')
            }
          </Popup>
          
        </Container>
      );
    }
  }
