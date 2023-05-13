


function peakIndexInMountainArray(arr: number[]): number {
    const peak = Math.max(...arr)
    return arr.indexOf(peak)

    
};

console.log(peakIndexInMountainArray([0,10,5,2]))