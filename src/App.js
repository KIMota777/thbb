
const tg= window.Telegram.WebApp;

function App() {
  
  const onClose = () =>{
    tg.close()
  }

  return (
    <div className="App">
        work 
        <button onClick={onClose}>Close</button>
     
    </div>
  );
}

export default App;