import getPbImageURL from '@/api/getPbImageURL';
import S from '@/routes/home/banner/Banner.module.css';
import { getRecords } from '@/api/getRecords';
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Keyboard, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import IconButton from '@/components/Button/IconButton';

function Banner() {
  const [images, setImages] = useState([]);
  const [swiperIndex, setSwiperIndex] = useState(0);
  const [swiper, setSwiper] = useState();

  const handleNext = () => {
    swiper?.slideNext();
  };

  useEffect(() => {
    const fetchImages = async () => {
      const banners = await getRecords('banners');
      const bannerData = banners.map((banner) => ({
        id: banner.id,
        title: banner.title,
        url: banner.url,
        image: getPbImageURL(banner, 'image'),
      }));
      setImages(bannerData);
    };

    fetchImages();
  }, []);

  return (
    <section className={S.component}>
      <Swiper
        className={S.Swiper}
        modules={[Navigation, Pagination, Keyboard, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        // navigation={true}
        // pagination={{ clickable: true }}
        keyboard={{ enabled: true }}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        loop={true}
        onActiveIndexChange={(e) => setSwiperIndex(e.realIndex)}
        onSwiper={(e) => {
          setSwiper(e);
        }}
      >
        {images.map((banner) => (
          <SwiperSlide key={banner.id}>
            <a href={banner.url} target="_blank" rel="noopener noreferrer">
              <img src={banner.image} alt={banner.title} />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={`${S.pagination} label-sm`}>
        <div className={S.pagination__text}>
          <span>{swiperIndex + 1}</span>
          <span>/</span>
          <span>{images.length}</span>
        </div>

        <IconButton
          title="next"
          iconId="plus"
          width={13}
          height={13}
          iconColor="var(--white)"
          onClick={handleNext}
        />
      </div>
    </section>
  );
}

export default Banner;
