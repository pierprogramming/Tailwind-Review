import Footer from "./Footer";
import Header from "./Header";
import Search from "./Search";

const Koogle = () => {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <Search />
      <Footer />
    </div>
  );
};

export default Koogle;
