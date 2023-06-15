import React from "react";
import avatar1 from "../../assets/Avatars/avatar1.jpg";
import avatar2 from "../../assets/Avatars/avatar2.jpg";
import avatar3 from "../../assets/Avatars/avatar3.jpg";
import avatar4 from "../../assets/Avatars/avatar4.jpg";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const CLIENTS = [
  {
    id: 1,
    name: "Janeh Feruh",
    src: avatar1,
    text:
      " All recommendations for David. We listened to him in Turkey" +
      "in 2014. It was an unforgettable night ",
  },
  {
    id: 2,
    name: "DJ Marquez",
    src: avatar2,
    text: "We worked b2b this summer. All recommendations",
  },
  {
    id: 3,
    name: "Luke Diamond",
    src: avatar3,
    text: " Many thanks to David for the free music packs.",
  },
  {
    id: 4,
    name: "Anna",
    src: avatar4,
    text: "David played music at our wedding last year. We all played the whole evening. Recommendations.",
  },
];

function Reviews() {
  return (
    <section id="reviews">
      <h5>What Clients Say</h5>
      <h2>Reviews</h2>
      <div className="container md:w-[60%] lg:w-[50%]  ">
        <Swiper
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="w-full mx-auto h-[17rem] md:h-[14rem] border-2  border-solid border-[#951033]  rounded-3xl mySwiper "
        >
          {CLIENTS.map((client) => (
            <SwiperSlide
              key={client.id}
              className="py-4 px-10 flex flex-col text-center gap-2  rounded-3xl bg-[#2E0B35] items-center"
            >
              <img
                src={client.src}
                alt="avatar"
                className="w-12 aspect-square rounded-full border-solid border-2 border-[#951033] mx-auto sm:w-[12%] md:w-[8%]"
              />
              <h2 className="text-white bg-transparent">{client.name}</h2>
              <small className="text-center ">{client.text}</small>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Reviews;
