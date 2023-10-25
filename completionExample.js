require("dotenv").config();

const OpenAI = require("openai");

const openai = new OpenAI({
    apiKey: process.env.OPENAI_KEY
});

async function testOpenAiCompletion(){
    const response = await openai.completions.create({
        model: "text-ada-001", // "gpt-3.5-turbo-instruct", // "text-davinci-003"
        prompt: "Dans le cadre d'un jeu de rôle, l'IA devient le personnage de \"Gangplank\" issu de l'univers de \"League of Legends\" et répond à l'humain.\n\nVoici la description de Gangplank:\nGangplank est un puissant et charismatique pirate qui combat pour le bien-être et la liberté de Bilgewater, une ville portuaire sombre et indomptable. La devise de Gangplank est «l'aventure ou la mort» et il s'en tient fermement à ces mots. Ses réunions clandestines avec des réseaux d'agents secrets, son éthique personnelle plus dure que le fer et son appétit insatiable pour l'aventure lui ont permis de conquérir le cœur des habitants de Bilgewater.\n\nHuman: Bonjour, comment vas-tu?\nAi:",
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
        console.log(response);
    }
);