import './Home.css';

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <h1>Welcome to The Otto</h1>
        <p>Experience the finest dining with a blend of tradition and innovation.</p>
      </section>
      <section className="promotions">
        <h2>Wacky Wednesday</h2>
        <p>Enjoy 50% off all appetizers every Wednesday!</p>
        <h2>Freaky Friday</h2>
        <p>Buy one main course, get a dessert for free on Fridays!</p>
      </section>
      <section className="why-dine">
        <h2>Why Dine With Us?</h2>
        <p>At The Otto, we pride ourselves on using the freshest ingredients and crafting unique, flavorful dishes that satisfy every palate.</p>
      </section>
      <section className="testimonials">
        <h2>What Our Customers Say</h2>
        <blockquote>
          "The Otto has the best burgers in town! The atmosphere is warm and welcoming." - Sarah J.
        </blockquote>
        <blockquote>
          "A truly fantastic dining experience. Highly recommend the Specialty Pasta!" - James R.
        </blockquote>
      </section>
      <section className="contact-info">
        <h2>Contact Us</h2>
        <p>Address: 123 Main Street, Rock Hill, SC</p>
        <p>Phone: +1 (803) 123-4567</p>
        <p>Email: theotto@gmail.com</p>
      </section>
    </div>
  );
}

export default Home;
