import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import Image from "next/image";

export default function Kartu({ label, value, unit, imgSource, imgSize }) {
  return (
    <Card className="flex items-center justify-center border-4 border-[#355F2E] rounded-3xl bg-[#A9E06D]">
      {/* desktop */}
      <div className="hidden items-center w-4/5 sm:grid sm:grid-rows-[35px_115px_1fr] gap-1">
        <div className="flex justify-center text-3xl font-bold text-black" >
          <h1>
            {label}
          </h1>
        </div>
        <div>
          <div className="flex justify-center">
            <Image
              aria-hidden
              src={imgSource}
              alt="icon"
              width={imgSize}
              height={imgSize}
            />
          </div>
        </div>
        <div className="bg-black m-2 rounded-full text-white text-3xl font-medium">
          <h1>
            {value}{unit}
          </h1>
        </div>
      </div>
      {/* mobile */}
      <div className="sm:hidden flex items-center px-3 w-11/12 gap-3">
        <div className="flex w-1/5 justify-center items-center">
          <div className="m-1 size-[90%]">
            <Image
              aria-hidden
              src={imgSource}
              alt="icon"
              width={imgSize}
              height={imgSize}
            />
          </div>
        </div>
        <div className="grid w-3/6">
          <div className="flex text-2xl font-bold text-black" >
            <h1>
              {label}
            </h1>
          </div>
          <div className="bg-black m-2 rounded-full text-white text-xl font-medium">
            <h1>
              {value}{unit}
            </h1>
          </div>
        </div>
      </div>
    </Card>
  );
}