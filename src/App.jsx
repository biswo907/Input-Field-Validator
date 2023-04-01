import { useState } from "react";
import "./app.css";
import NameInput from "./Components/NameInput";
import AccountNumberInput from "./Components/AccountNumberInput";

const App = () => {
  const [name, setName] = useState("");
  const [accountnumber, setAccountnumber] = useState("");
  const handleChangeName = (name) => {
    setName(name)
  }
  const handleChangeAccount = (accountnumber) => {
    setAccountnumber(accountnumber)
  }

  return (
    <div className="app">
      <form>
        <h1>Made By Biswajit</h1>
        <NameInput value={name} onChange={handleChangeName} required={true} />
        <AccountNumberInput value={accountnumber} onChange={handleChangeAccount} required={true} />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;