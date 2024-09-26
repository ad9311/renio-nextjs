import Amount from '@/components/client/Amount';
import CloseModalButton from '@/components/client/CloseModalButton';
import Modal from '@/components/client/Modal';
import { useBudgetStore } from '@/stores/budget';
import { useModalStore } from '@/stores/modal';

import DeleteIncomeForm from './DeleteIncomeForm';

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
        </section>
        <div className="mt-6 flex items-center justify-end gap-2">
          <DeleteIncomeForm budget={budget} income={income} />
          <button type="button" className="btn btn-primary" onClick={clearStore}>
            Cancel
          </button>
        </div>
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
      </div>
      <div className="mt-6 flex items-center justify-end">
        <button type="button" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}
