import CarouselBottom from "../Components/HomeComponents/CarouselBottom";
import { HomeShoppingCard } from "../Components/HomeComponents/HomeShoppingCard";
import BestSellerList from "../Layout/HomeLayout/BestSellerList";
import { EditorsPick } from "../Layout/HomeLayout/EditorsPick";
import { FeaturedPostList } from "../Layout/HomeLayout/FeaturedPostList";
import { Hero } from "../Layout/HomeLayout/Hero";

export const HomePage = () => {
  return (
    <div>
      <Hero />
      <EditorsPick />
      <BestSellerList />
      <CarouselBottom />
      <HomeShoppingCard />
      <FeaturedPostList />
    </div>
  );
};
