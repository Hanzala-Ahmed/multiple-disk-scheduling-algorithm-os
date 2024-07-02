// src/algorithms/clook.js
export const CLOOK = (requests, head) => {
  const positions = [];
  const seekTimes = [];
  let current_position = head;
  let sorted_requests = [...requests].sort((a, b) => a - b);
  let index = sorted_requests.findIndex((value) => value >= head);

  // Move right first
  for (let i = index; i < sorted_requests.length; i++) {
    positions.push(sorted_requests[i]);
    seekTimes.push(Math.abs(current_position - sorted_requests[i]));
    current_position = sorted_requests[i];
  }
  // Jump to the smallest request larger than the initial head position
  if (index > 0) {
    positions.push(sorted_requests[0]);
    seekTimes.push(Math.abs(current_position - sorted_requests[0]));
    current_position = sorted_requests[0];
    for (let i = 1; i < index; i++) {
      positions.push(sorted_requests[i]);
      seekTimes.push(Math.abs(current_position - sorted_requests[i]));
      current_position = sorted_requests[i];
    }
  }

  return { positions, seekTimes };
};
