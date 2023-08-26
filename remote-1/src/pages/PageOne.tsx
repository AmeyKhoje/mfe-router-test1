import { useNavigate } from 'react-router-dom';
import { navigateToRemote } from 'utility-remote/helpers';

const PageOne = () => {
  const navigate = useNavigate();
  window.addEventListener('hello[Event]', (data) => {
    console.log(data);
  });
  return (
    <div className="page-one">
      Page One Remote App One
      <div>
        <button onClick={() => navigateToRemote('/remote-two')}>
          Remote App Two
        </button>
      </div>
    </div>
  );
};

export default PageOne;
