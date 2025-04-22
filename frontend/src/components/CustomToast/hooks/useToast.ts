import { useEffect, useState } from 'react';
import { useAppSelector } from '../../../store/hooks';
import { ToastType } from '../../../common/enums/toast-type.enum';
import { StatusTypeEnum } from '../../../common/enums/status.enum';

export const useToast = () => {
  const { message, status } = useAppSelector(state => state.hero);
  const [type, setType] = useState<ToastType>();
  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    if (status) {
      if (status === StatusTypeEnum.Error) {
        setType(ToastType.ERROR);
      } else if (status === StatusTypeEnum.Success) {
        setType(ToastType.SUCCESS);
      }
    }
  }, [status]);

  useEffect(() => {
    if (message && type) {
      setShow(true);
    }
  }, [message, type]);

  return { message, type, show, setShow };
};
