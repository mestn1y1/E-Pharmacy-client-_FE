import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import css from "./ReviewsSection.module.css";

export default function ReviewsSection() {
  const reviews = [
    {
      img: "/images/Maria.png",
      name: "Maria Tkachuk",
      review:
        "I recently used this medical platform to book an appointment with a specialist, and I was impressed by how easy and user-friendly the process was.",
    },
    {
      img: "/images/Sergey.png",
      name: "Sergey Rybachok",
      review:
        "I had a great experience using this medical platform to access my health records. This platform is a game-changer for managing my healthcare needs.",
    },
    {
      img: "/images/Natalia.png",
      name: "Natalia Chatuk",
      review:
        "I recently had a virtual appointment with my doctor through this medical platform, and I was pleasantly surprised by how seamless the experience was.",
    },
  ];

  return (
    <section className={css.container}>
      <h2 className={css.title}>Reviews</h2>
      <p className={css.text}>Search for Medicine, Filter by your location</p>

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
          {reviews.map(({ img, name, review }, idx) => (
            <SwiperSlide key={idx}>
              <div className={css.reviewItem}>
                <img src={img} alt={name} className={css.img} />
                <h3 className={css.name}>{name}</h3>
                <p className={css.review}>{review}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
