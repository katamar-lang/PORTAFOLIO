// Languages: English (in the HTML), Spanish and Portuguese (below).
// Each entry is  "English text": ["Español", "Português"].  Names of products and tools are not translated.
(function () {
  const D = {
    "Karen Tatiana Martínez · Portfolio": ["Karen Tatiana Martínez · Portafolio", "Karen Tatiana Martínez · Portfólio"],
    "Web developer · Customer support · Remote": ["Desarrolladora web · Atención al cliente · Remoto", "Desenvolvedora web · Atendimento ao cliente · Remoto"],
    "Start here": ["Empieza aquí", "Comece aqui"],
    "About me": ["Sobre mí", "Sobre mim"],
    "Experience": ["Experiencia", "Experiência"],
    "Projects": ["Proyectos", "Projetos"],
    "Skills &amp; tools": ["Habilidades", "Habilidades"],
    "Skills": ["Habilidades", "Habilidades"],
    "Languages": ["Idiomas", "Idiomas"],
    "Contact": ["Contacto", "Contato"],
    "Portfolio · 2026": ["Portafolio · 2026", "Portfólio · 2026"],
    "Front-end developer · Technical support · Hackathon builder. I build clean, accessible web products and help people use them. Interested in Web3: I build on Solana. From Colombia, based in Florianópolis, Brazil, working remotely with teams worldwide.": [
      "Desarrolladora front-end · Soporte técnico · Creadora en hackathons. Construyo productos web limpios y accesibles, y ayudo a las personas a usarlos. Me interesa Web3: construyo en Solana. Soy de Colombia, vivo en Florianópolis, Brasil, y trabajo en remoto con equipos de todo el mundo.",
      "Desenvolvedora front-end · Suporte técnico · Criadora em hackathons. Construo produtos web limpos e acessíveis, e ajudo as pessoas a usá-los. Tenho interesse em Web3: construo em Solana. Sou da Colômbia, moro em Florianópolis, Brasil, e trabalho remotamente com equipes do mundo todo."],
    "Selected work": ["Trabajos destacados", "Trabalhos em destaque"],
    "Robots pay for skills · IslandHack v5": ["Robots que pagan por habilidades · IslandHack v5", "Robôs que pagam por habilidades · IslandHack v5"],
    "Game for kids · NASA Space Apps": ["Juego para niños · NASA Space Apps", "Jogo para crianças · NASA Space Apps"],
    "E-commerce": ["Tienda en línea", "Loja online"],
    "Landing page": ["Página de aterrizaje", "Landing page"],
    "Spanish": ["Español", "Espanhol"],
    "Native": ["Nativo", "Nativo"],
    "English": ["Inglés", "Inglês"],
    "Advanced": ["Avanzado", "Avançado"],
    "Portuguese": ["Portugués", "Português"],
    "Intermediate": ["Intermedio", "Intermediário"],
    "About me →": ["Sobre mí →", "Sobre mim →"],
    "Experience →": ["Experiencia →", "Experiência →"],
    "Download CV →": ["Descargar CV →", "Baixar CV →"],
    "I'm Karen, a multilingual professional from Colombia. I connect people and technology: I solve problems for users, and I build the web pages and tools they use.": [
      "Soy Karen, una profesional multilingüe de Colombia. Conecto a las personas con la tecnología: resuelvo problemas de los usuarios y construyo las páginas web y las herramientas que usan.",
      "Sou a Karen, uma profissional multilíngue da Colômbia. Conecto pessoas e tecnologia: resolvo problemas dos usuários e construo as páginas web e as ferramentas que eles usam."],
    "What I do": ["Qué hago", "O que eu faço"],
    "Technical support and customer success for international clients: troubleshooting, guiding users through digital processes and turning their feedback into clear fixes.": [
      "Soporte técnico y éxito del cliente para clientes internacionales: resuelvo problemas, guío a los usuarios en procesos digitales y convierto sus comentarios en soluciones claras.",
      "Suporte técnico e sucesso do cliente para clientes internacionais: resolvo problemas, oriento os usuários em processos digitais e transformo o feedback deles em soluções claras."],
    "Front-end development: responsive, accessible pages in HTML, CSS and JavaScript, and lately full products with AI and online payments.": [
      "Desarrollo front-end: páginas adaptables y accesibles en HTML, CSS y JavaScript, y últimamente productos completos con IA y pagos en línea.",
      "Desenvolvimento front-end: páginas responsivas e acessíveis em HTML, CSS e JavaScript, e ultimamente produtos completos com IA e pagamentos online."],
    "What I'm looking for": ["Qué busco", "O que eu procuro"],
    "A remote-first team where I can combine communication and front-end skills to give people great support and great user experiences.": [
      "Un equipo remoto donde pueda combinar la comunicación y el desarrollo front-end para dar a las personas un gran soporte y una gran experiencia de uso.",
      "Uma equipe remota onde eu possa combinar comunicação e desenvolvimento front-end para oferecer às pessoas um ótimo suporte e uma ótima experiência de uso."],
    "Interests": ["Intereses", "Interesses"],
    "Web3. I'm especially curious about how blockchains let people (and machines) pay each other directly. That's why I built Isla Skills on Solana, with USDC payments through x402 and support for Solflare, Phantom and Backpack wallets.": [
      "Web3. Me interesa especialmente cómo las blockchains permiten que las personas (y las máquinas) se paguen directamente entre sí. Por eso construí Isla Skills en Solana, con pagos en USDC mediante x402 y compatibilidad con las billeteras Solflare, Phantom y Backpack.",
      "Web3. Tenho um interesse especial em como as blockchains permitem que pessoas (e máquinas) paguem umas às outras diretamente. Por isso construí o Isla Skills em Solana, com pagamentos em USDC via x402 e suporte às carteiras Solflare, Phantom e Backpack."],
    "Based in": ["Vivo en", "Moro em"],
    "Florianópolis, Brazil · remote worldwide": ["Florianópolis, Brasil · remoto para todo el mundo", "Florianópolis, Brasil · remoto para o mundo todo"],
    "Web3 · Solana · AI products": ["Web3 · Solana · Productos con IA", "Web3 · Solana · Produtos com IA"],
    "Since 2019 · customer support, sales and web": ["Desde 2019 · atención al cliente, ventas y web", "Desde 2019 · atendimento ao cliente, vendas e web"],
    "Advanced (C1)": ["Avanzado (C1)", "Avançado (C1)"],
    "Customer support, sales and web work since 2019, for teams in Colombia, Malta and remote.": [
      "Atención al cliente, ventas y desarrollo web desde 2019, para equipos en Colombia, Malta y en remoto.",
      "Atendimento ao cliente, vendas e desenvolvimento web desde 2019, para equipes na Colômbia, em Malta e remotas."],
    "2022 – Present · Remote": ["2022 – Actualidad · Remoto", "2022 – Atual · Remoto"],
    "Freelance Web Developer &amp; Digital Solutions": ["Desarrolladora web freelance y soluciones digitales", "Desenvolvedora web freelancer e soluções digitais"],
    "Independent": ["Independiente", "Autônoma"],
    "Build and maintain websites, landing pages and digital experiences using HTML and CSS.": [
      "Construyo y mantengo sitios web, páginas de aterrizaje y experiencias digitales con HTML y CSS.",
      "Construo e mantenho sites, landing pages e experiências digitais com HTML e CSS."],
    "Support businesses with CRM integrations and digital workflow improvements.": [
      "Apoyo a negocios con integraciones de CRM y mejoras en sus flujos de trabajo digitales.",
      "Apoio empresas com integrações de CRM e melhorias nos fluxos de trabalho digitais."],
    "Use AI-assisted development tools for research, prototyping and implementation.": [
      "Uso herramientas de desarrollo asistidas por IA para investigar, hacer prototipos e implementar.",
      "Uso ferramentas de desenvolvimento assistidas por IA para pesquisa, prototipagem e implementação."],
    "Collaborate with clients to understand requirements and deliver practical digital solutions.": [
      "Trabajo con los clientes para entender lo que necesitan y entregar soluciones digitales prácticas.",
      "Trabalho com os clientes para entender o que precisam e entregar soluções digitais práticas."],
    "Jan 2025 – Mar 2025": ["Ene 2025 – Mar 2025", "Jan 2025 – Mar 2025"],
    "Customer Support Representative, Samsung campaign": ["Agente de atención al cliente, campaña Samsung", "Atendente de suporte ao cliente, campanha Samsung"],
    "Managed approximately 90 customer cases per day through chat-based CRM systems.": [
      "Gestioné unos 90 casos de clientes al día mediante sistemas CRM por chat.",
      "Gerenciei cerca de 90 casos de clientes por dia em sistemas de CRM por chat."],
    "Assisted customers with inquiries, troubleshooting and service-related requests.": [
      "Ayudé a los clientes con consultas, resolución de problemas y solicitudes de servicio.",
      "Ajudei clientes com dúvidas, resolução de problemas e solicitações de serviço."],
    "Maintained clear communication and followed established support procedures.": [
      "Mantuve una comunicación clara y seguí los procedimientos de soporte establecidos.",
      "Mantive uma comunicação clara e segui os procedimentos de suporte estabelecidos."],
    "Bartender &amp; Barista": ["Bartender y barista", "Bartender e barista"],
    "Hospitality industry": ["Sector de hostelería", "Setor de hospitalidade"],
    "Delivered customer service in fast-paced, international environments.": [
      "Atendí a clientes en ambientes internacionales y de ritmo rápido.",
      "Atendi clientes em ambientes internacionais e de ritmo acelerado."],
    "Managed customer requests, transactions and service operations while handling multiple priorities.": [
      "Gestioné pedidos, cobros y operaciones de servicio mientras atendía varias prioridades a la vez.",
      "Gerenciei pedidos, pagamentos e operações de serviço lidando com várias prioridades ao mesmo tempo."],
    "Communicated with customers from different cultural and language backgrounds.": [
      "Me comuniqué con clientes de distintas culturas e idiomas.",
      "Comuniquei-me com clientes de diferentes culturas e idiomas."],
    "Sales Representative": ["Representante de ventas", "Representante de vendas"],
    "Managed a prospect database of approximately 370 potential customers per month.": [
      "Gestioné una base de datos de unos 370 clientes potenciales al mes.",
      "Gerenciei uma base de cerca de 370 clientes em potencial por mês."],
    "Presented accounting software and legal products to prospective clients.": [
      "Presenté software contable y productos jurídicos a clientes potenciales.",
      "Apresentei software contábil e produtos jurídicos a clientes em potencial."],
    "Followed up with leads and supported the sales process toward monthly targets.": [
      "Hice seguimiento a los interesados y apoyé el proceso de venta para cumplir las metas mensuales.",
      "Fiz o acompanhamento de leads e apoiei o processo de vendas para cumprir as metas mensais."],
    "Customer Service Representative": ["Agente de servicio al cliente", "Atendente de serviço ao cliente"],
    "Handled approximately 250 customer requests per day.": ["Atendí unas 250 solicitudes de clientes al día.", "Atendi cerca de 250 solicitações de clientes por dia."],
    "Assisted customers with service inquiries, account issues and problem resolution.": [
      "Ayudé a los clientes con consultas del servicio, problemas de cuenta y resolución de incidencias.",
      "Ajudei clientes com dúvidas sobre o serviço, problemas de conta e resolução de incidentes."],
    "Achieved an approximately 70% first-contact resolution rate.": [
      "Logré resolver cerca del 70% de los casos en el primer contacto.",
      "Alcancei cerca de 70% de resolução no primeiro contato."],
    "Education": ["Educación", "Formação"],
    "Technologist Degree in Industrial Processes<br>Universidad ECCI, Colombia": ["Tecnología en Procesos Industriales<br>Universidad ECCI, Colombia", "Tecnólogo em Processos Industriais<br>Universidad ECCI, Colômbia"],
    "Certifications": ["Certificaciones", "Certificações"],
    "AWS Entrena Latinas · AI &amp; Cloud Computing (2026)": ["AWS Entrena Latinas · IA y computación en la nube (2026)", "AWS Entrena Latinas · IA e computação em nuvem (2026)"],
    "Generative AI &amp; Natural Language Processing (2024)": ["IA generativa y procesamiento de lenguaje natural (2024)", "IA generativa e processamento de linguagem natural (2024)"],
    "2023 – Dec 2024 · Malta": ["2023 – Dic 2024 · Malta", "2023 – Dez 2024 · Malta"],
    "Two products built in November 2026, each from idea to live demo in days.": [
      "Dos productos construidos en noviembre de 2026, cada uno de la idea a la demo en vivo en pocos días.",
      "Dois produtos construídos em novembro de 2026, cada um da ideia à demo ao vivo em poucos dias."],
    "IslandHack v5 · IslandDAO · Florianópolis, Brazil · Solo build": ["IslandHack v5 · IslandDAO · Florianópolis, Brasil · Proyecto individual", "IslandHack v5 · IslandDAO · Florianópolis, Brasil · Projeto individual"],
    "An app store for robot skills. Each skill is a service a robot calls and pays <b>per use</b>, in USDC on Solana, with no human approving anything.": [
      "Una tienda de habilidades para robots. Cada habilidad es un servicio que el robot llama y paga <b>por uso</b>, en USDC sobre Solana, sin que ninguna persona apruebe nada.",
      "Uma loja de habilidades para robôs. Cada habilidade é um serviço que o robô chama e paga <b>por uso</b>, em USDC na Solana, sem que nenhuma pessoa aprove nada."],
    "Why": ["Por qué", "Por quê"],
    "Robots are learning new skills through software, but there was no way to pay for a skill each time a robot uses it. Skills can come from AI models and from people, and 100% of each price goes to the skill's maker.": [
      "Los robots aprenden habilidades nuevas mediante software, pero no había forma de pagar por una habilidad cada vez que un robot la usa. Las habilidades pueden venir de modelos de IA y de personas, y el 100% de cada precio va a quien creó la habilidad.",
      "Os robôs aprendem novas habilidades por software, mas não havia como pagar por uma habilidade cada vez que um robô a usa. As habilidades podem vir de modelos de IA e de pessoas, e 100% de cada preço vai para quem criou a habilidade."],
    "What I built": ["Qué construí", "O que eu construí"],
    "Clean Sweep: Coco, a simulated cleaning robot, takes a photo of a room and pays a chain of three skills.": [
      "Clean Sweep: Coco, un robot de limpieza simulado, toma una foto de una habitación y paga una cadena de tres habilidades.",
      "Clean Sweep: Coco, um robô de limpeza simulado, tira uma foto de um cômodo e paga uma cadeia de três habilidades."],
    "Litter Spotter (AI vision with Claude); when the AI is unsure, a real person reviews the photo and gets paid.": [
      "Litter Spotter (visión por IA con Claude); cuando la IA no está segura, una persona real revisa la foto y recibe su pago.",
      "Litter Spotter (visão por IA com Claude); quando a IA não tem certeza, uma pessoa real revisa a foto e recebe o pagamento."],
    "Cleanup Planner, and a 3D model of the villa where Coco drives to the room.": [
      "Cleanup Planner, y un modelo 3D de la villa donde Coco se desplaza hasta la habitación.",
      "Cleanup Planner, e um modelo 3D da villa onde Coco se desloca até o cômodo."],
    "A robot wallet with a daily budget, working with Solflare, Phantom and Backpack. Real payments settled on Solana devnet.": [
      "Una billetera para el robot con presupuesto diario, compatible con Solflare, Phantom y Backpack. Pagos reales liquidados en la devnet de Solana.",
      "Uma carteira para o robô com orçamento diário, compatível com Solflare, Phantom e Backpack. Pagamentos reais liquidados na devnet da Solana."],
    "Live demo →": ["Demo en vivo →", "Demo ao vivo →"],
    "Code →": ["Código →", "Código →"],
    "NASA Space Apps Challenge · Team project": ["NASA Space Apps Challenge · Proyecto en equipo", "NASA Space Apps Challenge · Projeto em equipe"],
    "<i>Every piece left behind has a story.</i> A web game for kids aged 7 to 12: they pick up litter, scan it with a phone, and each piece unlocks the story of a machine humanity left on the Moon, on Mars or in space.": [
      "<i>Cada pieza que dejamos atrás tiene una historia.</i> Un juego web para niños de 7 a 12 años: recogen basura, la escanean con el celular, y cada pieza desbloquea la historia de una máquina que la humanidad dejó en la Luna, en Marte o en el espacio.",
      "<i>Cada peça deixada para trás tem uma história.</i> Um jogo web para crianças de 7 a 12 anos: elas recolhem lixo, escaneiam com o celular, e cada peça desbloqueia a história de uma máquina que a humanidade deixou na Lua, em Marte ou no espaço."],
    "To connect the litter on our streets and beaches with the machines we left in space, so kids learn to clean up safely and discover real NASA history.": [
      "Para conectar la basura de nuestras calles y playas con las máquinas que dejamos en el espacio, y que los niños aprendan a limpiar de forma segura y descubran historia real de la NASA.",
      "Para conectar o lixo das nossas ruas e praias com as máquinas que deixamos no espaço, para que as crianças aprendam a limpar com segurança e descubram a história real da NASA."],
    "The playable web app from the team's designs and storyboard: scan, story, bin it, and earn a patch for a 3D explorer jacket.": [
      "La aplicación web jugable a partir de los diseños y el guion del equipo: escanear, escuchar la historia, botar la pieza y ganar un parche para una chaqueta de exploradora en 3D.",
      "O aplicativo web jogável a partir dos designs e do roteiro da equipe: escanear, ouvir a história, jogar a peça no lixo e ganhar um emblema para uma jaqueta de exploradora em 3D."],
    "An AI scanner that says which bin each piece goes in and warns kids not to touch dangerous items.": [
      "Un escáner con IA que dice en qué caneca va cada pieza y avisa a los niños que no toquen objetos peligrosos.",
      "Um scanner com IA que diz em qual lixeira vai cada peça e avisa as crianças para não tocarem em objetos perigosos."],
    "Two storytellers (one from Florianópolis' <i>boi de mamão</i> tradition), read-aloud, and an Impact screen.": [
      "Dos narradores (uno de la tradición del <i>boi de mamão</i> de Florianópolis), lectura en voz alta y una pantalla de Impacto.",
      "Dois narradores (um da tradição do <i>boi de mamão</i> de Florianópolis), leitura em voz alta e uma tela de Impacto."],
    "English, Spanish and Portuguese. No accounts; photos are never stored. Lighthouse accessibility 100.": [
      "En inglés, español y portugués. Sin cuentas; las fotos nunca se guardan. Accesibilidad 100 en Lighthouse.",
      "Em inglês, espanhol e português. Sem contas; as fotos nunca são armazenadas. Acessibilidade 100 no Lighthouse."],
    "Play it →": ["Jugar →", "Jogar →"],
    "Everything I've built, with the tools I used and a direct link.": [
      "Todo lo que he construido, con las herramientas que usé y un enlace directo.",
      "Tudo o que construí, com as ferramentas que usei e um link direto."],
    "App store where robots pay for skills per use.": ["Tienda donde los robots pagan por habilidades cada vez que las usan.", "Loja onde os robôs pagam por habilidades a cada uso."],
    "NASA Space Apps game for kids about litter and space.": ["Juego de NASA Space Apps para niños sobre la basura y el espacio.", "Jogo do NASA Space Apps para crianças sobre lixo e espaço."],
    "Fashion e-commerce with filters, cart, lookbook and newsletter.": ["Tienda de moda en línea con filtros, carrito, lookbook y boletín.", "Loja de moda online com filtros, carrinho, lookbook e newsletter."],
    "Visit site →": ["Visitar sitio →", "Visitar site →"],
    "Editorial landing page for a pet spa in Bogotá, with WhatsApp booking.": [
      "Página de estilo editorial para un spa de mascotas en Bogotá, con reservas por WhatsApp.",
      "Página de estilo editorial para um spa de pets em Bogotá, com agendamento pelo WhatsApp."],
    "This portfolio": ["Este portafolio", "Este portfólio"],
    "A library of books, built by hand with no frameworks.": ["Una biblioteca de libros, hecha a mano y sin frameworks.", "Uma biblioteca de livros, feita à mão e sem frameworks."],
    "This portfolio is built by hand with HTML, CSS and vanilla JavaScript. My most recent projects add Node.js, the Claude API, Solana and three.js.": [
      "Este portafolio está hecho a mano con HTML, CSS y JavaScript puro. Mis proyectos más recientes suman Node.js, la API de Claude, Solana y three.js.",
      "Este portfólio foi feito à mão com HTML, CSS e JavaScript puro. Meus projetos mais recentes somam Node.js, a API do Claude, Solana e three.js."],
    "Core front-end": ["Base front-end", "Base front-end"],
    "JavaScript (vanilla)": ["JavaScript (puro)", "JavaScript (puro)"],
    "Responsive design": ["Diseño adaptable", "Design responsivo"],
    "Accessibility (WCAG)": ["Accesibilidad (WCAG)", "Acessibilidade (WCAG)"],
    "In recent projects": ["En proyectos recientes", "Em projetos recentes"],
    "Serverless functions (Netlify)": ["Funciones serverless (Netlify)", "Funções serverless (Netlify)"],
    "Claude API (AI vision)": ["API de Claude (visión por IA)", "API do Claude (visão por IA)"],
    "Solana · x402 payments": ["Solana · pagos con x402", "Solana · pagamentos com x402"],
    "Playwright testing": ["Pruebas con Playwright", "Testes com Playwright"],
    "Support": ["Soporte", "Suporte"],
    "Live chat &amp; email": ["Chat en vivo y correo", "Chat ao vivo e e-mail"],
    "CRM platforms": ["Plataformas CRM", "Plataformas de CRM"],
    "Troubleshooting": ["Resolución de problemas", "Resolução de problemas"],
    "Conflict resolution": ["Resolución de conflictos", "Resolução de conflitos"],
    "Bilingual communication": ["Comunicación bilingüe", "Comunicação bilíngue"],
    "I work comfortably with clients and teams in three languages.": [
      "Trabajo con comodidad con clientes y equipos en tres idiomas.",
      "Trabalho com tranquilidade com clientes e equipes em três idiomas."],
    "Advanced (C1) · daily work with international clients": ["Avanzado (C1) · trabajo diario con clientes internacionales", "Avançado (C1) · trabalho diário com clientes internacionais"],
    "Intermediate, conversational · based in Florianópolis, Brazil": ["Intermedio, conversacional · vivo en Florianópolis, Brasil", "Intermediário, conversacional · moro em Florianópolis, Brasil"],
    "I'm looking for full-time remote roles in technical support, customer success or front-end development. Let's talk.": [
      "Busco cargos remotos de tiempo completo en soporte técnico, éxito del cliente o desarrollo front-end. Hablemos.",
      "Procuro vagas remotas em tempo integral em suporte técnico, sucesso do cliente ou desenvolvimento front-end. Vamos conversar."],
    "Email": ["Correo", "E-mail"],
    "Location": ["Ubicación", "Localização"],
    "Spanish · English · Portuguese": ["Español · Inglés · Portugués", "Espanhol · Inglês · Português"],
    "Write me an email →": ["Escríbeme un correo →", "Escreva-me um e-mail →"],
    "Download my CV": ["Descarga mi hoja de vida", "Baixe meu currículo"],
    "Two quick questions first, so I know who is reading it.": [
      "Antes, dos preguntas rápidas para saber quién la lee.",
      "Antes, duas perguntas rápidas para eu saber quem está lendo."],
    "Which role is this for?": ["¿Para qué cargo es?", "Para qual vaga é?"],
    "You are": ["Eres", "Você é"],
    "A company": ["Una empresa", "Uma empresa"],
    "A recruiter": ["Reclutador(a)", "Recrutador(a)"],
    "Other": ["Otro", "Outro"],
    "Company or agency <span class=\"opt\">(optional)</span>": ["Empresa o agencia <span class=\"opt\">(opcional)</span>", "Empresa ou agência <span class=\"opt\">(opcional)</span>"],
    "Download CV (PDF)": ["Descargar CV (PDF)", "Baixar CV (PDF)"],

    // attributes (labels for screen readers, placeholders, image descriptions)
    "A stack of old leather-bound books with an open book on top, in front of a library shelf": [
      "Una pila de libros antiguos de cuero con un libro abierto encima, frente a un estante de biblioteca",
      "Uma pilha de livros antigos de couro com um livro aberto em cima, em frente a uma estante de biblioteca"],
    "Open the first book: Karen Tatiana Martínez": ["Abrir el primer libro: Karen Tatiana Martínez", "Abrir o primeiro livro: Karen Tatiana Martínez"],
    "Open the book: About me": ["Abrir el libro: Sobre mí", "Abrir o livro: Sobre mim"],
    "Open the book: Experience": ["Abrir el libro: Experiencia", "Abrir o livro: Experiência"],
    "Open the book: Hackathons": ["Abrir el libro: Hackathons", "Abrir o livro: Hackathons"],
    "Open the book: Projects": ["Abrir el libro: Proyectos", "Abrir o livro: Projetos"],
    "Open the book: Skills and tools": ["Abrir el libro: Habilidades", "Abrir o livro: Habilidades"],
    "Open the book: Languages": ["Abrir el libro: Idiomas", "Abrir o livro: Idiomas"],
    "Open the book: Contact": ["Abrir el libro: Contacto", "Abrir o livro: Contato"],
    "Books": ["Libros", "Livros"],
    "Other books": ["Otros libros", "Outros livros"],
    "Close the book": ["Cerrar el libro", "Fechar o livro"],
    "Portrait of Karen Tatiana Martínez": ["Retrato de Karen Tatiana Martínez", "Retrato de Karen Tatiana Martínez"],
    "Isla Skills: the skill store for robots, with three skills and their prices in USDC": [
      "Isla Skills: la tienda de habilidades para robots, con tres habilidades y sus precios en USDC",
      "Isla Skills: a loja de habilidades para robôs, com três habilidades e seus preços em USDC"],
    "debris app screens: choose your storyteller, the welcome screen with Eagle the lander, and the first chapter, 96 bags on the Moon": [
      "Pantallas de la app debris: elige tu narrador, la bienvenida con Eagle el módulo lunar y el primer capítulo, 96 bolsas en la Luna",
      "Telas do app debris: escolha seu narrador, a tela de boas-vindas com Eagle, o módulo lunar, e o primeiro capítulo, 96 sacos na Lua"],
    "e.g. Customer Support Specialist": ["p. ej. Especialista en atención al cliente", "ex.: Especialista em atendimento ao cliente"],
    "Language": ["Idioma", "Idioma"],

    // messages of the CV form and the running head
    "Please tell me which role this is for.": ["Cuéntame para qué cargo es.", "Diga-me para qual vaga é."],
    "Please choose who you are.": ["Elige quién eres.", "Escolha quem você é."],
    "Preparing your download…": ["Preparando tu descarga…", "Preparando seu download…"],
    "Thank you! Your download has started.": ["¡Gracias! Tu descarga ya empezó.", "Obrigada! Seu download já começou."],
    "Prologue": ["Prólogo", "Prólogo"],
    "Book": ["Libro", "Livro"]
  };

  const LANGS = ['en', 'es', 'pt'];
  const SEL = 'h1,h2,h3,h4,p,li,dt,dd,legend,label,button,a,em,span.tag,span.masthead-name,span.masthead-role,span.go,.pick span';
  const ATTRS = ['aria-label', 'placeholder', 'alt'];
  const norm = s => s.replace(/\s+/g, ' ').trim();
  let lang = 'en';

  // remember the English of every text and attribute once
  const texts = [...document.querySelectorAll(SEL)]
    .filter(e => !e.querySelector(SEL) && !e.closest('.lang') && e.textContent.trim())
    .map(e => ({ e, en: norm(e.innerHTML) }))
    .filter(t => D[t.en]);
  const attrs = [];
  document.querySelectorAll('[aria-label],[placeholder],[alt]').forEach(e => {
    ATTRS.forEach(a => { const v = e.getAttribute(a); if (v && D[v]) attrs.push({ e, a, en: v }); });
  });
  const titleEn = document.title;

  function t(s) {
    if (lang === 'en') return s;
    const m = /^Book (.+)$/.exec(s);
    if (m) return D.Book[LANGS.indexOf(lang) - 1] + ' ' + m[1];
    return D[s] ? D[s][LANGS.indexOf(lang) - 1] : s;
  }

  function apply(next) {
    lang = LANGS.includes(next) ? next : 'en';
    document.documentElement.lang = lang;
    document.title = t(titleEn);
    texts.forEach(x => { const v = t(x.en); if (norm(x.e.innerHTML) !== v) x.e.innerHTML = v; });
    attrs.forEach(x => x.e.setAttribute(x.a, t(x.en)));
    document.querySelectorAll('.lang button').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.lang === lang)));
    const open = document.querySelector('.chapter:not([hidden])');
    const running = document.getElementById('readerRunning');
    if (open && running) running.textContent = t(open.dataset.num);
    try { localStorage.setItem('lang', lang); } catch (e) { /* private mode: the choice just isn't remembered */ }
  }

  document.addEventListener('click', e => {
    const b = e.target.closest('.lang button');
    if (b) apply(b.dataset.lang);
  });

  let saved = null;
  try { saved = localStorage.getItem('lang'); } catch (e) { /* ignore */ }
  const browser = (navigator.language || 'en').slice(0, 2).toLowerCase();
  window.I18N = { t, apply, get lang() { return lang; } };
  apply(saved || (LANGS.includes(browser) ? browser : 'en'));
})();
