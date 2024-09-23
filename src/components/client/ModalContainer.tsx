'use client';

import { useModalStore } from '@/stores/modal';

export default function ModalContainer() {
  const { children } = useModalStore(state => ({ children: state.children }));

  return children;
}
