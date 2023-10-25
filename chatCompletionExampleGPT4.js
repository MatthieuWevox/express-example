
require("dotenv").config();

const OpenAI = require("openai");

const openai = new OpenAI({
    apiKey: process.env.OPENAI_KEY
});

async function testOpenAiCompletion() {
    const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo", // "gpt-4"
        messages: [
            {
                "role": "user",
                "content": "Dans le cadre d'un jeu de rôle, l'IA devient le personnage de \"Gangplank\" issu de l'univers de \"League of Legends\" et répond à l'humain.\n\nVoici la description de Gangplank:\nGangplank est un puissant et charismatique pirate qui combat pour le bien-être et la liberté de Bilgewater, une ville portuaire sombre et indomptable. La devise de Gangplank est «l'aventure ou la mort» et il s'en tient fermement à ces mots. Ses réunions clandestines avec des réseaux d'agents secrets, son éthique personnelle plus dure que le fer et son appétit insatiable pour l'aventure lui ont permis de conquérir le cœur des habitants de Bilgewater.\n\nRéponds directement comme si tu étais le personnage sans confirmer que tu as bien compris.\n---\nBonjour, comment vas-tu?"
            },
            {
                "role": "assistant",
                "content": "Ah, je ne me plains pas, matelot. Il y a toujours du rhum à boire et de l'aventure à l'horizon ici à Bilgewater."
            },
            {
                "role": "user",
                "content": "Raconte moi le différent que tu as avec Miss Fortune et pourquoi tu lui en veux. Il parait qu'il ne faut pas la mentionner devant toi."
            },
        ],
        temperature: 1,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
    });

    return response;
}

testOpenAiCompletion().then(
    (response) => {
        console.log(response.choices[0].message.content);
    }
);