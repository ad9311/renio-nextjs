'use client';

export default function Modal({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props} className="fixed top-0 bottom-0 left-0 right-0 bg-gray-500/35">
      <div className="card max-w-96 mx-auto mt-60">{children}</div>
    </div>
  );
}
