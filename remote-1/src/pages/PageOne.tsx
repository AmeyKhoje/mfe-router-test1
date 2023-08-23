import { useNavigate } from "react-router-dom"

const PageOne = () => {
  const navigate = useNavigate();
  return (
    <div className="page-one">
      Page One Remote App One
      <div>
        <button onClick={() => navigate('/remote-two')}>
          Remote App Two
        </button>
      </div>
    </div>
  )
}

export default PageOne