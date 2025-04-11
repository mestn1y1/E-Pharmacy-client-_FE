import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import css from "./ReviewsSection.module.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchReviews } from "../../../redux/reviews/operations";
import { useReviews } from "../../../hooks/useReviews";
import Loader from "../../Loader/Loader";

export default function ReviewsSection() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchReviews());
  }, [dispatch]);

  const { isLoading, reviews } = useReviews();

  const imageMap = {
    "Maria Tkachuk": "/images/Maria.png",
    "Sergey Rybachok": "/images/Sergey.png",
    "Natalia Chatuk": "/images/Natalia.png",
  };

  const reviewsWithImg = reviews.map((review) => ({
    ...review,
    img: imageMap[review.name],
  }));

  return (
    <section className={css.container}>
      <h2 className={css.title}>Reviews</h2>
      <p className={css.text}>Search for Medicine, Filter by your location</p>

      {isLoading ? (
        <Loader />
      ) : (
        <div className={css.reviewsWrapper}>
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{
              clickable: true,
              el: ".swiper-pagination",
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            spaceBetween={16}
            slidesPerView={1}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1280: {
                slidesPerView: 3,
                allowTouchMove: false,
              },
            }}
            style={{
              paddingTop: "30px",
            }}
            className="swiper-container"
          >
            {reviewsWithImg.map(({ img, name, testimonial }, idx) => (
              <SwiperSlide key={idx}>
                <div className={css.reviewItem}>
                  <img src={img} alt={name} className={css.img} />
                  <h3 className={css.name}>{name}</h3>
                  <p className={css.review}>{testimonial}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </section>
  );
}
