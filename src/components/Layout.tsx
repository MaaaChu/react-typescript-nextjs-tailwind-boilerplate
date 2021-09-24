import Meta from "./Meta";

interface LayoutProps {
  title?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, title }) => {
  return (
    <div className={`font-sans bg-background`}>
      <Meta title={title} />
      {/* <Navbar /> */}
      <main className=''>{children}</main>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
