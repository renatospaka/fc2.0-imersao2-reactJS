import React, { FormEvent, useState } from "react";
import { Header } from "./components/Header";
import { TextField } from "./components/TextField";

interface Task{
  name: string
  description: string
}

function App() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [tasks, setTasks] = useState<Task[]>([]);
  
  function onSubmit(event: FormEvent) {
    event.preventDefault();
    setTasks([...tasks, {name, description}]);
  }

  return (
    <div>
      <Header/>
      <form onSubmit={onSubmit}>
        <TextField
          id="name"
          label="Nome:"
          onChange={(value) => setName(value)}
        />
        <TextField
          id="description"
          label="Descrição:"
          onChange={(value) => setDescription(value)}
        />
        <button type="submit">Adicionar</button>
      </form>
      <ul>
        {tasks.map((task) => (
          <li>{task.name} - {task.description}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
