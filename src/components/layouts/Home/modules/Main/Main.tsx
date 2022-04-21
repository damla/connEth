type Props = {
  children: React.ReactNode;
};

const Main = ({ children }: Props) => (
  <main className="w-full flex items-center justify-center flex-grow">
    {children}
  </main>
);

export default Main;
