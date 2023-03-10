import React from 'react';
import Form from './Form';
import List from './List';
import Buttons from './Buttons';
import Section from './Section';
import Header from './Header';
import Main from './Main';
import { useState } from 'react';






function App() {

  const [hideDone, setHideDone] = useState(false);
  const [tasks, setTask] = useState([
    { id: 1, content: "Wejść na Reacta", done: false },
    { id: 2, content: "Zjeść śniadanie", done: true }
  ]);

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone)
  };

  const removeTask = (id) => {
    setTask(tasks => tasks.filter(task => task.id !== id));
  };

  const toggleTaskDone = (id) => {
    setTask(tasks => tasks.map(task => {
      if (task.id === id) {
        return { ...task, done: !task.done };
      }

      return task;
    }));
  };

  const setAllDone = () =>
    setTask(tasks => tasks.map(task => ({
      ...task, done: true
    })));

  const addNewTask = (newTaskContent) => {
    setTask(task => [
      ...task,
      {
        content: newTaskContent,
        done: false,
        id: tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1,
      },
    ])
  };

  return (
    <Main>
      <Header
        title="Lista Zadań"
      />
      <Section
        title="Dodaj Nowe Zadanie"
        body={<Form addNewTask={addNewTask} />}
      />
      <Section
        title="Lista Zadań"
        body={
          <List
            tasks={tasks}
            hideDone={hideDone}
            removeTask={removeTask}
            toggleTaskDone={toggleTaskDone}
          />}
        extraHeaderContent={
          <Buttons
            tasks={tasks}
            hideDone={hideDone}
            toggleHideDone={toggleHideDone}
            setAllDone={setAllDone}


          />}
      />
    </Main>
  );
}

export default App
