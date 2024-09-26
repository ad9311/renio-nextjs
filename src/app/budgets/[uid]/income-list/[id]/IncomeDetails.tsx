'use client';

import Image from 'next/image';

import Amount from '@/components/client/Amount';
import CloseModalButton from '@/components/client/CloseModalButton';
import Modal from '@/components/client/Modal';
import { useBudgetStore } from '@/stores/budget';
import { useModalStore } from '@/stores/modal';

import DeleteIncomeForm from './DeleteIncomeForm';
import EditIncomeForm from './EditIncomeForm';

export default function IncomeDetails() {
  const { budget, income } = useBudgetStore(state => ({
    budget: state.budget,
    income: state.income,
  }));
  const { setModal, clearStore } = useModalStore(state => ({
    setModal: state.setModal,
    clearStore: state.clearStore,
  }));

  if (!budget || !income) {
    return null;
  }

  const handleDelete = () => {
    setModal(
      <Modal>
        <section>
          <div className="mb-6 flex items-center justify-between">
            <h3 className="title">Delete income</h3>
            <CloseModalButton />
          </div>
          <p>Are you sure you want to delete this income?</p>
          <div className="mt-6 flex items-center justify-end gap-2">
            <DeleteIncomeForm />
            <button type="button" className="btn btn-primary" onClick={clearStore}>
              Cancel
            </button>
          </div>
        </section>
      </Modal>
    );
  };

  const handleEdit = () => {
    setModal(
      <Modal>
        <section>
          <div className="mb-6 flex items-center justify-between">
            <h3 className="title">Edit income</h3>
            <CloseModalButton />
          </div>
          <EditIncomeForm />
        </section>
      </Modal>
    );
  };

  return (
    <div className="card">
      <h2 className="title">
        Income {budget.month}/{budget?.year}
      </h2>
      <div>
        <p>
          <Amount value={income.amount} />
        </p>
        <p>{income.description}</p>
        <p>{income.transactionType.name}</p>
      </div>
      <div className="mt-6 flex items-end justify-between">
        <button type="button" className="btn btn-primary" onClick={handleEdit}>
          Edit
        </button>
        <button type="button" onClick={handleDelete}>
          <Image src="/img/trash.svg" alt="trash" width={1} height={1} className="w-6" />
        </button>
      </div>
    </div>
  );
}
