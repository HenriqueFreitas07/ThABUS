import {
  IonContent,
  IonHeader,
  IonLabel,
  IonPage,
  IonSegment,
  IonSegmentButton,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useState } from "react";
import Icon from "../components/Icon";
import PassCard from "../components/PassCardIn";
import PassSlider from "../components/PassSlideIn";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";


const paymentMethods = [
  {
    name: "João Quintão",
    number: "1234 5678 9101 1121",
    date: "12/22",
    icon: "brands-visa",
  },
  {
    name: "João Quintão",
    number: "1234 5678 9101 1121",
    date: "12/22",
    icon: "br-credit-card",
  },
  {
    name: "João Quintão",
    number: "23,34€",
    date: "",
    icon: "brands-paypal",
  },
];

const passCards = [
  {
    id: 1,
    zone: "Linha 1",
    valid: "15/06/2024",
  },
  {
    id: 2,
    zone: "Linha 2",
    valid: "15/06/2024",
  },
  {
    id: 3,
    zone: "Linha 3",
    valid: "15/05/2024",
  },
  {
    id: 4,
    zone: "Litoral",
    valid: "15/06/2024",
  },
];

const PaymentP: React.FC = () => {
  const [activeSegment, setActiveSegment] = useState(0); // 0 for 'Tickets', 1 for 'Pass'
  const [paymentMethod, setPaymentMethod] = useState(0); // 0 for 'Tickets', 1 for 'Pass'
  const [activeIndex, setActiveIndex] = useState(passCards.length / 2);
  const [selectedCard, setSelectedCard] = useState(-1);
  const handleSegmentChange = (v: number) => {
    setActiveSegment(v);
  };
  const history = useHistory();
  const handlePaymentMethod = (method: number) => {
    setPaymentMethod(method);
  };


  const changeFocus = (index: number) => {
    if (index == activeIndex) {
      // open details of the card on the same page
      if (selectedCard == index) {
        setSelectedCard(-1)
        return;
      }
      setSelectedCard(index)
      return;
    }
    setActiveIndex(index)
    setSelectedCard(-1)
  }

  return (
    <IonPage className="">
      <IonContent fullscreen className="p-2">
        <IonSegment
          color="warning"
          value={activeSegment.toString()}
          className="px-6 pt-20 "
          swipeGesture={true}
        >
          <IonSegmentButton
            onClick={() => {
              handleSegmentChange(0);
            }}
            value="0"
          >
            <IonLabel>Tickets</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton
            onClick={() => {
              handleSegmentChange(1);
            }}
            value="1"
          >
            <IonLabel>Pass</IonLabel>
          </IonSegmentButton>
        </IonSegment>
        <div className={`w-full h-full ${activeSegment == 1 ? "hidden" : ""}`}>
          {/* Tickets */}
          <div className="w-full px-7 justify-center text-center">
            <img src="/images/qrcode.png" className="w-5/6 mx-auto" alt="" />
            <div className="w-4/6 rounded-md h-0 border-[1px] mx-auto border-black mb-2" />
            acf08a99-f0ef-4d22-a174
          </div>
          <div className="p-4 justify-center">
            <div className="w-fit flex text-center mx-auto mt-4 ">
              <div className="text-2xl flex  mx-3 my-auto ">
                <Icon
                  name="brands-paypal"
                  className="text-orange text-2xl my-auto mx-3"
                />
                Payment Method
              </div>
            </div>
            <div className="w-5/6 rounded-md h-0 border-[1px] mx-auto border-light-blue my-3 " />
            {/* Cards for payment */}
            {paymentMethods.map((method, idx) => (
              <div
                key={idx}
                onClick={() => {
                  handlePaymentMethod(idx);
                }}
                className={` bg-blue ${paymentMethod == idx ? "border-2 shandow-2xl" : ""
                  } rounded-md border-orange w-5/6 p-2 mx-auto my-2 columns-2  grid-flow-col flex`}
              >
                <div className="grid-rows-2 w-full h-full grid-flow-row inline-block text-white">
                  <div className="w-full my-auto mx-auto px-2 flex relative ">
                    <Icon
                      name={method.icon}
                      className="text-white text-3xl my-auto"
                    />
                  </div>
                  <div className="w-full my-auto mx-auto py-1 flex">
                    <div className="p-2 py-0 text-[0.9rem]">{method.name}</div>
                  </div>
                </div>
                <div className="w-full grid-rows-2 inline-block grid-flow-row text-white px-2">
                  <div className="aligh-middle h-1/2 w-full text-md truncate text-end ">
                    {method.number}
                  </div>
                  <div className="aligh-middle h-1/2 w-full text-end">
                    <div className="text-md py-1">{method.date}</div>
                  </div>
                </div>
              </div>
            ))}
            <div
               onClick={(e )=>{e.preventDefault(); history.push("/PaymentCards")}}
              className={` bg-light-blue-200 border-blue border-2 rounded-md w-4/5 h-full text-center text-blue my-2 p-2 mx-auto`}
            >
              <Icon name="br-plus" className="mx-auto p-1" />
            </div>

          </div>
        </div>
        <div className={`w-full h-full relative ${activeSegment == 0 ? "hidden" : ""} p-5`}>
          {/* Pass */}
          <div className={`w-full h-fit p-3 my-3 flex justify-center items-center ${selectedCard == -1 ? "" : "hidden"}`}>
            <div className="text-2xl flex  mx-3 my-auto ">
              <Icon
                name="br-id-card-clip-alt"
                className="text-orange text-2xl my-auto mx-3"
              />
              Select a Pass
            </div>
          </div>
          <div
             onClick={(x )=>{x.preventDefault(); history.push("/BuyPass")}}
            className={`w-full bg-transparent text-blue border-blue border-2 text-xl text-center p-3 my-4 rounded-md hover:shadow-md ${selectedCard == -1 ? "" : "hidden"}`}>
            <Icon name="br-plus" className="mx-auto" />
          </div>
          {/* Passes */}
          <div
            className={`w-full  overflow-clip relative p-5 py-0`}
            style={{ height: `${selectedCard == -1 ? "75%" : "33%"}` }}
          >
            {passCards.map((item, idx) => (
              <div
                key={idx}
                className={`w-11/12 origin-center overflow-hidden shadow-xl rounded-md border-3 border-white h-fit absolute text-white bg-blue ${selectedCard == -1 ? "top-[50%]" : "top-0"} transition-all`}
                style={{
                  scale: `${1 - (0.1 * Math.abs(idx - activeIndex))}`,
                  zIndex: `${passCards.length - Math.abs(activeIndex - idx)}`,
                  opacity: `${selectedCard == -1 ? 1 - (0.4 * Math.abs(activeIndex - idx)) : (selectedCard == idx ? 1 : 0)}`,
                  transform: `${selectedCard == -1 ? `translateY(${((50 * ((idx - activeIndex)) - 50))}%)` : (selectedCard == idx ? 'translateY(0%)' : 0)}`,
                  transformOrigin: "center",
                }}
                onClick={() => { changeFocus(idx) }}
              >
                <PassCard id={idx} zone={item.zone} valid={item.valid} />
              </div>
            ))}
          </div>


          <div
            className={`w-full px-7 justify-center text-center ${selectedCard == -1 ? 'hidden' : ''}`} >
            <div className="justify-center flex flex-col text-center">
              <Icon name="br-angle-small-up" className="text-gray mx-auto" />
              <div className="text-gray">
                Click to Back
              </div>
            </div>
            <img src="/images/qrcode.png" className="w-5/6 mx-auto" alt="" />
            <div className="w-4/6 rounded-md h-0 border-[1px] mx-auto border-black mb-2" />
            acf08a99-f0ef-4d22-a174
          </div>
          <div className={`h-full pb-24 text-center ${selectedCard == -1 ? 'hidden' : ''}`}>
            <img className="m-3 mx-auto h-full " src={`images/MapaRede/L0${passCards[selectedCard]?.id}.png`} alt="" />
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default PaymentP;
