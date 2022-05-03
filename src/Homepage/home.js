import React, { useState } from "react";
import "./home.css";

const HomePage = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <>
      <section className="showcase">
        <div className="container grid-index">
          <div className="showcase-text">
            <h1>Made with Love</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia
              numquam quidem aut, ipsam corrupti culpa obcaecati vel eveniet!
              Temporibus, ipsa.
            </p>
            <div className="showcase-image">
              <img src="images/Savon_Bio-01 .jpg" alt="collection" />
            </div>
            {/* <div className="deals">
              <a href="offers.html" className="btn btn-outline">
                HOT DEALS
              </a>
            </div> */}
          </div>
        </div>
      </section>
      <section className="info">
        <div className="container">
          <h3 className="Title"> Title stuff </h3>
          <div className="grid grid-3 text-center my-4">
            <h3>Filler</h3>
            <p className="text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Quisquam, repellat tempora exercitationem voluptatibus corrupti
              sapiente, quasi blanditiis temporibus laudantium deleniti tempore
              aliquid ullam nobis pariatur reprehenderit aperiam sint obcaecati
              autem!
            </p>
          </div>
          <div>
            <h3>Filler</h3>
            <p className="text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Quisquam, repellat tempora exercitationem voluptatibus corrupti
              sapiente, quasi blanditiis temporibus laudantium deleniti tempore
              aliquid ullam nobis pariatur reprehenderit aperiam sint obcaecati
              autem!
            </p>
          </div>
          <div>
            <h3>Filler</h3>
            <p className="text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Quisquam, repellat tempora exercitationem voluptatibus corrupti
              sapiente, quasi blanditiis temporibus laudantium deleniti tempore
              aliquid ullam nobis pariatur reprehenderit aperiam sint obcaecati
              autem!
            </p>
          </div>
        </div>
      </section>
      <section className="showcase">
        <div className="container grid-index">
          <div className="showcase-image">
            <img src="images/Savon_Bio-02 .jpg" alt="collection two" />
          </div>
        </div>
      </section>

      <section className="info">
        <div className="container">
          <h3 className="Title"> Title stuff </h3>
          <div className="grid grid-3 text-center my-4">
            <h3>Filler</h3>
            <p className="text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Quisquam, repellat tempora exercitationem voluptatibus corrupti
              sapiente, quasi blanditiis temporibus laudantium deleniti tempore
              aliquid ullam nobis pariatur reprehenderit aperiam sint obcaecati
              autem!
            </p>
            <p className="learnmore">
              <button
                className="btn btn"
                onClick={() => {
                  setShowMore(!showMore);
                }}
              >
                Show more
              </button>
              <p>
                {showMore
                  ? "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus error sunt tenetur voluptas dolores, soluta a iusto. Cum, explicabo animi!  "
                  : ""}
              </p>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
