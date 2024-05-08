import { Redirect, Route, RouteComponentProps } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { useLocation } from 'react-router-dom';
/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
// Main CSS and TailwindCSS
import "./theme/main.css";

import Icon from "./components/Icon";

import Home from "./pages/Home";
import Schedule from "./pages/ScheduleP";
import Payment from "./pages/PaymentP";
import RealTime from "./pages/Realtime";
import Profile from "./pages/Profile";
import ScheduleLists from "./pages/ScheduleLists";
import PaymentCards from "./pages/PaymentCards";
import BuyPass from './pages/BuyPass'
import { useEffect, useState } from "react";

const pages =
  [
    { name: "Home", path: '/home', component: Home, icon: "br-home" },
    { name: "Schedule Page", path: '/schedule', component: Schedule, icon: "br-car-journey" },
    { name: "Payment Page", path: '/payment', component: Payment, icon: "br-wallet" },
    { name: "RealTime", path: '/realtime', component: RealTime, icon: "br-land-location" },
    { name: "Profile", path: '/profile', component: Profile, icon: "br-admin-alt" },
    { name: "BuyPass", path: '/BuyPass', component: BuyPass, icon: "" },
    { name: "PaymentCards", path: '/PaymentCards', component: PaymentCards, icon: "" },
  ];
const buttons = [
  { name: "Home", path: '/home', component: Home, icon: "br-home" },
  { name: "Schedule Page", path: '/schedule', component: Schedule, icon: "br-car-journey" },
  { name: "Payment Page", path: '/payment', component: Payment, icon: "br-wallet" },
  { name: "RealTime", path: '/realtime', component: RealTime, icon: "br-land-location" },
  { name: "Profile", path: '/profile', component: Profile, icon: "br-admin-alt" },
]
setupIonicReact();

setupIonicReact();
const App: React.FC = () => {
  // let currentColor;
  // let color = ["text-light-blue", "text-orange", "text-orange", "text-orange", "text-orange"];
  const [change, setChange] = useState(0);
  const [color, setColor] = useState(["text-light-blue", "text-orange", "text-orange", "text-orange", "text-orange"]);
  useEffect(() => {
    // Function to update color based on the current URL
    const updateColor = () => {
      const path = window.location.pathname;
      console.log(path);
      const newColor = color.map((_, idx) => (pages[idx].path === path ? "text-light-blue" : "text-orange"));

      setColor(newColor);
    };

    // Call the updateColor function when the component mounts and when the URL changes
    updateColor();
    window.addEventListener('popstate', updateColor);

    return () => window.removeEventListener('popstate', updateColor); // Cleanup on unmount
  }, [change,]);

  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            {pages.map((page, index) => (
              <Route key={index} path={page.path} >
                <page.component />
              </Route>
            ))}
            {/* <Route path={"/realtime/:id"} exact>
              <RealTime />
            </Route> */}
            <Route>
              <Redirect to="/home" />
            </Route>
          </IonRouterOutlet>
          <IonTabBar slot="bottom" className={`py-2 bg-blue `} id="tabs">
            {buttons.map((page, idx) => (
              <IonTabButton
                key={idx}
                tab={page.path}
                href={page.path}
                className="bg-blue"
                onClick={() => { setChange(idx) }}
              >
                <Icon name={page.icon} className={`text-2xl ${color[idx]}`} />
              </IonTabButton>
            ))}
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
