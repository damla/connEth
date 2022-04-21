type Props = {
  children: React.ReactNode;
};

const Main = ({ children }: Props) => (
  <main className="min-w-full flex items-center justify-center min-h-full">
    {children}
  </main>
);

export default Main;
