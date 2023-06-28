import styles from "./styles.module.scss";
import Header from "../Header/Header";
import Container from "../Container/Container";
import NewTask from "../NewTask/NewTask";
import Task from "../Task/Task";

function App() {
  return (
    <>
      <Header />

      <Container>
        <NewTask className={styles.app__newTask} />
        <Task text="Test" />
      </Container>
    </>
  );
}

export default App;
