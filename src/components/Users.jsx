import { useState, useEffect } from "react";
import Table from "./Table";

export default function Users() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:3000/users");
        const data = await res.json();
        setData(data);
        // console.log(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  return <Table data={data} />;
}
