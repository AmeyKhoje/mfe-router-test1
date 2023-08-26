import { useNavigate } from 'react-router-dom';
import { navigateToRemote } from 'utility-remote/helpers';

const PageTwo = () => {
  const navigate = useNavigate();
  window.addEventListener('hello[Event]', (data) => {
    console.log(data);
  });
  return (
    <div>
      Page Two
      <div>
        <button onClick={() => navigate('/remote-two')}>
          To Page 1"(remote 2)"
        </button>
        <button onClick={() => navigateToRemote('/remote-one')}>
          Remote One
        </button>
      </div>
    </div>
  );
};

export default PageTwo;
