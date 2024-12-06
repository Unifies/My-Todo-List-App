import styles from "./todoitem.module.css";

export default function Todoitem({ item, todos, setTodos }) {
  function handleDelete(item) {
    /*console.log("Delete button clicked for item", item);*/
    setTodos(todos.filter((todo) => todo !== item));
  }

  function handleClick(name) {
    /*console.log("Item text clicked!", name);*/
    const newArray = todos.map((todo) =>
      todo.name === name ? { ...todo, done: !todo.done } : todo
    );
    setTodos(newArray);
  }
  const className = item.done ? styles.completed : "";
  return (
    <div className={styles.todolister}>
      <div className={styles.todoitems}>
        <span className={className} onClick={() => handleClick(item.name)}>
          {item.name}
        </span>
      </div>
      <span>
        <button
          onClick={() => handleDelete(item)}
          className={styles.deleteButton}
        >
          x
        </button>
      </span>
    </div>
  );
}