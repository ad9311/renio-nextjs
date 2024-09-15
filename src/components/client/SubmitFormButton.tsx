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

  if (pending) {
    return (
      <button {...props} className="btn btn-neutral" type="submit" disabled>
        {pendingChildren}
      </button>
    );
  }

  return (
    <button {...props} className="btn btn-primary" type="submit">
      {children}
    </button>
  );
}
