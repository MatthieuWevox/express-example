const mysql = require("mysql2");

const OpenAI = require("openai");

const openai = new OpenAI({
    apiKey: "xxxx"
});

async function retrieveUniverseName(idUniverse) {
    return new Promise((resolve, reject) => {
        const connection = mysql.createConnection({
            host: '127.0.0.1',
            user: 'api_b3_mds',
            password: 'fI0hd0O2/V1@tIQD',
            database: 'api_b3_mds'
        });

        let query = "SELECT name FROM universes WHERE id = ?";
        connection.query(query, [idUniverse], (err, rows) => {

            connection.end();

            if (err) {
                reject(err);
            } else {
                if (rows.length == 1) {
                    resolve(rows[0].name);
                }
            }
        });
    });
}

async function generateDescription(universeName) {
    const response = await openai.completions.create({
        model: "text-ada-001", // "gpt-3.5-turbo-instruct", // "text-davinci-003"
        prompt: "Génère moi une description de l'univers fictif de " + universeName,
        temperature: 1,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
    });

    return response;
}

async function mainProgram() {
    let name = await retrieveUniverseName(1);
    let description = await generateDescription(name);
    console.log(name);
    console.log(description);
}

console.log("Début du programme");
mainProgram();
console.log("Fin du programme");