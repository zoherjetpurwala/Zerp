
import executeQuery from "./mysqldb";

export default function Home() {
  const result = executeQuery("select * from employees", [])
  return (
    <div>
    <h1 className="">Hello Next</h1>
    {JSON.stringify(result)}
    </div>

  );
}
