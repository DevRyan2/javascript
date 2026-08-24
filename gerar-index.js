const fs = require("fs");
const path = require("path");

const ROOT = __dirname;

const IGNORAR = new Set([
  ".git",
  "node_modules",
  ".vscode",
  "dist",
  "build",
]);

function escapar(texto) {
  return texto
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function lerPasta(pasta) {
  const itens = fs
    .readdirSync(pasta, { withFileTypes: true })
    .filter((item) => !IGNORAR.has(item.name))
    .sort((a, b) => {
      if (a.isDirectory() !== b.isDirectory()) {
        return a.isDirectory() ? -1 : 1;
      }

      return a.name.localeCompare(b.name, undefined, {
        numeric: true,
      });
    });

  let html = "<ul>";
  let temHtml = false;

  for (const item of itens) {
    const caminhoCompleto = path.join(pasta, item.name);

    if (item.isDirectory()) {
      const conteudo = lerPasta(caminhoCompleto);

      if (conteudo.temHtml) {
        temHtml = true;

        html += `
          <li>
            <details>
              <summary>📁 ${escapar(item.name)}</summary>
              ${conteudo.html}
            </details>
          </li>
        `;
      }
    }

    if (
      item.isFile() &&
      item.name.toLowerCase().endsWith(".html")
    ) {
      const relativo = path
        .relative(ROOT, caminhoCompleto)
        .replaceAll("\\", "/");

      if (relativo === "index.html") continue;

      temHtml = true;

      html += `
        <li>
          <a href="${encodeURI(relativo)}">
            📄 ${escapar(item.name)}
          </a>
        </li>
      `;
    }
  }

  html += "</ul>";

  return {
    html,
    temHtml,
  };
}

const arvore = lerPasta(ROOT);

const pagina = `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">

  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0"
  >

  <title>Meus projetos</title>

  <style>
    * {
      box-sizing: border-box;
    }

    body {
      margin: 0;
      font-family: Arial, sans-serif;
      background: #0d1117;
      color: #e6edf3;
    }

    main {
      width: min(1000px, 100%);
      margin: auto;
      padding: 40px 20px;
    }

    h1 {
      margin-bottom: 5px;
    }

    p {
      color: #8b949e;
    }

    ul {
      list-style: none;
      padding-left: 22px;
    }

    li {
      margin: 7px 0;
    }

    details {
      margin: 5px 0;
    }

    summary {
      cursor: pointer;
      padding: 6px;
      border-radius: 6px;
    }

    summary:hover {
      background: #161b22;
    }

    a {
      display: inline-block;
      padding: 6px;
      color: #58a6ff;
      text-decoration: none;
      border-radius: 6px;
    }

    a:hover {
      background: #161b22;
      text-decoration: underline;
    }
  </style>
</head>

<body>
  <main>
    <h1>📂 Meus projetos</h1>

    <p>
      Navegue pelas minhas aulas, exercícios e projetos.
    </p>

    ${arvore.html}
  </main>
</body>
</html>
`;

fs.writeFileSync(
  path.join(ROOT, "index.html"),
  pagina,
  "utf8"
);

console.log("✅ index.html criado com sucesso!");