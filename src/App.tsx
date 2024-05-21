import Calculator from "./components/Calculator";

import logo from '../src/images/logo.svg'

function App() {

  return (
    <>
    <div className="logo">
      <img src={logo} alt="" />
    </div>
      <Calculator />
    </>
  )
}

export default App
