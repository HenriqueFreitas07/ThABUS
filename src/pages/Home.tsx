import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Icon from '../components/Icon';
import Carousel from '../components/Carousel';
import Card from '../components/Card';

const Home: React.FC = () => {
  const items = [
    Card({ title: "Aveiro Bus Stop", subtitle: "", description: "Aveiro City Buses has reached its maximum capacity at Forum Aveiro Stop", image: "images/istockphoto-1371319562-612x612.jpg", className: "mt-2", classContent: "bg-light-blue p-3" }),
    Card({ title: "Aveiro Bus Stop", subtitle: "", description: "Aveiro City Buses has reached its maximum capacity at Forum Aveiro Stop", image: "images/istockphoto-1371319562-612x612.jpg", className: "mt-2", classContent: "bg-light-blue p-3" }),
    Card({ title: "Aveiro Bus Stop", subtitle: "", description: "Aveiro City Buses has reached its maximum capacity at Forum Aveiro Stop", image: "images/istockphoto-1371319562-612x612.jpg", className: "mt-2", classContent: "bg-light-blue p-3" }),]
  return (
    <IonPage>
      <IonContent fullscreen className=''>

        {/* content */}
        <div className='h-1/5 overflow-hidden rounded-br-lg rounded-bl-lg shadow-lg relative '>
          <img
            src="images/istockphoto-1161674685-612x612.jpg"
            className='w-full absolute -translate-y-6'
            alt="backgroundBus" />
        </div>
        <div className="w-screen p-2 text-center ">
          <div className='w-full flex text-center justify-start mt-3 pl-7'>
            <Icon name='br-info' className='text-orange text-2xl my-auto' />
            <div className='text-2xl mx-3 my-auto '>
              Announcements
            </div>
          </div>
          <div className='w-5/6 rounded-md h-0 border-[1px] mx-auto border-light-blue ' />
          <Carousel items={items} />
          <div className='w-full flex text-center justify-start mt-6 pl-7'>
            <Icon name='br-track' className='text-orange text-2xl my-auto' />
            <div className='text-2xl mx-3 my-auto '>
              Last Routes
            </div>
          </div>
          <div className='w-2/3 rounded-md h-0 border-[1px] mx-auto border-light-blue ' />

          <div className='bg-light-blue border border-2 rounded-md border-orange w-4/5 p-2 mx-auto my-2 columns-2 min-h-[110px] grid-flow-col flex'>
            <div className="grid-rows-3 w-full h-full grid-flow-row inline-block ">
              <div className="w-full my-auto mx-auto py-1 px-2 flex">
                <Icon name="br-marker" className='text-orange text-xl my-auto' />
                <div className='p-2 py-0'>
                  Origin
                </div>
              </div>
              <div className="w-full">
                <Icon name="br-tally-1" className='text-orange text-xl my-auto ml-4' />
              </div>
              <div className="w-full my-auto mx-auto py-1 px-2 flex">
                <Icon name="br-land-layer-location" className='text-orange text-xl my-auto' />
                <div className='p-2 py-0'>
                  Destination
                </div>
              </div>
            </div>
            <div className="w-full grid-rows-2 inline-block grid-flow-row">
              <div className="w-full">
              HH:MM, Weekday
              </div>
              <div className="w-full">
              ID iter
              </div>
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
