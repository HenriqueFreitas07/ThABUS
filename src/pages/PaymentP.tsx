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
import PassCard from "../components/PassCard";
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

const busPasses = [
  {
    zone: "Zone 1",
    valid: "02/12",
  },
  {
    zone: "Zone 2",
    valid: "02/12",
  },
  {
    zone: "Zone 3",
    valid: "02/12",
  },
  {
    zone: "Zone 4",
    valid: "02/24",
  },
];

const PaymentP: React.FC = () => {
  const [activeSegment, setActiveSegment] = useState(0); // 0 for 'Tickets', 1 for 'Pass'
  const [paymentMethod, setPaymentMethod] = useState(0); // 0 for 'Tickets', 1 for 'Pass'

  const handleSegmentChange = (v: number) => {
    setActiveSegment(v);
  };

  const handlePaymentMethod = (method: number) => {
    setPaymentMethod(method);
  };
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
                className={` bg-blue ${
                  paymentMethod == idx ? "border-2 shandow-2xl" : ""
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
          </div>
        </div>
        <div className={`w-full h-screen relative ${activeSegment == 0 ? "hidden" : ""} p-5`}>
          {/* Pass */}

            {
              // Passes
              busPasses.map((pass, idx) => (
                <div className={`absolute z-${idx+1} top-3 left-[50%] translate-x-[-50%]  translate-y-[ ${(idx+1)*10}px ] h-fit w-4/5 shadow-lg`} >
                  <PassCard key={idx} zone={pass.zone} valid={pass.valid} className="" />
                </div>
              ))
            }
        </div>
      </IonContent>
    </IonPage>
  );
};

export default PaymentP;
