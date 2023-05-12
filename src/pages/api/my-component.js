export default async function handler(req, res) {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
    const data = await response.json();
    return res.status(200).json({data});
}