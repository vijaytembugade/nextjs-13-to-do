export default async function TicketList(){
    const data = await getTickets();
    console.log(data);
    return <>
        This is ticket List
    </>
}


async function getTickets(){
    const responce = await fetch("https://curly-space-acorn-75wwxqqj954h6qv-3001.app.github.dev/tickets");
    const data = await responce?.json();

    return data;
}