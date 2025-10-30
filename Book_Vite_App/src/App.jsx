import Book from "./BOok"
import Header from "./header"
import Footer from "./footer"
import './App.css'

function App() {

  return (
    <>
    <div>
      <Header />
    <div className="App">
      {/* <h1>Hellooooo mere Mitrooooo</h1> */}
      <Book />
      <Book />
      <Book />
    </div>
    <Footer />
    </div>
    </>
  )
}

export default App
