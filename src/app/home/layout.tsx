export default function HomeLayout({
  children,
  currentbudget,
}: {
  children: React.ReactNode;
  currentbudget: React.ReactNode;
}) {
  return (
    <div>
      {children}
      {currentbudget}
    </div>
  );
}
