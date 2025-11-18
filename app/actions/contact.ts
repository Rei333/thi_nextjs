"use server";

export async function sendContactForm(datas: FormData) {
    const name = datas.get("name") as string;
    const mail = datas.get("email") as string;
    const city = datas.get("city");
    const msg = datas.get("msg") as string;

    if(city) return "Erreur pendant l'envoi.";

    const string = `Message envoyé par ${name} (${mail}) :<br/><br/>${msg}<br/><br/>Lui répondre ? <a href="mailto:${mail}">Cliquez ici.</a>`;

    // todo

    return "Message envoyé !";
}