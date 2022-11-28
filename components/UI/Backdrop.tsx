import ReactDOM from 'react-dom';
import styled from 'styled-components';

const BackdropWrapper = (props: { onClose: () => void }) => {
  return <Dimmed onClick={props.onClose} />;
};

const Backdrop = (props: { onClose: () => void }) => {
  const $backdrop = document.getElementById('backdrop-root') as
    | Element
    | DocumentFragment;

  return (
    <>
      {ReactDOM.createPortal(
        <BackdropWrapper onClose={props.onClose} />,
        $backdrop
      )}
    </>
  );
};

const Dimmed = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 9999;
`;

export default Backdrop;
