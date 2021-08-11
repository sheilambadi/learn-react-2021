import { useState } from 'react';

const Tasks = () => {
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

  return (
    <>
      {tasks.map((task) => (
        <h3 key={task.id}>{task.text}</h3>
      ))}
    </>
  );
};

export default Tasks;
