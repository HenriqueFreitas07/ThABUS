import { Redirect, Route } from "react-router-dom";
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
import { useState } from "react";

const pages = [
  { name: "Home", path: "/home", component: Home, icon: "br-home" },
  {
    name: "Schedule Page",
    path: "/schedule",
    component: Schedule,
    icon: "br-car-journey",
  },
  {
    name: "Payment Page",
    path: "/payment",
    component: Payment,
    icon: "br-wallet",
  },
  {
    name: "RealTime",
    path: "/realtime",
    component: RealTime,
    icon: "br-land-location",
  },
  {
    name: "Profile",
    path: "/profile",
    component: Profile,
    icon: "br-admin-alt",
  },
];
const pages1 = 
  [
    { name:"Home",path: '/home', component: Home, icon: "br-home" },
    { name:"Schedule Page",path: '/schedule', component: Schedule, icon:"br-car-journey" },
    { name:"Payment Page",path: '/payment', component: Payment, icon:"br-wallet" },
    { name:"RealTime",path: '/realtime', component: RealTime, icon:"br-land-location" },
    { name:"Profile",path: '/profile', component: Profile, icon:"br-admin-alt" },
    { name:"ScheduleLists",path: '/ScheduleLists', component: ScheduleLists, icon:"" },
    { name:"BuyPass",path: '/BuyPass', component: BuyPass, icon:"" },
    { name:"PaymentCards",path: '/PaymentCards', component: PaymentCards, icon:"" },
  ];

setupIonicReact();

const App: React.FC = () => {
  let currentColor;
  const [color, setColor] = useState(["text-light-blue", "text-orange", "text-orange", "text-orange", "text-orange"]);
  const getCurrentColor = (page: number) => {
    currentColor = color.map((item, idx) => {
      if (idx === page) {
        return "text-light-blue";
      }
      return "text-orange";
    });
    setColor(currentColor);
  };
  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            {pages1.map((page, index) => (
              <Route key={index} path={page.path} exact>
                <page.component />
              </Route>
            ))}
            <Route>
              <Redirect to="/home" />
            </Route>
          </IonRouterOutlet>
          <IonTabBar slot="bottom" className="py-2 bg-blue">
            {pages.map((page, idx) => (
              <IonTabButton
                key={idx}
                tab={page.path}
                href={page.path}
                className="bg-blue"
                onClick={() => getCurrentColor(idx)}
              >
                <Icon name={page.icon} className={ `text-2xl ${color[idx]}`} />
              </IonTabButton>
            ))}
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
