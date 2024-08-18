export const getCurrentDateFormatted = ():string => {
  const monthNames = [
    "January", "February", "March", "April", 
    "May", "June", "July", "August", "September", 
    "October", "November", "December"
  ];

  const now = new Date();

  const day = now.getDate();
  const monthIndex = now.getMonth();
  const year = now.getFullYear();

  const monthName = monthNames[monthIndex];

  return `${monthName} ${day}, ${year}`;
};