"use client"

import Image from "next/image";
import { useState } from "react";

interface ProductDetailsItemProps {
        imageUrls: string[],
        name: string
}

const ProductDetailsItem = ({imageUrls, name}: ProductDetailsItemProps) => {

    const [currentProductImage, setCurrentProductImage] = useState(imageUrls[0])


    const handleImageChange = (imageUrl: string) => {
        setCurrentProductImage(imageUrl)
    }
    return ( 
        <div className="flex flex-col">
            
            <div className="flex items-center justify-center bg-accent h-[380px]">
               <Image src={currentProductImage} alt={name} width={0} height={0} sizes="100vw" className="h-auto max-h-[70%] w-auto max-w-[80%] object-contain" /> 
            </div>
            
            <div className="flex justify-center gap-4 p-4">
                {
                    imageUrls.map((imageUrl) => {
                        return (
                            
                            <button onClick={() => handleImageChange(imageUrl)} className={`flex bg-accent items-center justify-center h-[75px] w-full rounded-xl ${imageUrl === currentProductImage ? "border-2 border-primary" : ""}`} key={imageUrl}>
                                <Image src={imageUrl} alt={name} width={0} height={0} sizes="100vw" className="h-auto max-h-[70%] w-auto max-w-[80%] object-contain" />
                            </button>
                        )
                    })
                }
            </div>
        </div>
     );
}
 
export default ProductDetailsItem;