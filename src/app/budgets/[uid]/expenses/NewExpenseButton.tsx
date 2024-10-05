'use client';

import Image from 'next/image';
import React from 'react';

import { useModalStore } from '@/stores/modal';

import TransactionModalForm from '../TransactionModalForm';

import NewExpenseForm from './NewExpenseForm';

export default function NewExpenseButton() {
  const { setModal } = useModalStore(state => ({ setModal: state.setModal }));

  function handleClick() {
    setModal(
      <TransactionModalForm title="New expense">
        <NewExpenseForm />
      </TransactionModalForm>
    );
  }

  return (
    <button type="button" onClick={handleClick}>
      <Image src="/img/plus.svg" alt="new-expense" width={1} height={1} className="w-6" />
    </button>
  );
}
