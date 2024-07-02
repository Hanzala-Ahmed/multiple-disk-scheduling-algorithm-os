// src/algorithms/cscan.js
export const CSCAN = (requests, head, diskSize = 200) => {
  const positions = [];
  const seekTimes = [];
  let current_position = head;
  let sorted_requests = [...requests, diskSize - 1, 0].sort((a, b) => a - b);
  let index = sorted_requests.findIndex((value) => value >= head);

  // Move right first, then jump to start
  for (let i = index; i < sorted_requests.length; i++) {
    positions.push(sorted_requests[i]);
    seekTimes.push(Math.abs(current_position - sorted_requests[i]));
    current_position = sorted_requests[i];
  }
  if (index > 0) {
    positions.push(0); // Jump to the start
    seekTimes.push(Math.abs(current_position - 0));
    current_position = 0;
    for (let i = 1; i < index; i++) {
      positions.push(sorted_requests[i]);
      seekTimes.push(Math.abs(current_position - sorted_requests[i]));
      current_position = sorted_requests[i];
    }
  }

  return { positions, seekTimes };
};
