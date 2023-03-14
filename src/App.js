import React from 'react';
import Form from './Form';
import List from './List';
import Buttons from './Buttons';
import Section from './Section';
import Header from './Header';
import Main from './Main';

const tasks = [
  { id: 1, content: "Przejść na Reacta", done: false },
  { id: 2, content: "Zjeść śniadanie", done: true },
];

const hideDone = false;


function App() {
  return (
    <Main>
      <Header
        title="Lista Zadań"
      />
      <Section
        title="Dodaj Nowe Zadanie"
        body={<Form />}
      />
      <Section
        title="Lista Zadań"
        body={
          <List tasks={tasks} hideDone={hideDone}
          />}
        extraHeaderContent={
          <Buttons tasks={tasks} hideDone={hideDone}
          />}
      />
    </Main>
  );
}

export default App
