import { CarProps } from "@/types";
import { FilterProps } from "@/types";


export async function fetchCars( filters : FilterProps ) {
    const { manufacturer, year, model, limit, fuel } = filters
    
    let ma = `${manufacturer ? `make=${manufacturer}&`: ''}`
    let mo = `${model ?`model=${model}&` : '' }`
    let y = `${year ?`year=${year}&` : '' }`
    let f = `${fuel ?`fuel_type=${fuel}&` : '' }`
    
    let url = `http://localhost:3500/items?${ma}${mo}${y}${f}_limit=${limit}`    
  
    const response = await fetch (  url, { cache : 'no-store' } )

    const result = await response.json()

    return result
}
  
export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50; 
    const mileageFactor = 0.1; 
    const ageFactor = 0.05; 
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;
  
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;
  
    return rentalRatePerDay.toFixed(0);
}

export const generateCarImageUrl = (car: CarProps, angle?: string) => {
    const url = new URL("https://cdn.imagin.studio/getimage");
    const { make, model, year } = car;
  
    url.searchParams.append('customer', process.env.NEXT_PUBLIC_IMAGIN_API_KEY || '');
    url.searchParams.append('make', make);
    url.searchParams.append('modelFamily', model.split(" ")[0]);
    url.searchParams.append('zoomType', 'fullscreen');
    url.searchParams.append('modelYear', `${year}`);
    // url.searchParams.append('zoomLevel', zoomLevel);
    url.searchParams.append('angle', `${angle}`);
  
    return `${url}`;
  } 

export const updateSearchParams = (type : string, value : string) => {
    const searchParams = new URLSearchParams(window.location.search)

    searchParams.set(type, value)

    const newPathname = `${window.location.pathname}?${searchParams.toString()}`

    return newPathname
}




