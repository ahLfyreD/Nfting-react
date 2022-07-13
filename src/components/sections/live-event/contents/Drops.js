import Carousel from "react-elastic-carousel";
import { Card } from "@components/card/Card";
import { DropsData } from "./DropsData.js";

import * as AiIcons from "react-icons/ai"

const Drops = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 500, itemsToShow: 3 },
    { width: 768, itemsToShow: 4 },
    { width: 1020, itemsToShow: 5 },
  ];
  return (
    <div>
      <div className="flex justify-between px-5 my-14 bg-red h-14 border-b-2 border-secondary">
        <h1 className="font-extrabold flex font-nunito text-blue-900 text-4xl">
            <span className="mx-2"><AiIcons.AiOutlineThunderbolt/></span>
          Latest / Notable Drops
        </h1>
        <h2 className="font-nunito text-2xl">
          View all
          <span></span>
        </h2>
      </div>
      <Carousel breakPoints={breakPoints} enableAutoPlay autoPlaySpeed={1300}>
        {DropsData.map((item, index) => {
            <Card
              key={index}
              className="border-blue border-3 py-3 flex justify-center w-64"
              height="400px"
            >
              <div>
                <div className="bg-blue-600 h-48 w-48 rounded-xl relative">
                  <img
                    className="w-full h-full rounded-xl"
                    src={item.nft}
                    alt=""
                  />
                </div>
                <h1>{item.nftName}</h1>
                <div className="flex">
                  <img src={item.collectorImage} alt="" />
                  <h1>{item.collectorName}</h1>
                </div>
              </div>
            </Card>
        })}
      </Carousel>
    </div>
  );
};

export default Drops;
