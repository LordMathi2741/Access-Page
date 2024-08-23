import React from "react";
import {OptionsNavigation} from "@/app/components/options-navegation.component";
import {FooterContent} from "@/app/public/components/footer-content.component";


export default function Home() {
  return (
      <div>
          <div className="flex justify-between w-full">
              <div className="wave-bg w-6/12 xl:w-5/12 py-96  text-end text-3xl">
                  <div className="w-60 mx-auto text-green-900 "> CRPC <h1 className="text-white"> Centro de Revisión
                      Periódica de Cilindros</h1></div>
              </div>
              <div
                  className="flex   justify-center flex-col gap-7 items-center text-center  mt-52 font-bold sm:text-md md:text-xl lg:text-2xl mx-auto xl:text-4xl">
                  <h1> Servicio de Hiperfast </h1>
                  <OptionsNavigation/>
              </div>
          </div>
          <FooterContent/>
      </div>
  );
}
