import Image from "next/image";
import Link from "next/link";

export default async function TicketList() {
  const data = await getTickets();
  return (
    <div className="flex flex-wrap gap-3 align-center justify-center">
      {data &&
        data?.users?.map((item: unknown) => {
          return (
            <div key={item?.id} className={"card my-5"}>
              <Link href={'/ticket/'+ item?.id}>
                <h3>{item?.username}</h3>
              </Link>
              <div>
                <p>
                  {item?.firstName} {item?.lastName}
                </p>
              </div>
              <div>
                <Image alt="any" src={item?.image} width={50} height={50} />
              </div>
            </div>
          );
        })}
    </div>
  );
}

async function getTickets() {
  const responce = await fetch("https://dummyjson.com/users", {
    next: { revalidate: 30 },
  });
  const data = await responce?.json();
  return data;
}
