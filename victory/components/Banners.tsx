"use client"
import Image from "next/image";
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
const label = { slotProps: { input: { 'aria-label': 'Checkbox demo' } } };
const Banners = () => {
    return (
        <div className="px-60">
          <div className="bg-white flex flex-wrap pt-10 px-50 gap-5">
            <div className="w-[12vw] h-[40vh] relative  ">
                <div className="absolute top-0 ">
                  <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                  <Checkbox
                    {...label}
                    icon={<BookmarkBorderIcon />}
                    checkedIcon={<BookmarkIcon />}
                  />
                </div>
                <Image
                src="/wool.jfif" 
                alt=""
                width={1000}
                height={1000}
                className="w-full h-[80%] object-cover rounded-2xl border border-neutral-600"
                />
                <div className="flex flex-col pt-2 bg-white text-black gap-2">
                    <p>Sweater</p>
                    <p className="font-bold">$9.99</p>
                </div>
            </div>
            <div className="w-[12vw] h-[40vh] relative ">
                <div className="absolute  top-0 ">
                  <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                  <Checkbox
                    {...label}
                    icon={<BookmarkBorderIcon />}
                    checkedIcon={<BookmarkIcon />}
                  />
                </div>
                <Image
                src="/t-shirt.jfif" 
                alt=""
                width={1000}
                height={1000}
                className="w-full h-[80%] object-cover rounded-2xl border border-neutral-600"
                />
                <div className="flex flex-col pt-2 bg-white text-black gap-2">
                    <p>T-shirt</p>
                    <p className="font-bold">$9.99</p>
                </div>
            </div>
            <div className="w-[12vw] h-[40vh] relative ">
                <div className="absolute  top-0 ">
                  <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                  <Checkbox
                    {...label}
                    icon={<BookmarkBorderIcon />}
                    checkedIcon={<BookmarkIcon />}
                  />
                </div>
                <Image
                src="/Bomber.jfif" 
                alt=""
                width={1000}
                height={1000}
                className="w-full h-[80%] object-cover rounded-2xl border border-neutral-600"
                />
                <div className="flex flex-col pt-2 bg-white text-black gap-2">
                    <p>Bomber jacket</p>
                    <p className="font-bold">$9.99</p>
                </div>
            </div>
            <div className="w-[12vw] h-[40vh] relative">
                <div className="absolute  top-0 ">
                  <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                  <Checkbox
                    {...label}
                    icon={<BookmarkBorderIcon />}
                    checkedIcon={<BookmarkIcon />}
                  />
                </div>
                <Image
                src="/Leather.jfif" 
                alt=""
                width={1000}
                height={1000}
                className="w-full h-[80%] object-cover rounded-2xl border border-neutral-600"
                />
                <div className="flex flex-col pt-2 bg-white text-black gap-2">
                    <p>Leather jacket</p>
                    <p className="font-bold">$9.99</p>
                </div>
            </div>
            <div className="flex flex-col">
             <div className="flex gap-5">
              <div className="w-[12vw] h-[40vh] relative ">
                <div className="absolute  top-0 ">
                  <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                  <Checkbox
                    {...label}
                    icon={<BookmarkBorderIcon />}
                    checkedIcon={<BookmarkIcon />}
                  />
                </div>
                <Image
                src="/Vest.jfif" 
                alt=""
                width={1000}
                height={1000}
                className="w-full h-[80%] object-cover rounded-2xl border border-neutral-600"
                />
                <div className="flex flex-col pt-2 bg-white text-black gap-2">
                    <p>Sweater vest</p>
                    <p className="font-bold">$9.99</p>
                </div>
              </div>
              <div className="w-[12vw] h-[40vh] relative ">
                <div className="absolute  top-0 ">
                  <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                  <Checkbox
                    {...label}
                    icon={<BookmarkBorderIcon />}
                    checkedIcon={<BookmarkIcon />}
                  />
                </div>
                <Image
                src="/Belt.jfif" 
                alt=""
                width={1000}
                height={1000}
                className="w-full h-[80%] object-cover rounded-2xl border border-neutral-600"
                />
                <div className="flex flex-col pt-2 bg-white text-black gap-2">
                    <p>Belt</p>
                    <p className="font-bold">$9.99</p>
                </div>
              </div>
             </div>
             <div className="w-[25vw] h-[70vh] relative ">
                <div className="absolute  top-0 ">
                  <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                  <Checkbox
                    {...label}
                    icon={<BookmarkBorderIcon />}
                    checkedIcon={<BookmarkIcon />}
                  />
                </div>
                <Image
                src="/Jogger.jfif" 
                alt=""
                width={1000}
                height={1000}
                className="w-full h-[90%] object-cover rounded-2xl border border-neutral-600"
                />
                <div className="flex flex-col pt-2 bg-white text-black gap-2">
                    <p>Jogger</p>
                    <p className="font-bold">$9.99</p>
                </div>
             </div>
            </div>
            <div className="flex flex-col">
             <div className="w-[25vw] h-[70vh] mb-2 relative">
                <div className="absolute  top-0 ">
                  <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                  <Checkbox
                    {...label}
                    icon={<BookmarkBorderIcon />}
                    checkedIcon={<BookmarkIcon />}
                  />
                </div>
                <Image
                src="/Baggy.jfif" 
                alt=""
                width={1000}
                height={1000}
                className="w-full h-[90%] object-cover rounded-2xl border border-neutral-600"
                />
                <div className="flex flex-col pt-2 bg-white text-black gap-2">
                    <p>Baggy jeans</p>
                    <p className="font-bold">$9.99</p>
                </div>
             </div>
             <div className="flex gap-5">
              <div className="w-[12vw] h-[40vh] relative ">
                <div className="absolute  top-0 ">
                  <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                  <Checkbox
                    {...label}
                    icon={<BookmarkBorderIcon />}
                    checkedIcon={<BookmarkIcon />}
                  />
                </div>
                <Image
                src="/Pants2.jfif" 
                alt=""
                width={1000}
                height={1000}
                className="w-full h-[80%] object-cover rounded-2xl border border-neutral-600"
                />
                <div className="flex flex-col pt-2 bg-white text-black gap-2">
                    <p>Straight pants</p>
                    <p className="font-bold">$9.99</p>
                </div>
              </div>
              <div className="w-[12vw] h-[40vh] relative ">
                <div className="absolute  top-0 ">
                  <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                  <Checkbox
                    {...label}
                    icon={<BookmarkBorderIcon />}
                    checkedIcon={<BookmarkIcon />}
                  />
                </div>
                <Image
                src="/Suits.jfif" 
                alt=""
                width={1000}
                height={1000}
                className="w-full h-[80%] object-cover rounded-2xl border border-neutral-600"
                />
                <div className="flex flex-col pt-2 bg-white text-black gap-2">
                    <p>Suits</p>
                    <p className="font-bold">$9.99</p>
                </div>
              </div>
             </div>
            </div>
            <div className="w-[12vw] h-[40vh] relative ">
                <div className="absolute  top-0 ">
                  <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                  <Checkbox
                    {...label}
                    icon={<BookmarkBorderIcon />}
                    checkedIcon={<BookmarkIcon />}
                  />
                </div>
                <Image
                src="/Wool.jfif" 
                alt=""
                width={1000}
                height={1000}
                className="w-full h-[80%] object-cover rounded-2xl border border-neutral-600"
                />
                <div className="flex flex-col pt-2 bg-white text-black gap-2">
                    <p>Wool sweater</p>
                    <p className="font-bold">$9.99</p>
                </div>
            </div>
            <div className="w-[12vw] h-[40vh] relative ">
                <div className="absolute  top-0 ">
                  <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                  <Checkbox
                    {...label}
                    icon={<BookmarkBorderIcon />}
                    checkedIcon={<BookmarkIcon />}
                  />
                </div>
                <Image
                src="/Polo.jfif" 
                alt=""
                width={1000}
                height={1000}
                className="w-full h-[80%] object-cover rounded-2xl border border-neutral-600"
                />
                <div className="flex flex-col pt-2 bg-white text-black gap-2">
                    <p>Polo</p>
                    <p className="font-bold">$9.99</p>
                </div>
            </div>
            <div className="w-[12vw] h-[40vh] relative">
                <div className="absolute  top-0 ">
                  <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                  <Checkbox
                    {...label}
                    icon={<BookmarkBorderIcon />}
                    checkedIcon={<BookmarkIcon />}
                  />
                </div>
                <Image
                src="/Jordan.jfif" 
                alt=""
                width={1000}
                height={1000}
                className="w-full h-[80%] object-cover rounded-2xl border border-neutral-600"
                />
                <div className="flex flex-col pt-2 bg-white text-black gap-2">
                    <p>Hoodie</p>
                    <p className="font-bold">$9.99</p>
                </div>
            </div>
            <div className="w-[12vw] h-[40vh] relative">
                <div className="absolute  top-0 ">
                  <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                  <Checkbox
                    {...label}
                    icon={<BookmarkBorderIcon />}
                    checkedIcon={<BookmarkIcon />}
                  />
                </div>
                <Image
                src="/Trousers.jfif" 
                alt=""
                width={1000}
                height={1000}
                className="w-full h-[80%] object-cover rounded-2xl border border-neutral-600"
                />
                <div className="flex flex-col pt-2 bg-white text-black gap-2">
                    <p>Trousers</p>
                    <p className="font-bold">$9.99</p>
                </div>
            </div>
            <div className="w-[12vw] h-[40vh] relative">
                <div className="absolute  top-0 ">
                  <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                  <Checkbox
                    {...label}
                    icon={<BookmarkBorderIcon />}
                    checkedIcon={<BookmarkIcon />}
                  />
                </div>
                <Image
                src="/Ball.jfif" 
                alt=""
                width={1000}
                height={1000}
                className="w-full h-[80%] object-cover rounded-2xl border border-neutral-600"
                />
                <div className="flex flex-col pt-2 bg-white text-black gap-2">
                    <p>Ball</p>
                    <p className="font-bold">$9.99</p>
                </div>
            </div>
            <div className="w-[12vw] h-[40vh] relative">
                <div className="absolute  top-0 ">
                  <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                  <Checkbox
                    {...label}
                    icon={<BookmarkBorderIcon />}
                    checkedIcon={<BookmarkIcon />}
                  />
                </div>
                <Image
                src="/Watch.jfif" 
                alt=""
                width={1000}
                height={1000}
                className="w-full h-[80%] object-cover rounded-2xl border border-neutral-600"
                />
                <div className="flex flex-col pt-2 bg-white text-black gap-2">
                    <p>Watch</p>
                    <p className="font-bold">$9.99</p>
                </div>
            </div>
            <div className="w-[12vw] h-[40vh] relative">
                <div className="absolute  top-0 ">
                  <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                  <Checkbox
                    {...label}
                    icon={<BookmarkBorderIcon />}
                    checkedIcon={<BookmarkIcon />}
                  />
                </div>
                <Image
                src="/Scarves.jfif" 
                alt=""
                width={1000}
                height={1000}
                className="w-full h-[80%] object-cover rounded-2xl border border-neutral-600"
                />
                <div className="flex flex-col pt-2 bg-white text-black gap-2">
                    <p>Scarves</p>
                    <p className="font-bold">$9.99</p>
                </div>
            </div>
            <div className="w-[12vw] h-[40vh] relative ">
                <div className="absolute  top-0 ">
                  <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                  <Checkbox
                    {...label}
                    icon={<BookmarkBorderIcon />}
                    checkedIcon={<BookmarkIcon />}
                  />
                </div>
                <Image
                src="/Bandana2.jfif" 
                alt=""
                width={1000}
                height={1000}
                className="w-full h-[80%] object-cover rounded-2xl border border-neutral-600 "
                />
                <div className="flex flex-col pt-2 bg-white text-black gap-2">
                    <p>Bandana</p>
                    <p className="font-bold">$9.99</p>
                </div>
            </div>
          </div>
        </div>
    );
};

export default Banners;