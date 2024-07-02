// src/algorithms/fcfs.js
export const FCFS = (requests, head) => {
  const positions = [];
  const seekTimes = [];
  let current_position = head;

  requests.forEach((request) => {
    positions.push(request);
    seekTimes.push(Math.abs(current_position - request));
    current_position = request;
  });

  return { positions, seekTimes };
};
