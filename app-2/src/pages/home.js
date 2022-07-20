import Hero from "../components/hero/Hero";

class Home {
  render() {
    const hero = new Hero();
    const markup = hero.render();

    document.querySelector("body").innerHTML += markup;
  }
}

export default Home;
