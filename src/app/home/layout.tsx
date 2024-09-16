export default function HomeLayout({
  children,
  currentbudget,
  lastbudgets,
}: {
  children: React.ReactNode;
  currentbudget: React.ReactNode;
  lastbudgets: React.ReactNode;
}) {
  return (
    <>
      {children}
      <div className="grid xl:grid-cols-12 gap-4">
        <div className="card xl:col-span-5">{currentbudget}</div>
        <div className="card xl:col-span-7">{lastbudgets}</div>
      </div>
    </>
  );
}
