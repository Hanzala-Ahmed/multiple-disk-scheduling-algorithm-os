// src/algorithms/sstf.js
export const SSTF = (requests, head) => {
  const positions = [];
  const seekTimes = [];
  let current_position = head;
  let remaining = [...requests];

  while (remaining.length > 0) {
    const closest = remaining.reduce((prev, curr) =>
      Math.abs(curr - current_position) < Math.abs(prev - current_position) ? curr : prev
    );
    positions.push(closest);
    seekTimes.push(Math.abs(current_position - closest));
    current_position = closest;
    remaining = remaining.filter((item) => item !== closest);
  }

  return { positions, seekTimes };
};
