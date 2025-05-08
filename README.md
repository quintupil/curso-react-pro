# curso-react-pro

## Ejercicio: 01-Bases

### Configuración

npx create-react-app bases --template typescript

Cambiar nombre a carpeta
windows
ren bases 01-bases

GitBash 
mv bases 01-bases

cd 01-bases

yarn start


### Errores: 

❌ Error 01: 

	"You can now view bases in the browser.

	  Local:            http://localhost:3000
	  On Your Network:  http://192.168.56.1:3000
	Failed to compile.

	[eslint] Failed to load config "react-app" to extend from.
	Failed to compile.

	[eslint] Failed to load config "react-app" to extend from.
	Failed to compile.

	[eslint] Failed to load config "react-app" to extend from.
	Referenced from: C:\Users\garci\Documents\Repositorios\CursosUdemy\React\ReactPro\01-bases\package.json
	ERROR in [eslint] Failed to load config "react-app" to extend from.
	Referenced from: C:\Users\garci\Documents\Repositorios\CursosUdemy\React\ReactPro\01-bases\package.json

	webpack compiled with 1 error
	No issues found"


✅ Solucion:

yarn add eslint-config-react-app --dev

yarn install


❌ Error VSC
"This JSX tag requires the module path 'react/jsx-runtime' to exist, but none could be found. Make sure you have types for the appropriate package installed.ts(2875)"

✅Solución:

npm install react react-dom

