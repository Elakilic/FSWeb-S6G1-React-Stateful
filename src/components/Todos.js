import React, { useState } from "react";
import "../styles.less";

function Todos() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  // Yeni bir yapılacak öğesi ekler
  const addTodo = () => {
    if (inputValue.trim() !== "") {
      setTodos([...todos, { text: inputValue, completed: false }]);
      setInputValue(""); // Input değerini temizler
    }
  };

  // Bir yapılacak öğesini tamamlandı olarak işaretler veya iptal eder
  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  // Bir yapılacak öğesini kaldırır
  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="todos">
      <h2>Yapılacaklar Listesi</h2>
      <div className="oyun">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Yapılacak ekle..."
        />
        <button onClick={addTodo}>Ekle</button>

        <ul>
          {todos.map((todo, index) => (
            <li
              key={index}
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
              onClick={() => toggleTodo(index)}
            >
              {todo.text}
              <button onClick={() => removeTodo(index)}>Kaldır</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Todos;
