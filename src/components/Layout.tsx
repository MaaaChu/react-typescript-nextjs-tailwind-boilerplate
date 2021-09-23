import Meta from "./Meta";

interface LayoutProps {
  title?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, title }) => {
  return (
    <div className={`font-sans bg-background`}>
      <Meta title={title} />
      {/* <Navbar /> */}
      <div className=''>{children}</div>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
