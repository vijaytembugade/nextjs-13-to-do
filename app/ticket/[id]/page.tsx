import Image from "next/image";

export default async function TicketDetails({ params }) {
    const { id } = params;

    const ticket = getTicket(id);
    console.log(ticket)
    return <main>
        <h2>Ticket Details</h2>
        <h3>{ticket?.username}</h3>
        <div>
        <Image src={ticket?.image} width={50} height={50} /> 
        </div>
    </main>
}

async function getTicket(id: number){
    const responce = await fetch("https://dummyjson.com/users/"+id, {next: {'revalidate': 30}});
    const data = await responce?.json();
    console.log(data, "dara")
    return data;
}