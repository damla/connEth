type Props = {
  children: React.ReactNode;
};

const Main = ({ children }: Props) => (
  <main>
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">{children}</div>
  </main>
);

export default Main;
