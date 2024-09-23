'use client';

import Image from 'next/image';
import React from 'react';

import CloseModalButton from '@/components/client/CloseModalButton';
import Modal from '@/components/client/Modal';
import { useModalStore } from '@/stores/modal';

import NewIncomeForm from './NewIncomeForm';

export default function NewIncomeButton() {
  const { setModal } = useModalStore(state => ({ setModal: state.setModal }));

  function handleClick() {
    setModal(
      <Modal>
        <section>
          <div className="mb-6 flex items-center justify-between">
            <h3 className="title">New income</h3>
            <CloseModalButton />
          </div>
          <NewIncomeForm />
        </section>
      </Modal>
    );
  }

  return (
    <button type="button" onClick={handleClick}>
      <Image src="/img/plus.svg" alt="new-income" width={1} height={1} className="w-6" />
    </button>
  );
}
