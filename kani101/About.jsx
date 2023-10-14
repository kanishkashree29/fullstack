import React from 'react';
import { Link } from 'react-router-dom';
import { Parallax } from 'react-parallax';
import ScrollReveal from 'scrollreveal';
import aboutImage from '../images/natural-history-museum-2203648_640.jpg';

const About = () => {
  // Initialize ScrollReveal
  React.useEffect(() => {
    ScrollReveal().reveal('.reveal', {
      delay: 300,
      distance: '70px',
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <>
      <section className="about-section">
        <Parallax bgImage={aboutImage} strength={500}>
          <div className="container">
            <div className="row">
              <div className="col-lg-6 reveal">
                <div className="about-image">
                  <img
                    src={aboutImage}
                    alt="About Company"
                    className="section-image"
                  />
                </div>
              </div>
              <div className="col-lg-6 reveal">
                <div className="about-content">
                  <h2 className="section-title">We Design the Future</h2>
                  <p className="section-description">
                    The museum is a captivating destination that offers a
                    fascinating journey through art, history, and culture. It
                    houses a diverse collection of artifacts, exhibits, and
                    artworks that span different eras and civilizations.
                  </p>
                  <p className="section-description">
                    The museum's collection is carefully curated, featuring rare
                    and valuable artifacts that highlight the achievements,
                    traditions, and cultural diversity of civilizations from
                    around the world.
                  </p>
                  <Link to="/menu" className="btn btn-primary">
                    Explore Our Work
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Parallax>
      </section>

      <section className="testimonial-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2 className="section-title">Client Testimonials</h2>
              <div className="testimonial-carousel">
                <div className="testimonial-item">
                  <p className="testimonial-text">
                    "Visiting the museum was an absolute delight! The exhibits
                    were beautifully presented, and I was captivated by the
                    diverse collection of artifacts. It was a truly immersive
                    experience that deepened my understanding of art and
                    history."
                  </p>
                  <p className="testimonial-author">- Sarah J</p>
                </div>
                <div className="testimonial-item">
                  <p className="testimonial-text">
                    "I have been to many museums around the world, and this one
                    stands out as a true gem. The attention to detail, the
                    informative displays, and the knowledgeable staff made my
                    visit memorable. I highly recommend this museum to anyone
                    seeking a rich cultural experience."
                  </p>
                  <p className="testimonial-author">- Mark T</p>
                </div>
                <div className="testimonial-item">
                  <p className="testimonial-text">
                    "As an art enthusiast, I was blown away by the museum's
                    collection. The range of artworks, from classical to
                    contemporary, was exceptional. It was a joy to explore the
                    galleries and appreciate the talent and creativity on
                    display. I will definitely be coming back for more!"
                  </p>
                  <p className="testimonial-author">- Emily W</p>
                </div>
                <div className="testimonial-item">
                  <p className="testimonial-text">
                    "The museum offers a perfect blend of education and
                    entertainment. The interactive displays and multimedia
                    presentations made learning about history and culture
                    enjoyable for both children and adults. It's a fantastic
                    place for a family outing."
                  </p>
                  <p className="testimonial-author">- David M</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
