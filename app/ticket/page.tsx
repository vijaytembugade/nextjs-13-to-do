import TicketList from "./TicketList";

export default function News() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      This are tickets
      <div>
        <TicketList/>
      </div>
    </main>
  );
}
