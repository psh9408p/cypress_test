import { useState } from "react";

export default function Home() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState<string[]>([]);
  const [error, setError] = useState("");

  const addTask = () => {
    if (!task.trim()) {
      setError("할 일을 입력해주세요.");
      return;
    }
    if (task.trim().length > 10) {
      setError("할 일은 10자리를 넘길 수 없습니다.");
      return;
    }
    setTasks((prevTasks) => [...prevTasks, task]);
    setTask("");
    setError("");
  };

  return (
    <div>
      <h1>투두리스트</h1>
      <input
        type="text"
        value={task}
        onChange={(e) => {
          setTask(e.target.value);
          setError("");
        }}
        placeholder="할 일을 입력하세요..."
      />
      <button onClick={addTask}>추가하기</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ul>
        {tasks.map((t, index) => (
          <li key={index}>
            {t}
            <button
              onClick={() => setTasks(tasks.filter((_, i) => i !== index))}
            >
              삭제
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
