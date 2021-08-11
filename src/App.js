import { useState } from 'react';

import Header from './components/Header';
import Tasks from './components/Tasks';

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Nail appointment',
      day: 'Aug 12th at 1 pm',
      reminder: true
    },
    {
      id: 2,
      text: 'Doctors appointment',
      day: 'Aug 13th at 1 pm',
      reminder: true
    },
    {
      id: 3,
      text: 'Shopping',
      day: 'Aug 14th at 1 pm',
      reminder: false
    }
  ]);

  // delete task
  const deleteTask = (id) => {
    // console.log('Delete: ', id);
    // remove task from UI
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} />
      ) : (
        'No tasks to display'
      )}
    </div>
  );
}

export default App;
