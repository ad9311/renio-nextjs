import Image from 'next/image';

import { useModalStore } from '@/stores/modal';

export default function CloseModalButton() {
  const { clearModal } = useModalStore(state => ({ clearModal: state.clearModal }));

  return (
    <button type="button" onClick={clearModal}>
      <Image src="/img/x.svg" alt="close-modal" width={1} height={1} className="w-6" />
    </button>
  );
}
