import React from 'react';

import CloseModalButton from '@/components/client/CloseModalButton';
import Modal from '@/components/client/Modal';

export default function IncomeModalForm({ children }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <Modal>
      <section>
        <div className="mb-6 flex items-center justify-between">
          <h3 className="title">New income</h3>
          <CloseModalButton />
        </div>
        {children}
      </section>
    </Modal>
  );
}
