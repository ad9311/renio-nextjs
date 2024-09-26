'use client';

import Image from 'next/image';
import React from 'react';

import { useModalStore } from '@/stores/modal';

import IncomeModalForm from './IncomeModalForm';
import NewIncomeForm from './NewIncomeForm';

export default function NewIncomeButton() {
  const { setModal } = useModalStore(state => ({ setModal: state.setModal }));

  function handleClick() {
    setModal(
      <IncomeModalForm>
        <NewIncomeForm />
      </IncomeModalForm>
    );
  }

  return (
    <button type="button" onClick={handleClick}>
      <Image src="/img/plus.svg" alt="new-income" width={1} height={1} className="w-6" />
    </button>
  );
}
