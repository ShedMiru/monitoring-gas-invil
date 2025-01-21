import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import Image from "next/image";

export default function Kartu({label, value, unit, imgSource}) {
  return (
    <Card className="grid gap-1 border-2 border-[#355F2E] rounded-3xl bg-[#A9E06D]">
      <div className="flex justify-center text-3xl font-bold" >
        <h1>
          {label}
        </h1>
      </div>
      <div>
        <div className="flex justify-center">
          <Image
            aria-hidden
            src={imgSource}
            alt="Tekanan icon"
            width={120}
            height={120}
          />
        </div>
        <div className="bg-black m-2 rounded-full text-white text-3xl font-medium">
          <h1>
            {value}{unit}
          </h1>
        </div>
      </div>
    </Card>
  );
}