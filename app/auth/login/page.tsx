import Image from "next/image";
import {montserratFont} from '@/config/fonts';

export default function Home() {
  return (
    <div className="">
     <h1 className={ `${montserratFont.className} font-bold`} >Login page</h1>
    </div>
  );
}
