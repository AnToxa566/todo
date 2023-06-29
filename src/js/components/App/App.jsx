import Header from "../Header/Header";
import Container from "../Container/Container";
import NewTask from "../NewTask/NewTask";
import Tasks from "../Tasks/Tasks";

import styles from "./styles.module.scss";
import taskStore from "src/js/store/task.js";

function App() {
  taskStore.fetchTasks();

  return (
    <>
      <Header />

      <Container>
        <NewTask className={styles.app__newTask} />
        <Tasks className={styles.app__tasks} />
      </Container>
    </>
  );
}

export default App;
