import Image from "next/image" 
const Body = () => {
    return (
        <>
          <div className="flex  h-[50vh] px-60 static aspect-square overflow-hidden w-full">
             <div className="w-[30vw] text-black flex flex-col mt-90 gap-5 top-0 absolute ">
                <p className="text-lg ml-50">Premium Zip Hoodie</p>
                <p className="text-5xl ml-50 font-bold">$9.99</p>
             </div>
             <Image
             src="/12.jfif" 
             alt="Product"
             width={1000}
             height={1000}
             className="w-full h-full object-cover object-center "
             />
          </div>
          <div>

          </div>
        </>
    );
       
};

export default Body;