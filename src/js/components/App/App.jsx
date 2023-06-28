import styles from "./styles.module.scss";
import Header from "../Header/Header";
import Container from "../Container/Container";
import NewTask from "../NewTask/NewTask";

function App() {
  return (
    <>
      <Header />

      <Container>
        <NewTask className={styles.app__newTask} />
      </Container>
    </>
  );
}

export default App;
