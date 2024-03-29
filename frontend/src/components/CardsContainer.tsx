import { FunctionComponent } from "react";
import UserCard from "./UserCard";

const CardsContainer: FunctionComponent = () => {
  return (
    <div className="self-stretch flex flex-row items-start justify-start gap-[24px] max-w-full z-[1] text-left text-13xl text-primary-2 font-heading-03 mq1025:flex-wrap">
      <UserCard title="Your balance" cardInformation="Balance" />
      <UserCard title="Your supplies" cardInformation="Supplies" />
      <UserCard title="Your borrows" cardInformation="Borrows" />
    </div>
  );
};

export default CardsContainer;
