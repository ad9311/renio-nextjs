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
    <div>
      {children}
      {currentbudget}
      {lastbudgets}
    </div>
  );
}
