## Pré-requisitos

Primeiro, inicie o servidor de desenvolvimento:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Abra [http://localhost:3000](http://localhost:3000) com seu navegador para visualizar o resultado.

## Estrutura do projeto

- `app/page.tsx`:  Este diretório contém a lógica central da aplicação, incluindo rotas e gerenciamento de estados com o App Router.
- `src/components`: Aqui, você encontrará componentes reutilizáveis usados para estilização e estruturação da interface do usuário.
- `public/assets`: Este diretório contém imagens e arquivos SVG que são utilizados para estilização e exibição de recursos visuais no projeto.
- `src/providers`: Contém funções de interação do lado do cliente e gerenciamento de estados. Aqui, você pode encontrar os contextos e provedores relacionados ao estado
- `src/services/intefaces.ts`: Este arquivo contém as tipagems de objetos importantes para manter a coerência da aplicalção.
- `src/services/utils.ts`: Contém os dados mockados para renderização da página estática.

## Navegando no Projeto

Para se localizar facilmente no projeto, aqui estão algumas informações úteis:

- `src/app`: Este diretório contém as páginas da aplicação. As páginas são componentes React que representam as diferentes rotas da aplicação Next.js. Você pode encontrar as páginas aqui e personalizá-las conforme necessário. Para adicionar ou editar uma página, basta criar ou modificar um arquivo `.ts` ou `.tsx` neste diretório.

- `src/components`: Aqui, você encontrará componentes reutilizáveis que são usados para a estilização e estruturação da interface do usuário. Se desejar fazer alterações na aparência ou no comportamento da aplicação, este é o lugar onde você pode adicionar ou editar esses componentes. Você pode reutilizá-los em várias partes do seu projeto.

A partir destes diretórios, você pode explorar e personalizar o projeto de acordo com suas necessidades. Sinta-se à vontade para adicionar, modificar ou excluir páginas e componentes para atender aos requisitos específicos do seu projeto. Certifique-se de que as alterações estão em conformidade com as melhores práticas do Next.js e React.

