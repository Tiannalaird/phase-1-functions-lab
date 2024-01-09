// Code your solution in this file!
function distanceFromHqInBlocks(location) {
    const hqLocation = 42; // Headquarters location at 42nd street
    return Math.abs(location - hqLocation);
  }
  function distanceFromHqInFeet(location) {
    const blockInFeet = 264; // Number of feet in one city block
    const distanceInBlocks = Math.abs(location - 42); // Calculate the distance in blocks
    const distanceInFeet = distanceInBlocks * blockInFeet; // Multiply the distance in blocks by the number of feet in one block
    return distanceInFeet;
  }
  function distanceTravelledInFeet(start, destination) {
    const blockInFeet = 264; // Number of feet in one city block
    const distanceInBlocks = Math.abs(destination - start); // Calculate the distance in blocks
    const distanceInFeet = distanceInBlocks * blockInFeet; // Multiply the distance in blocks by the number of feet in one block
    return distanceInFeet;
  }
  function calculatesFarePrice(start, destination) {
    let dist = distanceTravelledInFeet(start, destination);
    let price = 0;
    const setPrice = 2500;
    if (dist <= 400) {
      price = 0;
      return price;
    } else if (dist <= 2000) {
      price = (dist - 400) * 0.02;
      return price;
    } else if (dist <= 2500) {
      price = setPrice/100;
      return price;
    } else {
      return 'cannot travel that far';
    }
  };
