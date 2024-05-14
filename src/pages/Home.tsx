import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonDatetimeButton } from '@ionic/react';
import Icon from '../components/Icon';
import Carousel from '../components/Carousel';
import Card from '../components/Card';

const Home: React.FC = () => {
  const items = [
    Card({ title: "Praça do Peixe", subtitle: "", description: "Accident reported nearby. Expect delays.", image: "https://img.bndlyr.com/nbyjuvbof/_assets/nc60zgphsqn5upv1gqspm.jpg?fit=fill&w=1536&q=100", className: "mt-2", classContent: "text-md bg-orange p-3 text-white" }),
    Card({ title: "Forum Aveiro", subtitle: "", description: "Heavy rain. Drive with caution.", image: "https://www.mundicenter.pt/folder/galeria/ficheiro/133_galeria_aveiro_3_2023_n4hhwfpkjz.jpg", className: "mt-2", classContent: "text-md bg-orange p-3 text-white" }),
    Card({ title: "Ponte do Laço", subtitle: "", description: "Road closed. Diversion in place.", image: "images/istockphoto-1371319562-612x612.jpg", className: "mt-2", classContent: "text-md bg-orange p-3 text-white" }),
    Card({ title: "Sé de Aveiro", subtitle: "", description: "Construction ahead. Expect delays.", image: "images/istockphoto-1371319562-612x612.jpg", className: "mt-2", classContent: "text-md bg-orange p-3 text-white" }),]
  return (
    <IonPage>
      <IonContent fullscreen className=''>

        {/* content */}
        <div className='h-1/5 overflow-hidden rounded-br-lg rounded-bl-lg shadow-lg relative align-middle'>
          <img
            src="images/istockphoto-1161674685-612x612.jpg"
            className='w-full absolute -translate-y-6'
            alt="backgroundBus" />
            <img src="icons/logo.svg" className="z-20 w-20 absolute top-[50%] translate-y-[-50%] ml-3" alt="" />
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
          <div className='w-5/6 rounded-md h-0 border-[1px] mx-auto border-light-blue ' />
          {/* Card */}
          <div className="w-full h-fit py-5 text-center flex justify-center">
            <Icon name='br-info' className='text-gray opacity-50 text-xl my-auto' />
            <div className="p-2 text-gray opacity-50">
              No routes added
            </div>
          </div>
          {/* <RoutesListCard origin='Aveiro,Forum ' destination='Aveiro' time='10:00h, Quarta-feira' id='QW-4720' /> */}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
