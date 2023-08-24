import { useNavigate } from "react-router-dom"
import {navigateToRemote} from 'utility-remote/helpers'

const PageOne = () => {
  const navigate = useNavigate();
  return (
    <div className="page-one">
      Page One Remote App One
      <div>
        <button onClick={() => navigateToRemote('/remote-two')}>
          Remote App Two
        </button>
      </div>
    </div>
  )
}

export default PageOne