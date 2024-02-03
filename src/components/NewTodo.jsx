import { useDispatch } from "react-redux";
import { addTodo } from "../store/todos/todos-actions";
import styles from "./NewTodo.module.css";

export const NewTodo = () => {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addTodo(event.target.title.value));
    event.target.reset();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="text"
        name="title"
        placeholder="new todo"
      />
      <input className={styles.button} type="submit" value="Add Todo" />
    </form>
  );
};
