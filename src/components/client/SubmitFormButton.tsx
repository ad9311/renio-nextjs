'use client';

import { useFormStatus } from 'react-dom';

type SubmitFormButtonProps = {
  pendingChildren?: React.ReactNode;
} & React.HTMLAttributes<HTMLButtonElement>;

export default function SubmitFormButton({
  children,
  pendingChildren,
  ...props
}: SubmitFormButtonProps) {
  const { pending } = useFormStatus();
  return (
    <button {...props} type="submit" disabled={pending}>
      {pending ? pendingChildren : children}
    </button>
  );
}
