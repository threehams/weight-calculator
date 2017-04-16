export default function(script: string) {
  const inlineScript = `<script>${script}</script>`;
  const devScript = '<script src="/dist/bundle.js"></script>';
  return `
    <!doctype html>
    <html>
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
      <title>Example McExampleFace</title>
      <link rel="icon" href="assets/favicon.png" type="image/png" />
    </head>
    <body>
      <div id="root"></div>
      ${ script ? inlineScript : devScript }
    </body>
    </html>
  `;
}
