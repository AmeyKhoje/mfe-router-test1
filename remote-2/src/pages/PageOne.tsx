import { useNavigate } from 'react-router-dom';
import { useWindowDimension } from 'utility-remote/hooks';
import { navigateToRemote } from 'utility-remote/helpers';

const PageOne = () => {
  const navigate = useNavigate();
  const dim = useWindowDimension();

  const dispatchHelloEvent = () => {
    const event = new CustomEvent('hello[Event]', {
      cancelable: false,
      detail: { name: 'Amey Khoje' },
    });
    window.dispatchEvent(event);
  };

  return (
    <div className="page-one">
      Page One Remote App 2
      <div>
        <button onClick={() => navigateToRemote('/remote-one')}>
          Remote One App
        </button>
        <button onClick={() => navigate('/remote-two/two')}>
          Remote Two - Page 2
        </button>
        <button onClick={dispatchHelloEvent}>Dispatch</button>
      </div>
    </div>
  );
};

export default PageOne;
