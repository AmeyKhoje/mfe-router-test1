import { useNavigate } from "react-router-dom"

const PageOne = () => {
  const navigate = useNavigate();
  return (
    <div className="page-one">
      Page One Remote App 2
      <div>
        <button onClick={() => navigate('/remote-one')}>Remote One App</button>
      </div>
    </div>
  )
}

export default PageOne