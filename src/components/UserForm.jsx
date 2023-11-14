import { useState } from "react";

export default function UserForm() {
  const [name, setName] = useState("");
  const [username, setUserName] = useState("");
  const [mail, setMail] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();
    const user = { name, username, mail, age };
    console.log(user);
    resetForm();

    await fetch("http://localhost:3000/newuser", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
  };

  function resetForm() {
    setName("");
    setUserName("");
    setMail("");
    setAge("");
  }

  return (
    <>
      <h2>User Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={e => setName(e.target.value)} />
        </label>
        <br />
        <label>
          Username:
          <input type="text" value={username} onChange={e => setUserName(e.target.value)} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={mail} onChange={e => setMail(e.target.value)} />
        </label>
        <br />
        <label>
          Age:
          <input type="number" value={age} onChange={e => setAge(e.target.value)} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
