"use client";

import { sendContactForm } from "@/actions/contact";
import { useState } from "react";

export default function ContactForm() {
    const [loading, set_loading] = useState(false);
    const [result, set_result] = useState<string | null>(null);

    const send = async(message: React.FormEvent<HTMLFormElement>) => {
        set_loading(true);
        const form = message.currentTarget;

        const datas = new FormData(message.currentTarget);
        const res = await sendContactForm(datas);
        set_result(res);

        setTimeout(() => {set_loading(false); set_result(null)}, 2000);
        form.reset();
    }

    return (
        <form className="grid grid-cols-2 gap-x-[24px] gap-y-[32px]" onSubmit={(message) => {message.preventDefault(); send(message)}}>
            {loading && <div className="absolute backdrop-blur-[3px] center_in_absolute p-[100px]">
                {!result && <img src="/loading.svg" alt="Traitement en cours" />}
                {result && <span className="text-[30px]">{result}</span>}
            </div>}

            <div className="flex flex-col gap-[4px] name_form">
                <label htmlFor="name">Nom et prénom</label>
                <input type="text" name="name" placeholder="Jean Dupont" required />
            </div>
            <div className="flex flex-col gap-[4px] email_form">
                <label htmlFor="mail">Email</label>
                <input type="mail" name="mail" placeholder="jean.dupont@gmail.com" required />
            </div>
            <div className="col-span-2 flex flex-col gap-[4px] city_form">
                <label htmlFor="city">Ville</label>
                <input type="text" name="city" placeholder="Toulouse" />
            </div>
            <div className="col-span-2 flex flex-col gap-[4px] msg_form">
                <label htmlFor="msg">Message</label>
                <textarea name="msg" placeholder="Votre message" required></textarea>
            </div>
            <input type="submit" value="Envoyer" disabled={loading}/>
        </form>
    )
}