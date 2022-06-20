
import './App.css';

function App() {
  return (
    <div className='grid place-items-center h-96 mt-20 mx-7'>
      <img src="/1.png" alt="yuy" className='object-scale-down h-48 w-96'></img>
      <h1 className='text-4xl underline underline-offset-2 mb-4 font-extrabold'>yuyma</h1>
      <div className='grid grid-cols-2'>
        <a className="border-2 font-light border-black rounded-xl p-2 mr-6 text-sm mb-3" href="https://github.com/gungyusma">Github</a>
        <a className="border-2 font-light border-black rounded-xl p-2 text-sm mb-3" href="https://www.linkedin.com/in/savitri-maharani/">Linkedin</a>
      </div>
      <a className="text-center border-2 font-light border-black rounded-xl p-2 text-sm mb-3" href="https://instagram.com/yusmasv">you better follow me on this one</a>
      <p className="text-center">Mail me : yusmagung@gmail.com</p>
      <p> </p>
    </div>
  );
}

export default App;
