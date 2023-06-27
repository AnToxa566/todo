import Input from "../Input/Input";
import Checkbox from "../Checkbox/Checkbox";
import CreateButton from "../CreateButton/CreateButton";
import DeleteButton from "../DeleteButton/DeleteButton";

function App() {
  return (
    <>
      <Input placeholder="Add a new task" />
      <Checkbox />
      <CreateButton />
      <DeleteButton />
    </>
  );
}

export default App;
