import Image from "next/image";
const Head = () => {
  return (
    <div className="flex justify-center ">
      <main className="w-[100vw] h-[10vh] bg-black text-5xl flex justify-between py-7">
        <div className="pl-4 flex gap-15">
          <li className="text-white text-2xl ">ECommerce</li>
          <li className="text-neutral-400 text-sm mt-2">angilal</li>
        </div >
        <input type="text" placeholder="Search product..." className="text-sm text-neutral-400 w-[20vw] h-[4vh] bg-neutral-800 border-none rounded-2xl"/>
        <div className="flex gap-3 text-white" >
          <button className="h-[4vh] w-[6vw] text-sm border border-purple-950 rounded-2xl">Sign up</button>
          <button className="h-[4vh] w-[6vw] text-sm border-none bg-purple-950 rounded-2xl">Log in</button>
        </div>
      </main>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <Image
      src="/photo.jpg"
      alt=""
      width={850}
      height={1000}
     
      />
    </div>
  );
};

export default Head;
