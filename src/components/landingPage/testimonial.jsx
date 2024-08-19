import { BsStarFill } from "react-icons/bs";
import Avatar from "../../assets/images/Avatars.png";
import "./testimonial.css"; // Import the CSS file

function Testimonial() {
  return (
    <>
      <div className="testimonial-container bg-customLightBlueGray p-4 mt-32">
        <div className="testimonial-header text-center mb-16">
          <p className="font-Modarat leading-6 text-xl font-normal text-customGray">
            Don’t just listen to us
          </p>
          <h1 className="text-2xl  md:6xl font-normal mt-4 font-millik md:leading-13 text-customBlack">
            Listen to what our users are saying
          </h1>
        </div>

        <div className="testimonial-row top-row grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Top Row Testimonials */}
          {[...Array(4)].map((_, index) => (
            <div key={index} className="testimonial shadow-md p-4">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, starIndex) => (
                  <BsStarFill key={starIndex} className="text-yellow-500" />
                ))}
              </div>
              <p className="font-Modarat leading-6 text-l font-normal text-customBlack">
                “My daughter recently got accepted to her dream school in US,
                everything was amazing...until the tuition hit. Thankfully,
                Tuition by Flutterwave saved the day! Safe, secure transfer with
                tracking? 5 star, I highly recommend”
              </p>
              <div className="flex items-center mt-4">
                <img src={Avatar} alt="Avatar" className="w-12 h-12 rounded-full" />
                <div className="ml-4">
                  <h6 className="font-bold text-xl text-black">Chinma</h6>
                  <p className="text-sm customLightGray">Nigeria</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="testimonial-row bottom-row grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* Bottom Row Testimonials */}
          {[...Array(4)].map((_, index) => (
            <div key={index} className="testimonial shadow-md p-4">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, starIndex) => (
                  <BsStarFill key={starIndex} className="text-yellow-500" />
                ))}
              </div>
              <p>
                “My daughter recently got accepted to her dream school in US,
                everything was amazing...until the tuition hit. Thankfully,
                Tuition by Flutterwave saved the day! Safe, secure transfer with
                tracking? 5 star, I highly recommend”
              </p>
              <div className="flex items-center mt-4">
                <img src={Avatar} alt="Avatar" className="w-12 h-12 rounded-full" />
                <div className="ml-4">
                  <h6 className="font-bold">Name {index + 1}</h6>
                  <p className="text-sm">Country {index + 1}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Testimonial;
