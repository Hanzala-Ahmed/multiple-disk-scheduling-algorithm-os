// src/App.js
import React, { useState } from 'react';
import { CSCAN } from './algorithms/cscan';
import SeekChart from './Components/SeekChart';
import './App.css';
import { FCFS } from './algorithms/fcfs';
import { SSTF } from './algorithms/sstf';
import { SCAN } from './algorithms/scan';
import { LOOK } from './algorithms/look';
import { CLOOK } from './algorithms/c-look';

function App() {
  const [input, setInput] = useState('');
  const [seekSequence, setSeekSequence] = useState([]);
  const [algorithm, setAlgorithm] = useState('C-SCAN');
  const [head, setHead] = useState(50);
  const [seekTime, setSeekTime] = useState(null);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const requests = input.split(',').map(Number);
  //   const result = CSCAN(requests, head);
  //   console.log('result', result.positions);
  //   setSeekSequence(result.positions);
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
    const requests = input.split(',').map(Number);
    let result;

    switch (algorithm) {
      case 'FCFS':
        result = FCFS(requests, head);
        break;
      case 'SSTF':
        result = SSTF(requests, head);
        break;
      case 'SCAN':
        result = SCAN(requests, head); // Assuming disk size is 200
        break;
      case 'C-SCAN':
        result = CSCAN(requests, head); // Assuming disk size is 200
        break;
      case 'LOOK':
        result = LOOK(requests, head);
        break;
      case 'C-LOOK':
        result = CLOOK(requests, head);
        break;
      default:
        result = { seek_sequence: [] };
        break;
    }

    const totalSeekTime = result.seekTimes.reduce((acc, time) => acc + time, 0);
    console.log('result', result.positions, totalSeekTime);

    setSeekSequence(result.positions);
    setSeekTime(totalSeekTime);
  };

  return (
    <div className='Body'>
      <div className='w-full h-screen grid grid-cols-2'>
        <div className='border-r-2 border-white flex flex-col items-center justify-center text-center gap-9'>
          <h1 className='text-center font-extrabold text-5xl text-white'>
            {`${algorithm} Disk Scheduling Simulator`}
          </h1>
          <select
            className='rounded-xl text-black p-4 ml-2 outline-none border-none'
            value={algorithm}
            onChange={(e) => setAlgorithm(e.target.value)}>
            <option value='FCFS'>FCFS</option>
            <option value='SSTF'>SSTF</option>
            <option value='SCAN'>SCAN</option>
            <option value='C-SCAN'>C-SCAN</option>
            <option value='LOOK'>LOOK</option>
            <option value='C-LOOK'>C-LOOK</option>
          </select>
          <form onSubmit={handleSubmit} className='flex flex-col items-center justify-center gap-1'>
            <label className='text-white text-2xl '>
              Request Sequence (comma separated):
              <input
                className='rounded-xl text-black px-2 ml-2'
                type='text'
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
            </label>
            <br />
            <label className='text-white text-2xl'>
              Initial Head Position:
              <input
                className='rounded-xl text-black px-2 ml-2'
                type='number'
                value={head}
                onChange={(e) => setHead(Number(e.target.value))}
              />
            </label>
            <br />
            <button
              className='text-white text-2xl border-2 border-white rounded-xl p-2'
              type='submit'>
              Calculate
            </button>
          </form>
        </div>
        <div className='flex flex-col items-center justify-center text-white w-full'>
          {seekTime && (
            <div className='w-full p-4 flex gap-2 justify-center items-center mb-10 text-2xl'>
              <p className='font-bold text-3xl'>Seek Time:</p>
              <p>{seekTime}</p>
            </div>
          )}
          {seekSequence.length > 0 && <SeekChart seekSequence={seekSequence} />}
        </div>
      </div>
    </div>
  );
}

export default App;

// src/App.js
// import React, { useState } from 'react';
// import SeekChart from './Components/SeekChart';
// import './App.css';
// import { FCFS } from './algorithms/fcfs';
// import { SSTF } from './algorithms/sstf';
// import { SCAN } from './algorithms/scan';
// import { CSCAN } from './algorithms/cscan';

// function App() {
//   const [input, setInput] = useState('');
//   const [algorithm, setAlgorithm] = useState('C-SCAN');
//   const [seekSequence, setSeekSequence] = useState([]);
//   const [head, setHead] = useState(50);

// const handleSubmit = (e) => {
//   e.preventDefault();
//   const requests = input.split(',').map(Number);
//   let result;

//   switch (algorithm) {
//     case 'FCFS':
//       result = FCFS(requests, head);
//       break;
//     case 'SSTF':
//       result = SSTF(requests, head);
//       break;
//     case 'SCAN':
//       result = SCAN(requests, head, 200); // Assuming disk size is 200
//       break;
//     case 'CSCAN':
//       result = CSCAN(requests, head, 200); // Assuming disk size is 200
//       break;
//     default:
//       result = { seek_sequence: [] };
//       break;
//   }

//   setSeekSequence(result.seek_sequence);
// };

//   return (
//     <div className='Body'>
//       <div className='w-full h-screen grid grid-cols-2'>
//         <div className='border-r-2 border-white flex flex-col items-center justify-center text-center gap-9'>
// <h1 className='text-center font-extrabold text-5xl text-white'>
//   {`${algorithm} Disk Scheduling Simulator`}
// </h1>
// <select
//   className='rounded-xl text-black p-4 ml-2 outline-none border-none'
//   value={algorithm}
//   onChange={(e) => setAlgorithm(e.target.value)}>
//   <option value='FCFS'>FCFS</option>
//   <option value='SSTF'>SSTF</option>
//   <option value='SCAN'>SCAN</option>
//   <option value='C-SCAN'>C-SCAN</option>
// </select>
//           <form onSubmit={handleSubmit} className='flex flex-col items-center justify-center gap-1'>
//             <label className='text-white text-2xl '>
//               Request Sequence (comma separated):
//               <input
//                 className='rounded-xl text-black px-2 ml-2'
//                 type='text'
//                 value={input}
//                 onChange={(e) => setInput(e.target.value)}
//               />
//             </label>
//             <br />
//             <label className='text-white text-2xl'>
//               Initial Head Position:
//               <input
//                 className='rounded-xl text-black px-2 ml-2'
//                 type='number'
//                 value={head}
//                 onChange={(e) => setHead(Number(e.target.value))}
//               />
//             </label>
//             <br />
//             <button
//               className='text-white text-2xl border-2 border-white rounded-xl p-2'
//               type='submit'>
//               Calculate
//             </button>
//           </form>
//         </div>
//         <div className='flex flex-col items-center justify-center'>
//           {seekSequence.length > 0 && <SeekChart seekSequence={seekSequence} />}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;
