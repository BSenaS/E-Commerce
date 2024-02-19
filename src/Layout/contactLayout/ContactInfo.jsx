import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdMailOutline } from "react-icons/md";

const ContactInfo = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-6 mt-12">
      {/* Info */}
      <div className="flex  flex-col font-bold text-sBlack tracking-[0.2px] items-center gap-6">
        <span className="text-sm">VISIT OUR OFFICE</span>
        <h3 className="text-5xl max-w-[670px]">
          We help small businesses{" "}
          <span className="flex justify-center">with big ideas</span>
        </h3>
      </div>
      {/* Trio Square */}
      <div className="flex flex-row font-bold max-w-[1050px] gap-4 my-8">
        <div className="flex flex-col basis-1/3 justify-center items-center gap-4 py-12 px-4">
          <FaPhoneAlt size={72} className="text-pBlue" />
          <p>georgia.young@example.com</p>
          <p>georgia.young@ple.com</p>
          <p>Get Support</p>
          <div className="flex">
            <button className="border rounded-[37px] py-3 px-6 border-pBlue text-pBlue">
              Submit Request
            </button>
          </div>
        </div>
        <div className="flex flex-col basis-1/3 justify-center items-center gap-4 py-16 px-4 bg-[#252B42]">
          <FaLocationDot size={72} className="text-pBlue" />
          <p className="text-white">georgia.young@example.com</p>
          <p className="text-white">georgia.young@ple.com</p>
          <p className="text-white">Get Support</p>
          <div className="flex">
            <button className="border rounded-[37px] py-3 px-6 border-pBlue text-pBlue">
              Submit Request
            </button>
          </div>
        </div>
        <div className="flex flex-col basis-1/3 justify-center items-center gap-4 py-12 px-4 ">
          <MdMailOutline size={72} className="text-pBlue" />
          <p>georgia.young@example.com</p>
          <p>georgia.young@ple.com</p>
          <p>Get Support</p>
          <div className="flex">
            <button className="border rounded-[37px] py-3 px-6 border-pBlue text-pBlue">
              Submit Request
            </button>
          </div>
        </div>
      </div>
      {/* Lets Talk */}
      <div className="flex flex-col items-center gap-6 mb-16">
        <h5 className="font-bold">WE Can't WAIT TI MEET YOU</h5>
        <h3 className="font-bold text-6xl">Let’s Talk</h3>
        <div className="flex">
          <button className="border rounded-md py-3 px-6 bg-pBlue text-white">
            Try it free now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
