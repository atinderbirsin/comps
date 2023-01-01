import Button from "../components/Button";
import { GoBell, GoDatabase, GoCloudDownload } from "react-icons/go";

function ButtonPage() {
  const handleClick = () => {
    console.log("Click");
  };

  return (
    <div>
      <div>
        <Button className="mb-2" primary rounded onClick={handleClick}>
          <GoBell />
          Click me!..
        </Button>
      </div>
      <div>
        <Button warning outline onMouseEnter={handleClick}>
          <GoCloudDownload />
          Dont click this!..
        </Button>
      </div>
      <div>
        <Button danger rounded outline onMouseLeave={handleClick}>
          <GoDatabase />
          See Deal!
        </Button>
      </div>
      <div>
        <Button secondary rounded onMouseOver={handleClick}>
          Add to cart
        </Button>
      </div>
      <div>
        <Button success onDoubleClick={handleClick}>
          Double click me!
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;
