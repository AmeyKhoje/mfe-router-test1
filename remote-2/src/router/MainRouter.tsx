import {Routes, Route} from 'react-router-dom'
import PageOne from 'src/pages/PageOne'

const MainRouter = () => {
  return (
    <Routes>
      <Route index element={<PageOne />} />
    </Routes>
  )
}

export default MainRouter