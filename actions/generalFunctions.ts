export function Str_Random(length: number) {
        let result = '';
        const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
        
        // Loop to generate characters for the specified length
        for (let i = 0; i < length; i++) {
            const randomInd = Math.floor(Math.random() * characters.length);
            result += characters.charAt(randomInd);
        }
        return result;
}

// export function formatRibuan(amount: number): string {
//   return new Intl.NumberFormat("id-ID", {
//     minimumFractionDigits: 0,
//     maximumFractionDigits: 0,
//   }).format(amount);
// }
export function formatRibuan(amount: number | string): string {
  const numericValue = Math.round(Number(amount) || 0);
  return numericValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
