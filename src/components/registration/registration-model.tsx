import * as React from 'react';
import { Modal, ModalContent } from '../modal';
import RegistrationForm from './registration-form';

interface IRegistrationModalProps extends React.Props<any> {
  isVisible: boolean;
  isPending: boolean;
  hasError: boolean;
  onSubmit: () => void;
};

export default function RegistrationModal({
  isVisible,
  isPending,
  hasError,
  onSubmit
}: IRegistrationModalProps) {
  return (
    <Modal isVisible={ isVisible }>
      <ModalContent>
        <h1 className="mt0">Registration</h1>

        <RegistrationForm
          isPending={ isPending }
          hasError={ hasError }
          onSubmit={ onSubmit } />
      </ModalContent>
    </Modal>
  );
}
