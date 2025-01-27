import './App.css'

import Home from './Pages/Home'

import Footer from './Component/Footer'
import SkillSection from './Component/SkillSection'
import ProjectSection from './Component/ProjectSection'

function App() {
  return (
    <>
      <div
        className={`  bg-bgPink text-txColor font-oswald dark:bg-dark dark:text-txColor  relative overflow-hidden`}
      >
        <Home />

        <SkillSection />
        <ProjectSection />

        <Footer />
      </div>
    </>
  )
}

export default App
