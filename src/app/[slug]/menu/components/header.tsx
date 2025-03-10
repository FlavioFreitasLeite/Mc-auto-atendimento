"use client";

import { Button } from "@/components/ui/button";
import { Restaurant } from "@prisma/client";
import { ChevronLeftIcon, ScrollTextIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";


interface RestaurantMenuPageProps {
    restaurant: Pick<Restaurant, "name" | "coverImageUrl">;
}

const restaurantHeader = ({restaurant}: RestaurantMenuPageProps) => {
    const router = useRouter();
    const handleBackClick = () => router.back();
    return ( 
        <div className="relative h-[250px] w-full">
            <Button 
                variant="secondary" 
                size="icon" 
                className="rounded-full absolute top-4 left-4 z-50 roudend-full" 
                onClick={handleBackClick}>
                <ChevronLeftIcon/>
            </Button>
            <Image 
                src={restaurant.coverImageUrl} 
                alt={restaurant.name} 
                fill 
                className="object-cover" 
            />
            <Button variant="secondary" size="icon" className="rounded-full absolute top-4 right-4 z-50 roudend-full">
                <ScrollTextIcon/>
            </Button>
        </div>
     );
}
 
export default restaurantHeader;