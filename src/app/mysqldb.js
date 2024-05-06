import mysql from "mysql2/promise";

const executeQuery = async (query, data) => {
  try {
    const db = await mysql.createConnection({
      host: "127.0.0.1",
      port: "3306",
      database: "employees",
      user: "root",
      password: "",
    });
    const [result] = await db.execute(query, data);
    db.end;
    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export default executeQuery;
