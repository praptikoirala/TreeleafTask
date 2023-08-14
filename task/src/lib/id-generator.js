export const  randomAlphanumericValue = () => {
    const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    const charsetLength = charset.length;
  
    for (let i = 0; i < 16; i++) {
      const randomIndex = Math.floor(Math.random() * charsetLength);
      result += charset.charAt(randomIndex);
    }
  
    return result;
  }
  
//   Usage:
//   const randomValue = generateRandomAlphanumericValue(16);
//   console.log(randomValue);
  
  
  
  
  
  
  