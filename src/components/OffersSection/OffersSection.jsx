import OfferOne from "../../assets/grid4.jpg";
import OfferTwo from "../../assets/grid5.jpg";
import OfferThree from "../../assets/grid6.jpg";

const OffersSection = () => {
  return (
    <div className="container mx-auto my-6">
      <div className="grid grid-cols-1 justify-items-center md:grid-cols-3 gap-6 mx-auto">
        <div className="md:col-span-3">
          <h3 className="text-4xl my-2 font-bold text-gray-600">Offers</h3>
        </div>
        <div className="w-96 hover:shadow-2xl bg-slate-50">
          <div className="flex flex-col  text-center">
            <img src={OfferOne} alt="hotel image" className="" />
            <p className="text-md  font-bold mt-2">Rooms & Suits</p>
            <p className="text-sm">01 Feb 2024 - 25 Feb 2024</p>
            <p className="text-sm px-2 font-bold my-2">
              Shangri La Circle Exclusive Member Rate with Breakfast
            </p>
            <p className="text-sm px-2 my-6">
              Exclusive Member Rate with Breakfast for Shangri-La Circle member.
            </p>
            <p className="text-sm px-2 mb-4">
              From LKR <b>57,058.20</b> Average Per Night
            </p>
            <button className="mx-auto  mb-4 rounded-none w-48 border-2 border-yellow-700 hover:border-yellow-600 text-yellow-700 hover:text-yellow-600">
              View Details
            </button>
          </div>
        </div>
        <div className="w-96 hover:shadow-2xl bg-slate-50">
          <div className="flex flex-col  text-center">
            <img src={OfferTwo} alt="hotel image" className="" />
            <p className="text-md  font-bold mt-2">Rooms & Suits</p>
            <p className="text-sm">01 Feb 2024 - 25 Feb 2024</p>
            <p className="text-sm px-2 font-bold my-2">
              Shangri La Circle Exclusive Member Rate with Breakfast
            </p>
            <p className="text-sm px-2 my-6">
              Exclusive Member Rate with Breakfast for Shangri-La Circle member.
            </p>
            <p className="text-sm px-2 mb-4">
              From LKR <b>57,058.20</b> Average Per Night
            </p>
            <button className="mx-auto  mb-4 rounded-none w-48 border-2 border-yellow-700 hover:border-yellow-600 text-yellow-700 hover:text-yellow-600">
              View Details
            </button>
          </div>
        </div>
        <div className="w-96 hover:shadow-2xl bg-slate-50">
          <div className="flex flex-col  text-center">
            <img src={OfferThree} alt="hotel image" className="" />
            <p className="text-md  font-bold mt-2">Rooms & Suits</p>
            <p className="text-sm">01 Feb 2024 - 25 Feb 2024</p>
            <p className="text-sm px-2 font-bold my-2">
              Shangri La Circle Exclusive Member Rate with Breakfast
            </p>
            <p className="text-sm px-2 my-6">
              Exclusive Member Rate with Breakfast for Shangri-La Circle member.
            </p>
            <p className="text-sm px-2 mb-4">
              From LKR <b>57,058.20</b> Average Per Night
            </p>
            <button className="mx-auto  mb-4 rounded-none w-48 border-2 border-yellow-700 hover:border-yellow-600 text-yellow-700 hover:text-yellow-600">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OffersSection;
