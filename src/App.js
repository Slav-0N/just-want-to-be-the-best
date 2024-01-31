import Product from "./components/ProductCard";
import Profile from "./components/Profile";

function App() {
  return (
    <div>
      <Profile title="Вітрина">
        <Product
          imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
          name="pipiska"
          price="001"
        />
      </Profile>
    </div>
  );
}

export default App;
