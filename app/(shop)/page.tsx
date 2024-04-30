import Image from "next/image";
import {montserratFont} from '@/config/fonts';

export default function Home() {
  return (
    <div className="">
     <h1>Hola jairo</h1>
     <h1 className={ `${montserratFont.className} font-bold`} >Hola jairo</h1>
    </div>
  );
}
