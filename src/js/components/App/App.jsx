import style from "./app.module.scss";
import Header from "../Header/Header";
import Container from "../Container/Container";
import NewTask from "../NewTask/NewTask";

function App() {
  return (
    <>
      <Header />

      <Container>
        <NewTask className={style.app__newTask} />
      </Container>
    </>
  );
}

export default App;
