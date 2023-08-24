import { useNavigate } from "react-router-dom"
import {useWindowDimension} from 'utility-remote/hooks'
import {navigateToRemote} from 'utility-remote/helpers'

const PageOne = () => {
  const navigate = useNavigate();
  const dim = useWindowDimension();

  return (
    <div className="page-one">
      Page One Remote App 2
      <div>
        <button onClick={() => navigateToRemote('/remote-one')}>Remote One App</button>
      </div>
    </div>
  )
}

export default PageOne