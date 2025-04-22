import { Toast, ToastContainer } from 'react-bootstrap';
import { useToast } from './hooks/useToast';
import { ToastType } from '../../common/enums/toast-type.enum';
import { FaCheck } from 'react-icons/fa';
import { FaXmark } from 'react-icons/fa6';

export const CustomToast = () => {
  const { message, type, show, setShow } = useToast();

  console.log('message', message);

  return (
    <ToastContainer className="p-3" position="top-end" style={{ zIndex: 1 }}>
      <Toast
        className="d-inline-block m-1"
        bg={type}
        autohide={true}
        delay={3000}
        onClose={() => setShow(false)}
        show={show}
      >
        <Toast.Body className="text-white">
          {type === ToastType.SUCCESS ? <FaCheck /> : <FaXmark />} {message}
        </Toast.Body>
      </Toast>
    </ToastContainer>
  );
};
