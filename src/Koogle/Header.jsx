import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceSmile } from "@fortawesome/free-solid-svg-icons";
const Header = () => {
  return (
    <div className="bg-violet-300 text-violet-700 flex justify-between px-4 py-2">
      <div className="flex">
        <div className="font-medium mx-4">Home</div>
      </div>
      <div className="flex">
        <div className="font-medium mx-4">Mail</div>
        <div className="font-medium mx-4">Images</div>
        <div className="font-medium mx-4">
          <FontAwesomeIcon icon={faFaceSmile} />
        </div>
      </div>
    </div>
  );
};

export default Header;
