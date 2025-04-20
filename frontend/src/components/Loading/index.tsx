import { ReactElement } from 'react';
import { Spinner } from 'react-bootstrap';
import { useLoader } from './hooks/useLoader';

export const Loading = (): ReactElement => {
  const { loading } = useLoader();

  return (
    <>
      {loading && (
        <div className="top-0 w-100 h-100 z-3 position-fixed bg-light bg-opacity-50 d-flex align-items-center justify-content-center">
          <Spinner variant="primary" animation="border" />
        </div>
      )}
    </>
  );
};
