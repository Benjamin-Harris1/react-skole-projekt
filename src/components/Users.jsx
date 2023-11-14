import React, { useState } from "react";

export default function UserForm() {
  const [name, setName] = useState("");
  const [username, setUserName] = useState("");
  const [mail, setMail] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = { name, username, mail, age };

    resetForm();

    await fetch(""),
      {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(user),
      };
  };

  function resetForm() {
    setName("");
    setUserName("");
    setMail("");
    setAge("");
  }
}
