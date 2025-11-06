type Partner = {
    id: number,
    username: string,
    email: string,
    session: number
}

async function get_partners() {
    const datas = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/partners`);
    return datas.json();
}

export default async function Partenaires() {
    const res = await get_partners();
    const datas = res.datas;

    return (
        <section className="section104 gap-[40px]">
            <h1 className="text-center">Nos partenaires</h1>
            <div>
                {datas.map((data: Partner) => (
                    <div key={data.id} >
                        <h2>{data.username}</h2>
                    </div>
                ))}
            </div>
        </section>
    );
}