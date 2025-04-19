import Aboutus from "./component/Aboutus"
import Additionaltech from "./component/Additionaltech"
import Contacts from "./component/Contacts"
import Hero from "./component/Hero"
import Navbar from "./component/Navbar"
import Projects from "./component/Projects"
import Technologies from "./component/Technologies"
function App() {

  return (
    <div>
      <Navbar/>
      <Hero />
      <Projects/>
      <Technologies/>
      <Additionaltech/>
      <Aboutus/>
      <Contacts/>
    </div>
  )
}

export default App
