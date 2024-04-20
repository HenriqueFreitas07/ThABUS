import Icon from "./Icon";

type RoutesListCard = {
  origin: string;
  destination: string;
  time: string;
  id: string;
  props?: any;
};

function RoutesListCard({
  origin,
  destination,
  time,
  id,
  ...props
}: RoutesListCard) {
  return (
    <div className="bg-light-blue border border-2 rounded-md border-orange w-5/6 p-2 mx-auto my-2 columns-2  grid-flow-col flex">
      <div className="grid-rows-2 w-full h-full grid-flow-row inline-block ">
        <div className="w-full my-auto mx-auto py-1 px-2 flex relative">
          <Icon name="br-marker" className="text-orange text-xl my-auto" />
          <div className="p-2 py-0 text-[0.9rem]">{origin}</div>
        </div>
        <div className="w-full my-auto mx-auto py-1 px-2 flex">
          <Icon
            name="br-land-layer-location"
            className="text-orange text-xl my-auto"
          />
          <div className="p-2 py-0 text-[0.9rem]">{destination}</div>
        </div>
      </div>
      <div className="w-full grid-rows-3 inline-block grid-flow-row">
        <div className="aligh-middle h-1/2 w-full text-sm py-1">
          {time}
        </div>
        <div className="aligh-middle h-1/2 w-full">{id}</div>
      </div>
    </div>
  );
}

export default RoutesListCard;
