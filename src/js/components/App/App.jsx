import styles from "./styles.module.scss";
import Header from "../Header/Header";
import Container from "../Container/Container";
import NewTask from "../NewTask/NewTask";
import Tasks from "../Tasks/Tasks";

function App() {
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
