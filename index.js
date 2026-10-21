import express from 'express';

const app = express();
const PORT = 3000;

app.use(express.json());

// Arreglo poblado con 16 clubes y los años reales de sus títulos
const clubes = [
  { id: 1, nombre: "Independiente", pais: "Argentina", titulos: [1964, 1965, 1972, 1973, 1974, 1975, 1984] },
  { id: 2, nombre: "Boca Juniors", pais: "Argentina", titulos: [1977, 1978, 2000, 2001, 2003, 2007] },
  { id: 3, nombre: "Peñarol", pais: "Uruguay", titulos: [1960, 1961, 1966, 1982, 1987] },
  { id: 4, nombre: "River Plate", pais: "Argentina", titulos: [1986, 1996, 2015, 2018] },
  { id: 5, nombre: "Estudiantes", pais: "Argentina", titulos: [1968, 1969, 1970, 2009] },
  { id: 6, nombre: "Olimpia", pais: "Paraguay", titulos: [1979, 1990, 2002] },
  { id: 7, nombre: "Nacional", pais: "Uruguay", titulos: [1971, 1980, 1988] },
  { id: 8, nombre: "São Paulo", pais: "Brasil", titulos: [1992, 1993, 2005] },
  { id: 9, nombre: "Grêmio", pais: "Brasil", titulos: [1983, 1995, 2017] },
  { id: 10, nombre: "Santos", pais: "Brasil", titulos: [1962, 1963, 2011] },
  { id: 11, nombre: "Palmeiras", pais: "Brasil", titulos: [1999, 2020, 2021] },
  { id: 12, nombre: "Flamengo", pais: "Brasil", titulos: [1981, 2019, 2022] },
  { id: 13, nombre: "Atlético Nacional", pais: "Colombia", titulos: [1989, 2016] },
  { id: 14, nombre: "Internacional", pais: "Brasil", titulos: [2006, 2010] },
  { id: 15, nombre: "Colo-Colo", pais: "Chile", titulos: [1991] },
  { id: 16, nombre: "Liga de Quito", pais: "Ecuador", titulos: [2008] }
];

// Rutas de la API
app.get('/clubes', (req, res) => {
  const { pais } = req.query;
  if (pais) {
    const filtrados = clubes.filter(c => c.pais.toLowerCase() === pais.toLowerCase());
    return res.status(200).json(filtrados);
  }
  res.status(200).json(clubes);
});

app.get('/clubes/:id', (req, res) => {
  const idParam = parseInt(req.params.id);
  const club = clubes.find(c => c.id === idParam);
  if (!club) {
    return res.status(404).json({ error: `Club con ID ${idParam} no encontrado.` });
  }
  res.status(200).json(club);
});

app.get('/titulos/:club', (req, res) => {
  const nombreClub = req.params.club;
  const club = clubes.find(c => c.nombre.toLowerCase() === nombreClub.toLowerCase());
  if (!club) {
    return res.status(404).json({ error: `El club '${nombreClub}' no existe en nuestros registros.` });
  }
  res.status(200).json({
    club: club.nombre,
    total_titulos: club.titulos.length,
    años: club.titulos
  });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});