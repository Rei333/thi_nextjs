import Link from "next/link";

type Props = {
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => void,
    values? : {
        name?: string;
        description?: string;
        event_date_start?: string;
        event_date_end?: string;
    };
}

export default function FormEvent({ onSubmit, values }: Props) {
    return (
        <form className="grid grid-cols-2 gap-x-[24px] gap-y-[32px]" onSubmit={(event) => {event.preventDefault(); onSubmit(event)}}>
            <div className="col-span-2 flex flex-col gap-[4px]">
                <label htmlFor="name">Nom de l'évènement</label>
                <input type="text" name="name" placeholder="Atelier dégustation - Éclairs revisités" required defaultValue={values?.name}/>
            </div>
            <div className="flex flex-col gap-[4px]">
                <label htmlFor="date_start">Date de début</label>
                <input type="date" name="date_start" defaultValue={values?.event_date_start}/>
            </div>
            <div className="flex flex-col gap-[4px]">
                <label htmlFor="date_end">Date de fin (facultatif)</label>
                <input type="date" name="date_end" defaultValue={values?.event_date_end}/>
            </div>
            <div className="col-span-2 flex flex-col gap-[4px]">
                <label htmlFor="desc">Description de l'évènement</label>
                <textarea name="desc" placeholder="Atelier pratique autour de la pâte à choux et des garnitures fusion." required defaultValue={values?.description}></textarea>
            </div>
            <div className="flex gap-[16px]">
                <input type="submit" value="Envoyer" />
                <Link href="/evenementiel"><button className="btn secondary">Revenir sur les évènements</button></Link>
            </div>
        </form>
    )
}