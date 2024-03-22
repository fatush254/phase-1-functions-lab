// Code your solution in this file!
//Question 1
function distanceFromHqInBlocks(pickupLocation) {
    const hqLocation = 42;
  
    const blocksAway = Math.abs(pickupLocation - hqLocation);
  
    return blocksAway;
  }
  
  const pickupBlock = 30;
  const blocksToHq = distanceFromHqInBlocks(pickupBlock);
  console.log(
    'The pickup location is ${blocksToHq} blocks away from  Scuber headquarter.'
  );
  //Question 2
  function distanceFromHqInBlocks(pickupLocation) {
      // Scuber's headquarters is at a fixed location (let's say block number 42)
      const hqLocation = 42;
  
      // Calculate the absolute difference between the pickup location and headquarters
      const blocksAway = Math.abs(pickupLocation - hqLocation);
  
      return blocksAway;
  }
  
  function distanceFromHqInFeet(pickupLocation) {
      // Each block corresponds to a fixed distance in feet (let's say 264 feet per block)
    const feetPerBlock = 264;

    // Calculate the distance in feet using the blocks
    const blocksToHq = distanceFromHqInBlocks(pickupLocation);
    const feetToHq = blocksToHq * feetPerBlock;

    return feetToHq;
}
const pickUpBlock= 30; // Replace with the actual pickup block number
const feetToHq = distanceFromHqInFeet(pickupBlock);
console.log('The pickup location is approximately $ {feetToHq} feet away from Scuber headquarter.}');
function distanceTravelledInFeet(start, destination) {
    // Calculate the difference in blocks
    const blockDifference = Math.abs(destination - start);  {}

    // Each block is 264 feet long
    const feetPerBlock = 264;

    // Calculate the total distance in feet
    const totalDistanceFeet = blockDifference * feetPerBlock;
return totalDistanceFeet;
}
//Question 2
const startBlock = 34;
const endBlock = 38;
const distance = distanceTravelledInFeet(startBlock, endBlock);
console.log('Distance traveled: ${distance} feet');
function calculatesFarePrice(start, destination) {
    // Calculate the difference in blocks
    const blockDifference = Math.abs(destination - start);

    // Each block is 264 feet long
    const feetPerBlock = 264;

    // Calculate the total distance in feet
    const totalDistanceFeet = blockDifference * feetPerBlock;

    // Fare calculation
    if (totalDistanceFeet <= 400) {
        return 0; // First 400 feet are free
    } else if (totalDistanceFeet <= 2000) {
        // Price for distance between 400 and 2000 feet (excluding the initial 400 feet)
        const additionalDistance = totalDistanceFeet - 400;
        const fareCents = additionalDistance * 2; // 2 cents per foot
        return fareCents / 100; // Convert cents to dollars
    } else if (totalDistanceFeet <= 2500) {
        return 25; // Flat fare for distance over 2000 feet and under 2500 feet
    } else {
        return 'cannot travel that far'; // Distance exceeds 2500 feet
    }
}
//Question 4
const StartBlock = 34;
const EndBlock = 38;
const fare = calculatesFarePrice(startBlock, endBlock);
console.log('Fare: $${fare}');
