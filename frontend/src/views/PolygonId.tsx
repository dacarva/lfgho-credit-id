const PolygonId = () => {
  const handleClick = () => {
    console.log("Button clicked");
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleClick}
      >
        Click Me
      </button>
    </div>
  );
};

export default PolygonId;
