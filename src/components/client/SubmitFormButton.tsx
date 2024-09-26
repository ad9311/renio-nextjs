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
      <button className="btn btn-neutral" {...props} type="submit" disabled>
        {pendingChildren}
      </button>
    );
  }

  return (
    <button className="btn btn-primary" {...props} type="submit">
      {children}
    </button>
  );
}
