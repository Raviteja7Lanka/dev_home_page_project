import { Button } from "bootstrap";

const initialData = {
    tasks: {
      'task-1': { id: 'task-1', content: 'Service 1 :led' },
      'task-2': { id: 'task-2', content: 'Service 2 :Buzzer' },
      'task-3': { id: 'task-3', content: 'Service 3 :Photo Resistor' },
      'task-4': { id: 'task-4', content: 'Service 4 :Distance Calculator' },
      'task-5': {id: 'task-5', content: 'Relarion 5 :RE1'},
      'task-6': {id: 'task-6', content: 'Relarion 6 :RE2'}
    },
    columns: {
      'column-1': {
        id: 'column-1',
        title: 'Services Avaliable',
        taskIds: ['task-1', 'task-2', 'task-3', 'task-4'],
      },
      'column-2': {
        id: 'column-2',
        title: 'Recipe Tab 1',
        taskIds: [],
       },
      'column-3': {
         id: 'column-3',
         title: 'Relationships ',
         taskIds: ['task-5','task-6'],
       },
    },
    // Facilitate reordering of the columns
    columnOrder: ['column-1','column-3', 'column-2'],
  };
  
  export default initialData;
  