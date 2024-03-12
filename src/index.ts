import app from "./app";



async function main() {
  try {
    app.listen(process.env.PORT);
    console.log('Server on port', process.env.PORT);
  } catch (error) {
    console.log('Unable to connect to the database:', error);
  }
}

main();
