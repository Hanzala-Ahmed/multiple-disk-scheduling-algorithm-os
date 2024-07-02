// src/algorithms/scan.js
export const SCAN = (requests, head, diskSize) => {
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
  // Then move left
  for (let i = index - 1; i >= 0; i--) {
    positions.push(sorted_requests[i]);
    seekTimes.push(Math.abs(current_position - sorted_requests[i]));
    current_position = sorted_requests[i];
  }

  return { positions, seekTimes };
};
