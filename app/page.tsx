import Image from "next/image";
import { playfair_display } from "./fonts";
import Button from "./ui/button";
import CarrouselSlide from "./ui/carrousel/carrousel-slide";
import PhotosGallery from "./ui/gallery/PhotosGallery";
import HomeAvatar from "./ui/homevavatar";


export default function Home() {
  return (
   <>
    <main className="flex min-h-screen flex-col">
      <p className="text-center pt-24"><span className="bg-black text-white px-6 py-3 rounded-3xl">Over 😁 million ready-to-work creatives!</span></p>
      <h1 className={`text-7xl mx-auto mt-9 w-6/12 pt-8 pb-9 text-center ${playfair_display.className}`}>The world’s destination for design</h1>
      <p className="text-center">Get inspired by the work of millions of top-rated designers & agencies around the world.</p>
      <div className="flex justify-center pt-5">
        <HomeAvatar />
      </div>
      <div className="flex justify-center pt-7">
        <Button buttonText="Get in touch with me" />
      </div>
      <div className="carrouselSlide pt-20">
        <CarrouselSlide />
      </div>
      <div className="gallery pt-9">
        <h2 className={`text-4xl font-normal mx-auto mt-9 w-6/12 pt-8 pb-16 text-center`}>Explore inspiring designs</h2>
        <PhotosGallery />
      </div>
      <div className="flex justify-center pt-7">
        <Button buttonText="Brows more inspiration" />
      </div>
    </main>
   </>
  );
}
