export const decapitalizeFirstChart = (value: string): string => {  
  return value.charAt(0)?.toLowerCase() + value.slice(1);
}

export const capitalizeFirstChart = (value: string): string => {  
  return value.charAt(0)?.toUpperCase() + value.slice(1);
}