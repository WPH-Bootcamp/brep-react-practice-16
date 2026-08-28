import { Counter } from "./materi/1-useState";
import { Button, InputExample } from "./materi/2-Event-Handling";
import { InputForm } from "./materi/3-Controlled-Component";
import { Dashboard } from "./materi/4-Conditional-Rendering";
import { UserList, PostList } from "./materi/5-List-Rendering";

function App() {
  return (
    <div style={{ height: "500dvh" }}>
      <h1>Materi Class 16 - State and Rendering</h1>

      <h2>Materi 1 - useState</h2>
      <Counter />

      <h2>Materi 2 - Event Handling</h2>
      <Button />
      <br />
      <br />
      <InputExample />

      <h2>Materi 3 - Controlled Component</h2>
      <InputForm />

      <h2>Materi 4 - Conditional Rendering</h2>
      <Dashboard />

      <h2>Materi 5 - List Rendering</h2>
      <UserList />
      <PostList />
    </div>
  );
}

export default App;
