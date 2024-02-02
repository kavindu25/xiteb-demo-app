import GridImgOne from "../../assets/grid1.jpg";
import GridImgTwo from "../../assets/grid2.jpg";
import GridImgThree from "../../assets/grid3.jpg";
import GridImgFour from "../../assets/grid4.jpg";
import GridImgFive from "../../assets/grid5.jpg";
import GridImgSix from "../../assets/grid6.jpg";
import GridImgSeven from "../../assets/grid7.jpg";
import GridImgEight from "../../assets/grid8.jpg";
import GridImgNine from "../../assets/grid9.jpg";

const ExperienceSection = () => {
  return (
    <div className="container mx-auto my-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-10">
        <div className="md:col-span-3">
          <h3 className="text-4xl my-2 font-bold text-gray-600">
            Experience something new
          </h3>
          <p>
            Close to home or across the world, Hilton is there for you with
            memorable offers and experiences. Check out what&apos;s new.
          </p>
        </div>
        <div className="mt-8 relative hover:shadow-2xl">
          <img
            src={GridImgOne}
            alt="hotel image"
            className="hover:opacity-95"
          />
          <p className="absolute bottom-0 left-0 right-0 px-4 py-6 text-2xl md:text-3xl text-white hover:h-[100px] drop-shadow-2xl bg-slate-900 opacity-65">
            Discount Advance Purchase
          </p>
        </div>
        <div className="mt-8  relative hover:shadow-2xl">
          <img
            src={GridImgTwo}
            alt="hotel image"
            className="hover:opacity-95"
          />
          <p className="absolute bottom-0 left-0 right-0 px-4 py-6 text-2xl md:text-3xl text-white hover:h-[100px] drop-shadow-2xl bg-slate-900 opacity-65" >
            Discount Advance Purchase
          </p>
        </div>
        <div className="mt-8  relative hover:shadow-2xl">
          <img
            src={GridImgThree}
            alt="hotel image"
            className="hover:opacity-95"
          />
          <p className="absolute bottom-0 left-0 right-0 px-4 py-6 text-2xl md:text-3xl text-white hover:h-[100px] drop-shadow-2xl bg-slate-900 opacity-65" >
            Discount Advance Purchase
          </p>
        </div>
        <div className="mt-8  relative hover:shadow-2xl">
          <img
            src={GridImgFour}
            alt="hotel image"
            className="hover:opacity-95"
          />
          <p className="absolute bottom-0 left-0 right-0 px-4 py-6 text-2xl md:text-3xl text-white hover:h-[100px] drop-shadow-2xl bg-slate-900 opacity-65">
            Discount Advance Purchase
          </p>
        </div>
        <div className="mt-8  relative hover:shadow-2xl">
          <img
            src={GridImgFive}
            alt="hotel image"
            className="hover:opacity-95"
          />
          <p className="absolute bottom-0 left-0 right-0 px-4 py-6 text-2xl md:text-3xl text-white hover:h-[100px] drop-shadow-2xl bg-slate-900 opacity-65">
            Discount Advance Purchase
          </p>
        </div>
        <div className="mt-8  relative hover:shadow-2xl">
          <img
            src={GridImgSix}
            alt="hotel image"
            className="hover:opacity-95"
          />
          <p className="absolute bottom-0 left-0 right-0 px-4 py-6 text-2xl md:text-3xl text-white hover:h-[100px] drop-shadow-2xl bg-slate-900 opacity-65">
            Discount Advance Purchase
          </p>
        </div>
        <div className="mt-8  relative hover:shadow-2xl">
          <img
            src={GridImgSeven}
            alt="hotel image"
            className="hover:opacity-95"
          />
          <p className="absolute bottom-0 left-0 right-0 px-4 py-6 text-2xl md:text-3xl text-white hover:h-[100px] drop-shadow-2xl bg-slate-900 opacity-65">
            Discount Advance Purchase
          </p>
        </div>
        <div className="mt-8  relative hover:shadow-2xl">
          <img
            src={GridImgEight}
            alt="hotel image"
            className="hover:opacity-95"
          />
          <p className="absolute bottom-0 left-0 right-0 px-4 py-6 text-2xl md:text-3xl text-white hover:h-[100px] drop-shadow-2xl bg-slate-900 opacity-65">
            Discount Advance Purchase
          </p>
        </div>
        <div className="mt-8  relative hover:shadow-2xl">
          <img
            src={GridImgNine}
            alt="hotel image"
            className="hover:opacity-95"
          />
          <p className="absolute bottom-0 left-0 right-0 px-4 py-6 text-2xl md:text-3xl text-white hover:h-[100px] drop-shadow-2xl bg-slate-900 opacity-65">
            Discount Advance Purchase
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
