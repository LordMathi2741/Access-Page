import React from 'react';
import Image from "next/image";
import Cylinder from "../../../assets/cylinder.jpeg"
import OperationCenter from '../../../assets/operation-center.jpeg'
import Link from "next/link";
export function OptionsNavigation(){
    return(
        <div className="flex flex-col lg:flex-row justify-center items-center gap-9 p-10 lg:p-20 ">
            <Link className={"hover: scale-110 hover:cursor-pointer hover:border-2 hover:border-black hover:rounded-lg duration-200"} href={"http://38.25.38.94:5173/#/"}>
                <Image className={"min-w-52"} height={200}  src={Cylinder} alt={"Cylinder Option"}/>
            </Link>
            <Link className={"hover: scale-110 hover:cursor-pointer hover:border-2 hover:border-black hover:rounded-lg duration-200"} href={"http://38.25.38.94:5260/"}>
                <Image className={"min-w-52"} height={200}  src={OperationCenter} alt={"Operation Center Option"}/>
            </Link>
        </div>
    )
}