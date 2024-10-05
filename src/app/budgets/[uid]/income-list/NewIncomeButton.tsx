'use client';

import Image from 'next/image';
import React from 'react';

import { useModalStore } from '@/stores/modal';

import TransactionModalForm from '../TransactionModalForm';

import NewIncomeForm from './NewIncomeForm';

export default function NewIncomeButton() {
  const { setModal } = useModalStore(state => ({ setModal: state.setModal }));

  function handleClick() {
    setModal(
      <TransactionModalForm title="New income">
        <NewIncomeForm />
      </TransactionModalForm>
    );
  }

  return (
    <button type="button" onClick={handleClick}>
      <Image src="/img/plus.svg" alt="new-income" width={1} height={1} className="w-6" />
    </button>
  );
}
