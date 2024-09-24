import Image from 'next/image';

import { useModalStore } from '@/stores/modal';

export default function CloseModalButton() {
  const { clearStore } = useModalStore(state => ({ clearStore: state.clearStore }));

  return (
    <button type="button" onClick={clearStore}>
      <Image src="/img/x.svg" alt="close-modal" width={1} height={1} className="w-6" />
    </button>
  );
}
