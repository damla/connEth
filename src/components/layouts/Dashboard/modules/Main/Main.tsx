type Props = {
  children: React.ReactNode;
};

const Main = ({ children }: Props) => (
  <main className="min-h-full flex-grow">{children}</main>
);

export default Main;
