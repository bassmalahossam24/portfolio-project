import { Link } from "react-router-dom";
import HomeImg1 from "/images/img_bg_1-PzvG2r05.jpg";
import HomeImg2 from "/images/img_bg_2-DzCs5o-0.jpg";
import "./Home.css";

function Home() {
  return (
    <>
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade w-100 "
        data-bs-ride="carousel"
        data-bs-interval="2000"
      >
        <div className="carousel-inner w-100 vh-100">
          <div className="carousel-item active position-relative  w-100 h-100 ">
            <img
              src={HomeImg1}
              className="d-block w-100  h-100 object-fit-cover "
              alt="..."
            />
            <div className="carousel-content position-absolute z-1 playfair-font ">
              <h2 className="fw-semibold fs-1"> Hi!</h2>
              <h2 className="fw-semibold fs-1">Im Jackson</h2>
              <div className="fs-5">
                100% html5 bootstrap templates Made
                <endl />
                <p>
                  By{" "}
                  <Link className="link-info " to="https://colorlib.com/">
                    {" "}
                    Colorlib.com
                  </Link>
                </p>
              </div>
              <button type="button" className="btn btn-outline-dark p-2 mt-2">
                Downlaod Cv
                <i className="fa-solid fa-download ms-2"></i>
              </button>
            </div>
          </div>
          <div className="carousel-item  w-100 h-100">
            <img
              src={HomeImg2}
              className="d-block w-100 h-100 object-fit-cover"
              alt="..."
            />
            <div className="carousel-content position-absolute   playfair-font ">
              <h2 className="fw-semibold fs-1"> I am</h2>
              <h2 className="fw-semibold fs-1 mb-2">a Designer</h2>
              <div className="fs-5">
                100% html5 bootstrap templates Made
                <endl />
                <p>
                  By
                  <Link className="link-info " to="https://colorlib.com/">
                    Colorlib.com
                  </Link>
                </p>
              </div>
              <button type="button" className="btn btn-outline-dark p-2 mt-2">
                View Portfolio
                <i className="fa-solid fa-briefcase ms-2"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;