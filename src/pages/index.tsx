import { useState } from "react";

export default function Home() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState<string[]>([]);

  const addTask = () => {
    if (!task) return;
    setTasks((prevTasks) => [...prevTasks, task]);
    setTask("");
  };

  const deleteTask = (index: any) => {
    setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1>투두리스트</h1>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="할 일을 입력하세요..."
      />
      <button onClick={addTask}>추가하기</button>
      <ul>
        {tasks.map((t, index) => (
          <li key={index}>
            {t}
            <button onClick={() => deleteTask(index)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
