import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { InfinitySpin } from "react-loader-spinner";
import { useSelector } from "react-redux";

const Slider = () => {
  const { loading } = useSelector((state) => state.book);
  return (
    <>
      {loading ? (
        <div className="text-center w-[100%] mt-2 flex align-middle justify-center text-myblue">
          <InfinitySpin color="rgb(0 124 195)" />
        </div>
      ) : (
        <Slide>
          <div className=" w-full each-slide-effect">
            <div>
              <img className="w-full" src="images/slidimg.webp" />
            </div>
          </div>
        </Slide>
      )}
    </>
  );
};

export default Slider;
