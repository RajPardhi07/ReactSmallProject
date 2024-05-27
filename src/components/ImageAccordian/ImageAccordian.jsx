import image1 from './1.jpg';
import image2 from './2.jpg';
import image3 from './3.jpg';
import image4 from './4.jpg';
import image5 from './5.jpg';
import { useState } from 'react';
import './ImageAccordian.css'

const cards = [
  {
    header: "Canada",
    image: image1,
    text: "Create your website and grow with confidence. From an intuitive website builder to advanced business solutions & powerful SEO tools—Try Wix for free."
  },
  {
    header: "Bali",
    image: image2,
    text: "Create your website and grow with confidence. From an intuitive website builder to advanced business solutions & powerful SEO tools—Try Wix for free."
  },
  {
    header: "Spain",
    image: image3,
    text: "Create your website and grow with confidence. From an intuitive website builder to advanced business solutions & powerful SEO tools—Try Wix for free."
  },
  {
    header: "Indonesia",
    image: image4,
    text: "Create your website and grow with confidence. From an intuitive website builder to advanced business solutions & powerful SEO tools—Try Wix for free."
  },
  {
    header: "South Africa",
    image: image5,
    text: "Create your website and grow with confidence. From an intuitive website builder to advanced business solutions & powerful SEO tools—Try Wix for free."
  },
];

const ImageAccordion = () => {
  const [active, setActive] = useState(0);

  const handleToggle = (index) => setActive(index);

  return (
    <section>
      {cards.map((card, index) => {
        const isActive = active === index ? "active" : "";

        return (

          <>
            <div className='main'>

              <div className='inner'>
                <article
                  key={index}
                  className={isActive}
                  onClick={() => handleToggle(index)}
                >
                  <img src={card.image} alt={card.header} />
                  <div className="content">
                    {/* <span className='material-symbols-outlined'>Photo_camera</span> */}
                    <div>
                      <h2>{card.header}</h2>
                      <p>{card.text}</p>
                    </div>
                  </div>

                </article>
              </div>

            </div>
          </>
        );
      })}
    </section>
  );
};

export default ImageAccordion;
