import React from 'react';

import CloseModalButton from '@/components/client/CloseModalButton';
import Modal from '@/components/client/Modal';

type TransactionModalFormProps = {
  title: string;
  children?: React.ReactNode;
};

export default function TransactionModalForm({ children, title }: TransactionModalFormProps) {
  return (
    <Modal>
      <section>
        <div className="mb-6 flex items-center justify-between">
          <h3 className="title">{title}</h3>
          <CloseModalButton />
        </div>
        {children}
      </section>
    </Modal>
  );
}
