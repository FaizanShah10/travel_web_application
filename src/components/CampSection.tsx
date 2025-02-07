const CampCard = () => {
  return (
    <>
      <img className="w-full h-full object-cover" src="./img-1.png" alt="Camp Image" />

      <div className="absolute top-4 left-4 lg:left-8 text-white  text-lg">
        <p className="font-bold">Putuk Truno Camp</p>
        <p className="text-sm">Prigen, Pasuruan</p>
      </div>

      <div className="absolute bottom-4 left-4 lg:left-8 text-white text-sm flex items-center space-x-4">
        <div className="flex">
          <img className="w-8 h-8 rounded-full border-0 border-white" src="./person-1.png" alt="User 1" />
          <img className="w-8 h-8 rounded-full border-0 border-white -ml-2" src="./person-2.png" alt="User 2" />
          <img className="w-8 h-8 rounded-full border-0 border-white -ml-2" src="./person-3.png" alt="User 3" />
        </div>
        <span className="font-semibold">50+ Joined</span>
      </div>
    </>
  )
}




const CampSection = () => {
  return (
    <div className="w-[100vw] h-auto mt-20 px-1">
      {/* Scrollable Wrapper */}
      <div 
        className="flex px-1 lg:px-32 md:px-32 gap-8 overflow-x-auto whitespace-nowrap snap-x snap-mandatory scroll-smooth hide-scrollbar"
      >
        {/* Camp Cards */}
        {[...Array(5)].map((_, index) => (
          <div 
            key={index} 
            className="min-w-[300px] lg:min-w-[70vw] h-[220px] lg:h-[75vh] bg-gray-200 rounded-2xl overflow-hidden relative snap-center"
          >
            <CampCard/>
          </div>
        ))}
      </div>

      {/* Section Below Scrollable Content */}
      <div className="flex justify-end">
        <div className="h-[25vh] lg:h-[50vh] w-full lg:w-[40vw] z-10 relative bg-green-600 text-white px-6 py-2 rounded-3xl mt-8 lg:-mt-60 lg:mr-16">
          <h2 className="lg:text-[4vw] text-[8vw] lg:leading-[4vw] leading-[7vw] lg:pt-10 pt-2 mb-6">
            <strong>Feeling Lost</strong> And Not Knowing The Way?
          </h2>
          <p className="text-sm lg:w-[30vw]">
            Starting from the anxiety of the climbers when visiting a new climbing location, the possibility of getting lost is very large. That's why we are here for those of you who want to start an adventure.
          </p>
        </div>
      </div>
    </div>
  );
};



export default CampSection;
