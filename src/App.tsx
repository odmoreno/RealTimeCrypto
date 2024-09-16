import CriptoSearchForm from "./CriptoSearchForm"

function App() {

  return (
    <>
      <div className="container">
        <h1 className="app-title">
          Contizador de <span> Cryptomonedas</span>
        </h1>

        <div className="content">
          <CriptoSearchForm />
        </div>
      </div>

    </>
  )
}

export default App
