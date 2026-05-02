# IA Aplicada à Gestão Pública
## Curso de Autoaprendizado — Gestão Pública
### Da Engenharia de Prompts à Produção de Documentos, Dados, Dashboards e Cenários Estratégicos

---

> **Como usar este material**
>
> Este curso foi feito para ser lido com o computador ou celular ao lado — e com uma ferramenta de IA aberta na outra aba. Cada módulo combina explicação, exemplo real e exercício. Você não precisa de facilitador, sala de aula nem cronograma fixo. Avance no seu ritmo. Mas avance: o aprendizado acontece quando você testa, erra e ajusta — não quando você só lê.
>
> **Tempo estimado por módulo:** indicado no início de cada um.
> **Pré-requisito:** nenhum conhecimento técnico. Só um dispositivo com internet e uma conta de e-mail para criar acesso às ferramentas.

---

## Sumário

- [Módulo 1 — O que é IA e como ela funciona](#módulo-1)
- [Módulo 2 — Conhecendo as ferramentas](#módulo-2)
- [Módulo 3 — Engenharia de Prompts](#módulo-3)
- [Módulo 4 — Escrita de documentos com IA](#módulo-4)
- [Módulo 5 — Análise de planilhas e dados](#módulo-5)
- [Módulo 6 — Dashboards e indicadores](#módulo-6)
- [Módulo 7 — Relatórios executivos e comunicação](#módulo-7)
- [Módulo 8 — Análise de cenários e apoio à decisão](#módulo-8)
- [Módulo 9 — Obsidian: sua base de conhecimento pessoal](#módulo-9)
- [Módulo 10 — Fluxos integrados de trabalho](#módulo-10)
- [Módulo 11 — Segurança, ética e qualidade](#módulo-11)
- [Módulo 12 — Oficina Final Aplicada](#módulo-12)
- [Apêndice A — Biblioteca de Prompts](#apêndice-a)
- [Apêndice B — Checklists de Qualidade](#apêndice-b)
- [Apêndice C — Matriz de Escolha de Ferramentas](#apêndice-c)

---

---

# Módulo 1
## O que é IA e como ela funciona para quem nunca usou

**⏱ Tempo estimado: 1h30**
**🎯 O que você vai conseguir fazer ao final:** Abrir uma ferramenta de IA, entender o que esperar dela e o que não esperar, e fazer sua primeira interação útil para o trabalho.

---

### 1.1 Antes de qualquer coisa: o que a IA NÃO é

Vamos começar pelo que a maioria das pessoas imagina errado.

**A IA não é uma busca no Google.**
Quando você digita algo no Google, ele procura páginas que existem na internet e te mostra links. Quando você digita algo numa IA de linguagem, ela não procura nada — ela *gera* uma resposta com base em padrões que aprendeu durante o treinamento. É uma diferença fundamental.

**A IA não sabe o que está acontecendo agora.**
A menos que você forneça essa informação no momento da conversa, a IA não tem acesso a notícias do dia, sistemas internos da instituição, e-mails que você recebeu ou processos em andamento. Ela só sabe o que você digitar para ela — e o que aprendeu no treinamento.

**A IA não é infalível.**
Ela erra. Às vezes com muita confiança. O fenômeno tem nome: *alucinação*. A IA pode citar uma lei que não existe, inventar um número, atribuir uma frase a alguém que nunca a disse — e fazer tudo isso com um tom seguro e detalhado, como se fosse verdade absoluta. Seu papel é sempre revisar.

**A IA não decide por você.**
Ela organiza, sugere, redige, analisa, simula. Mas a responsabilidade pela decisão, pelo documento assinado e pelo encaminhamento é sempre sua.

---

### 1.2 Então o que a IA faz de verdade?

A IA de linguagem é extraordinariamente boa em algumas coisas específicas:

| O que ela faz bem | Exemplo prático |
|---|---|
| **Redigir** | Transformar seus tópicos soltos em um despacho estruturado |
| **Resumir** | Condensar um relatório de 40 páginas em 5 pontos essenciais |
| **Reorganizar** | Pegar um texto confuso e deixá-lo claro e progressivo |
| **Comparar** | Analisar dois documentos e apontar divergências |
| **Simular** | Criar cenários alternativos para uma decisão que você precisa tomar |
| **Explicar** | Traduzir uma norma técnica em linguagem acessível |
| **Questionar** | Identificar o que está faltando no seu argumento |
| **Classificar** | Organizar uma lista de demandas por urgência e impacto |
| **Adaptar tom** | Reescrever o mesmo conteúdo para a diretoria e para o cidadão |
| **Criar versões** | Produzir um texto em três tamanhos diferentes para públicos diferentes |

---

### 1.3 A metáfora que vai te ajudar a usar a IA melhor

Pense na IA como um **estagiário muito inteligente e muito bem-lido, mas sem experiência na sua área específica e sem memória entre os dias de trabalho.**

Esse estagiário:
- Leu mais sobre redação, direito administrativo, gestão pública e análise de dados do que qualquer pessoa que você conhece.
- Não conhece o contexto interno da instituição, as relações políticas, os processos específicos, os acordos tácitos.
- Executa muito bem o que você pede — mas se você pedir de forma vaga, vai entregar algo vago.
- Não lembra nada do que conversou com você ontem (a menos que você cole na conversa de hoje).
- Pode cometer erros graves com muita confiança. Você precisa revisar.

**A conclusão prática:** quanto mais contexto e direção você der, melhor o resultado. Isso não é um defeito da IA — é o modelo correto de uso.

---

### 1.4 O conceito de alucinação — explicado com um exemplo

Imagine que você pede para a IA:

> *"Qual é o prazo legal para resposta a recurso no JARI conforme a Resolução CONTRAN 619?"*

A IA pode responder com um prazo específico, citar artigos numerados e parecer completamente segura — mesmo que o número do artigo esteja errado, ou o prazo seja diferente do que a resolução diz, ou a resolução citada nem exista.

Isso acontece porque a IA não está consultando o texto da resolução. Ela está gerando o que *estatisticamente parece certo* com base no que aprendeu. Como prazos de 30 dias aparecem muito em contextos legais, ela pode "inventar" 30 dias com a mesma naturalidade com que diria a verdade.

**O que fazer:** Sempre que o resultado depender de dado específico (prazo, número de artigo, valor, data, nome), confira na fonte primária. Use a IA para estruturar o raciocínio, não para fornecer dados críticos sem verificação.

---

### 1.5 Regras básicas de segurança — o que nunca colocar numa IA

Antes de começar a usar, grave estas regras:

**🚫 Nunca insira em ferramentas de IA públicas:**
- CPF, RG, dados pessoais de servidores, investigados ou cidadãos
- Conteúdo de processos sob sigilo ou investigações em curso
- Senhas, tokens de acesso ou credenciais de sistemas
- Dados de saúde de qualquer pessoa
- Estratégias institucionais altamente sensíveis que não devem vazar

**✅ Você pode inserir:**
- Textos que você mesmo escreveu e quer melhorar
- Estruturas de processos sem dados pessoais identificáveis
- Normas, resoluções e documentos públicos
- Dados agregados e anonimizados de planilhas
- Contexto funcional sem identificação de pessoas específicas

> **Dica prática:** Se você estiver em dúvida se pode inserir algo, anonimize. Troque nomes por "Servidor A", "Autuado B", "Processo X". A IA vai trabalhar da mesma forma e você fica protegido.

---

### 1.6 Exercício 1 — Sua primeira interação útil

**Antes de fazer o exercício:** abra uma ferramenta de IA (sugestão: ChatGPT em chat.openai.com, Claude em claude.ai, ou Gemini em gemini.google.com). Crie uma conta gratuita se ainda não tiver.

**O exercício:**

Pense em uma demanda real que você recebeu esta semana — ou imagine uma típica do seu trabalho. Pode ser simples: um e-mail para responder, uma nota para escrever, uma dúvida para esclarecer.

Agora interaja com a IA três vezes, com a *mesma demanda*, mas pedidos diferentes:

**Interação 1 — Produção de texto:**
> "Preciso escrever um e-mail para informar à chefia que a entrega do relatório mensal atrasará 3 dias porque ainda aguardamos dados de uma área parceira. O tom deve ser formal mas direto. Escreva por mim."

**Interação 2 — Análise crítica:**
> "Analise o seguinte texto e me diga o que está faltando, o que está vago e o que poderia ser mal interpretado: [cole o e-mail que a IA gerou acima]"

**Interação 3 — Plano de ação:**
> "Com base no mesmo contexto (atraso de relatório por dependência de dado externo), crie para mim um plano de ação com 5 passos para garantir que isso não se repita no próximo mês."

**O que observar:** Perceba como a mesma situação pode ser abordada de três formas completamente diferentes. Perceba também onde a IA acertou, onde exagerou e onde faltou algo que só você sabe.

---

### ✅ Checklist do Módulo 1

Antes de avançar, confirme:

- [ ] Entendo que a IA gera texto — ela não pesquisa na internet
- [ ] Sei o que é alucinação e vou verificar dados críticos
- [ ] Conheço as regras básicas do que não inserir nas ferramentas
- [ ] Fiz o exercício das três interações com uma demanda real
- [ ] Tenho uma conta ativa em pelo menos uma ferramenta de IA

---

---

# Módulo 2
## Conhecendo as ferramentas: ChatGPT, Claude, Gemini, NotebookLM e Obsidian

**⏱ Tempo estimado: 2h**
**🎯 O que você vai conseguir fazer ao final:** Identificar a ferramenta certa para cada tipo de tarefa e fazer o primeiro uso de pelo menos três delas.

---

### 2.1 Por que existem várias ferramentas?

Cada ferramenta de IA foi criada por uma empresa diferente, com filosofias diferentes, pontos fortes diferentes. Usar só uma para tudo é como usar só o martelo numa obra inteira — funciona para algumas coisas, mas não para tudo.

A boa notícia: todas as ferramentas que vamos usar têm versões **gratuitas** suficientes para o que este curso propõe.

---

### 2.2 ChatGPT — o mais popular

**Empresa:** OpenAI | **Acesso:** chat.openai.com | **Conta:** gratuita (versão GPT-4o mini) ou paga

**O que é:**
O ChatGPT é a ferramenta mais conhecida do mundo. Foi o primeiro produto de IA conversacional a atingir grande escala e ainda é referência para a maioria das tarefas de texto.

**Para que serve no seu trabalho:**
- Redigir documentos a partir de tópicos ou anotações brutas
- Estruturar argumentos para despachos, notas e manifestações
- Criar minutas de e-mail para diferentes públicos e tons
- Planejar projetos, cronogramas e planos de ação
- Simular cenários e consequências de decisões
- Resumir textos longos
- Revisar e melhorar documentos já escritos

**Limitação principal:**
A versão gratuita tem limite de uso. Para tarefas mais intensas, pode pausar ou pedir upgrade.

**Como começar:**
1. Acesse chat.openai.com
2. Clique em "Sign up" e crie uma conta com seu e-mail pessoal
3. Na tela de chat, você já pode digitar sua primeira mensagem
4. Cada nova conversa começa do zero — a IA não lembra de conversas anteriores automaticamente

---

### 2.3 Claude — o melhor para documentos complexos e raciocínio institucional

**Empresa:** Anthropic | **Acesso:** claude.ai | **Conta:** gratuita (plano free com limite diário)

**O que é:**
O Claude é desenvolvido pela Anthropic com foco explícito em segurança, precisão e raciocínio. Na prática, ele tende a ser mais cuidadoso com afirmações, mais claro na estrutura e mais preciso em textos que exigem coerência argumentativa longa.

**Para que serve no seu trabalho:**
- Análise estratégica com implicações institucionais ou jurídicas
- Documentos que precisam de alta coerência entre premissa, análise e conclusão
- Análise de textos muito longos (contratos, normas extensas, relatórios volumosos)
- Raciocínio em situações complexas com múltiplos atores e interesses
- Produção de documentos com rigor técnico elevado

**Por que incluímos o Claude:**
A maioria dos usuários começa pelo ChatGPT e nunca experimenta outra ferramenta. O Claude frequentemente entrega resultados superiores para tarefas de escrita institucional complexa — especialmente quando há risco jurídico ou reputacional envolvido.

**Como começar:**
1. Acesse claude.ai
2. Crie uma conta com seu e-mail pessoal
3. O plano gratuito permite uso diário com algumas restrições de volume
4. A interface é simples: uma caixa de texto e a resposta aparece abaixo

---

### 2.4 Gemini — o aliado do Google Workspace

**Empresa:** Google | **Acesso:** gemini.google.com | **Conta:** qualquer conta Google

**O que é:**
O Gemini é a IA do Google. Sua vantagem principal está na integração nativa com o ecossistema Google: Drive, Docs, Sheets, Gmail, Apresentações.

**Para que serve no seu trabalho:**
- Trabalhar dentro de documentos do Google Docs (sugestões de revisão, reescrita, complementação)
- Analisar planilhas do Google Sheets sem precisar copiar dados
- Resumir e responder e-mails no Gmail
- Criar apresentações no Google Slides com estrutura sugerida pela IA
- Quando você já está no ambiente Google e quer IA sem sair do fluxo

**Limitação principal:**
Fora do ecossistema Google, o Gemini não tem vantagem clara sobre os outros. Para tarefas de texto avulso, o ChatGPT ou o Claude costumam entregar melhor.

**Como começar:**
1. Se você tem uma conta Gmail, você já tem acesso
2. Acesse gemini.google.com e faça login com sua conta Google
3. Para usar dentro do Google Docs: abra um documento, clique no ícone ✨ no menu lateral

---

### 2.5 NotebookLM — o especialista em seus documentos

**Empresa:** Google | **Acesso:** notebooklm.google.com | **Conta:** qualquer conta Google

**O que é:**
O NotebookLM é diferente de todos os outros. Em vez de responder com base no seu treinamento geral, ele responde *exclusivamente* com base nos documentos que você carregou. Isso reduz drasticamente o risco de alucinação em contextos onde você precisa se basear em fontes específicas.

**Para que serve no seu trabalho:**
- Estudar normas, resoluções e regulamentos extensos sem ler tudo linearmente
- Comparar dois pareceres jurídicos ou técnicos e encontrar divergências
- Fazer perguntas sobre um conjunto de PDFs (relatórios, atas, laudos)
- Criar resumos temáticos de múltiplos documentos sobre um mesmo assunto
- Preparar-se para uma reunião a partir de documentos de contexto

**Por que é especial:**
Quando você carrega um documento no NotebookLM e faz uma pergunta, ele cita exatamente em qual trecho do documento encontrou a resposta. Você pode verificar. Isso é muito diferente do ChatGPT, que pode "lembrar" coisas que não estão no documento.

**Como começar:**
1. Acesse notebooklm.google.com com sua conta Google
2. Clique em "Novo notebook"
3. Carregue os documentos (PDFs, textos, links)
4. Use o chat à direita para fazer perguntas sobre o conteúdo

> **Exemplo de uso real:** Você precisa entender o que o Código de Trânsito Brasileiro (CTB) e uma Resolução do CONTRAN dizem sobre responsabilidade solidária em autuações. Em vez de ler os dois documentos completos, você carrega os PDFs de ambos no NotebookLM e pergunta: *"Quais artigos tratam de responsabilidade solidária e o que dizem comparando os dois documentos?"*. Ele responde citando os trechos exatos de cada fonte.

---

### 2.6 Obsidian — sua memória de trabalho

**Empresa:** Obsidian MD | **Acesso:** obsidian.md (download gratuito) | **Funciona offline**

**O que é:**
O Obsidian é um aplicativo de notas que funciona no seu computador, sem depender de internet e sem enviar nada para servidores externos. Você cria notas em texto simples que podem ser conectadas entre si — projetos, reuniões, decisões, prompts úteis, lições aprendidas.

**Para que serve no seu trabalho:**
- Registrar contexto de demandas para não perder o fio histórico
- Guardar os prompts que funcionaram bem para reusar depois
- Criar um arquivo de decisões com data, racional e responsável
- Organizar projetos simultâneos sem confundir o que pertence a cada um
- Manter uma memória entre conversas de IA (você cola o contexto na próxima conversa)

**Por que usar em vez de um Word ou bloco de notas:**
O Obsidian permite que você *conecte* notas entre si. A reunião de segunda sobre o Projeto X pode ter um link para a nota do Projeto X, que tem link para a nota de risco, que tem link para a decisão tomada. Você navega por contexto, não por pasta e nome de arquivo.

**Como começar:**
1. Acesse obsidian.md e baixe o aplicativo para seu sistema operacional
2. Abra o Obsidian e crie um "cofre" (vault) — uma pasta no seu computador onde as notas ficarão
3. Crie sua primeira nota com `Ctrl+N`
4. Para criar um link entre notas, use `[[nome da nota]]`

---

### 2.7 Guia rápido — qual ferramenta usar em cada situação

| Situação | Ferramenta recomendada |
|---|---|
| Redigir um despacho a partir de tópicos | ChatGPT ou **Claude** |
| Analisar 5 PDFs de normas ao mesmo tempo | **NotebookLM** |
| Trabalhar dentro de um documento no Google Docs | **Gemini** |
| Análise estratégica com risco jurídico/institucional | **Claude** |
| Criar um plano de ação ou cronograma | ChatGPT |
| Fazer perguntas sobre um relatório extenso que você tem em PDF | **NotebookLM** |
| Organizar reuniões, projetos e decisões | **Obsidian** |
| Resumir um e-mail longo recebido no Gmail | **Gemini** |
| Simular cenários para uma decisão complexa | **Claude** ou ChatGPT |
| Analisar uma planilha do Google Sheets | **Gemini** (ou copiar para ChatGPT) |
| Criar versões de comunicação para diferentes públicos | ChatGPT ou Claude |
| Guardar os prompts que funcionaram bem | **Obsidian** |

---

### 2.8 Exercício 2 — Testando três ferramentas com a mesma tarefa

**O exercício:**

Escolha um texto que você escreveu recentemente — um e-mail, um despacho, uma nota curta. Se não tiver, use o texto abaixo como exercício:

> *"Em resposta ao ofício recebido, informamos que o processo de renovação de credenciamento encontra-se em análise por esta diretoria. Prazo estimado para conclusão: 15 dias úteis. Em caso de dúvidas, entrar em contato pelo canal institucional."*

Agora abra **três ferramentas diferentes** e, em cada uma, dê o mesmo comando:

> *"Reescreva o texto abaixo tornando-o mais direto, objetivo e adequado para comunicação com o cidadão (não com um servidor). Elimine jargão. Mantenha o conteúdo essencial: [cole o texto]"*

**Compare os resultados.** Anote:
- Qual você achou mais claro?
- Qual foi mais fiel ao conteúdo original?
- Qual usou tom mais adequado?

Não há resposta certa. O exercício é sobre desenvolver julgamento — saber avaliar e escolher.

---

### ✅ Checklist do Módulo 2

- [ ] Criei conta no ChatGPT e fiz pelo menos uma interação
- [ ] Criei conta no Claude e fiz pelo menos uma interação
- [ ] Acessei o Gemini com minha conta Google
- [ ] Criei um notebook no NotebookLM e carreguei pelo menos um documento
- [ ] Baixei o Obsidian e criei meu primeiro vault
- [ ] Fiz o exercício de comparação entre ferramentas

---

---

# Módulo 3
## Como dar boas instruções: Engenharia de Prompts

**⏱ Tempo estimado: 3h**
**🎯 O que você vai conseguir fazer ao final:** Criar prompts que geram resultados consistentes, úteis e aplicáveis — em vez de respostas genéricas que você precisa reescrever do zero.

---

### 3.1 O problema que quase todo mundo tem

A maioria das pessoas que "tentou IA e não gostou" teve esse problema: pediu algo de forma vaga e recebeu algo genérico. Depois concluiu que "a IA não serve para o meu trabalho".

Veja a diferença:

**Prompt vago:**
> *"Escreve um despacho sobre o processo de impugnação."*

**Resultado:** Um despacho genérico, sem contexto, que provavelmente não serve para nada.

**Prompt preciso:**
> *"Atue como assessor técnico de uma diretoria de fiscalização de trânsito. Produza um despacho administrativo sobre o seguinte caso: [contexto completo]. O despacho deve conter: contextualização do processo, análise dos fundamentos da impugnação, posição técnica da diretoria e encaminhamento. Use linguagem formal e direta. Não invente dados — se houver lacunas no contexto fornecido, indique explicitamente."*

**Resultado:** Um despacho estruturado, contextualizado e diretamente aplicável.

A diferença entre os dois é chamada de **engenharia de prompts** — a habilidade de formular instruções que produzem resultados de alta qualidade.

---

### 3.2 Os componentes de um prompt de alto desempenho

Um bom prompt não precisa ter todos esses componentes sempre. Mas quanto mais complexa a tarefa, mais componentes você vai precisar.

#### Componente 1: Papel da IA

Diz para a IA como se comportar. Quando você define um papel, a IA ajusta vocabulário, profundidade e perspectiva.

> ✅ *"Atue como especialista em redação administrativa no setor público estadual."*
> ✅ *"Você é um analista de dados sênior com experiência em gestão de trânsito."*
> ❌ (sem papel definido — a IA vai responder como um assistente genérico)

#### Componente 2: Contexto

Explica a situação. Quanto mais específico, melhor. Inclua: qual é o processo, quem são os envolvidos, o que já aconteceu, qual é o problema.

> ✅ *"Estamos respondendo a uma impugnação ao AI nº 123456, lavrado em 15/03/2026. O autuado alega que o equipamento de medição não estava calibrado. O laudo de calibração vigente foi emitido em 10/01/2026 e cobre o período da autuação."*

#### Componente 3: Objetivo

O que você quer que a IA produza. Seja específico sobre o produto final.

> ✅ *"Produza um despacho que responda tecnicamente à impugnação, sustentando a validade do auto de infração."*
> ❌ *"Me ajuda com isso."*

#### Componente 4: Público-alvo

Para quem vai o resultado. Isso muda completamente o tom, o vocabulário e a profundidade.

> ✅ *"O documento será lido por membros do JARI, que não são especialistas técnicos em metrologia."*
> ✅ *"A síntese será apresentada ao Diretor em reunião de 10 minutos."*

#### Componente 5: Dados disponíveis

As informações que você tem e quer que a IA use. Cole diretamente no prompt.

> ✅ *"Dados disponíveis: [tabela com 20 demandas, status e prazos]"*
> ✅ *"Contexto documental: [trecho da norma relevante]"*

#### Componente 6: Restrições

O que a IA NÃO deve fazer. Isso é tão importante quanto dizer o que fazer.

> ✅ *"Não invente dados. Se houver lacunas no contexto, aponte explicitamente em vez de preencher com suposições."*
> ✅ *"Não use jargão técnico de metrologia. O texto deve ser compreensível por leigos."*
> ✅ *"Não ultrapasse 500 palavras."*

#### Componente 7: Formato de saída

Como você quer receber o resultado.

> ✅ *"Entregue em formato de despacho administrativo numerado por parágrafos."*
> ✅ *"Responda com uma tabela de duas colunas: risco | ação preventiva."*
> ✅ *"Produza em três versões: completa (para o processo), executiva (para a chefia) e sintética (para comunicação externa)."*

#### Componente 8: Tom

O registro linguístico esperado.

> ✅ *"Tom formal e técnico, adequado a documento administrativo público."*
> ✅ *"Tom direto e executivo — sem introduções longas."*
> ✅ *"Tom acessível, como se explicasse para alguém que nunca lidou com esse processo antes."*

---

### 3.3 O Modelo Base — copie, cole e adapte

Este é o template central do curso. Use-o sempre que precisar de um resultado de alta qualidade:

```
Atue como [cargo ou especialidade que você quer que a IA assuma].

Contexto:
[Explique o cenário, a demanda, o problema e os envolvidos.]

Objetivo:
[Explique o que precisa ser produzido ou analisado.]

Público-alvo:
[Para quem vai este resultado?]

Informações disponíveis:
[Cole os dados, documentos ou fatos relevantes.]

Restrições:
Não invente fatos. Quando houver lacunas, indique claramente.
Separe fatos de inferências e inferências de recomendações.
[Adicione restrições específicas da tarefa]

Formato de saída:
[Despacho / relatório / tabela / plano de ação / e-mail / minuta / análise]

Tom:
[Formal / técnico / executivo / didático / direto / institucional]
```

---

### 3.4 Tipos de prompt — e quando usar cada um

#### Prompt de Escrita

Use quando você tem informações brutas e quer um documento organizado.

**Quando usar:** Você tem tópicos, dados, contexto — mas ainda não tem o texto final.

**Exemplo:**
```
Atue como assessor de comunicação institucional.

Tenho os seguintes pontos que preciso comunicar em e-mail formal ao
cidadão que solicitou informações sobre o prazo de renovação de CNH:

- O prazo é de até 30 dias após o agendamento
- O agendamento está disponível no portal institucional
- Documentos necessários: CNH original, comprovante de residência e exame médico
- Em caso de dúvida: canal 0800-XXXXX

Transforme esses pontos em um e-mail claro, cordial e completo.
Público: cidadão comum, sem conhecimento técnico.
Tom: formal, mas próximo e acolhedor.
Formato: e-mail com assunto, corpo e assinatura genérica.
```

---

#### Prompt de Revisão

Use quando você já tem um texto e quer melhorá-lo.

**Quando usar:** Você escreveu algo mas acha que pode estar mais claro, mais curto ou mais adequado ao público.

**Exemplo:**
```
Atue como revisor especializado em redação administrativa.

Revise o texto abaixo considerando:
1. Clareza: o raciocínio está claro e progressivo?
2. Objetividade: há repetições ou informações dispensáveis?
3. Tom: está adequado ao público indicado (gestores da diretoria)?
4. Consistência: a conclusão é coerente com as premissas?

Para cada problema encontrado, explique o que está errado e sugira a correção.
Ao final, entregue a versão revisada completa.

Texto:
[cole o texto aqui]
```

---

#### Prompt de Síntese

Use quando você tem muito conteúdo e precisa de um resumo útil.

**Quando usar:** Você tem um documento longo, uma reunião extensa, uma série de e-mails — e precisa do essencial.

**Exemplo:**
```
Atue como analista de gestão com foco em síntese executiva.

Leia o conteúdo abaixo e produza uma síntese com:
1. Contexto (2 linhas)
2. Principais pontos (máximo 5 itens)
3. Decisões tomadas ou propostas (se houver)
4. Pendências e próximos passos
5. Riscos ou alertas relevantes

Não inclua informações que não estejam no conteúdo original.
Se houver ambiguidade, aponte — não resolva por conta.

Conteúdo:
[cole aqui]
```

---

#### Prompt de Análise Crítica

Use quando você quer que a IA questione, encontre falhas ou valide seu raciocínio.

**Quando usar:** Antes de assinar um documento importante, antes de uma decisão relevante, ou quando você suspeita que algo está faltando no seu argumento.

**Exemplo:**
```
Atue como um auditor rigoroso de documentos administrativos.

Analise o despacho abaixo sob três ângulos:

1. CONSISTÊNCIA LÓGICA: a conclusão segue das premissas?
2. LACUNAS: há informações que deveriam estar presentes mas não estão?
3. RISCOS: há afirmações que podem ser contestadas juridicamente
   ou que dependem de dados não verificados?

Para cada problema, indique:
- O que está errado ou ausente
- Por que é um problema
- Como corrigir

Texto:
[cole o despacho aqui]
```

---

#### Prompt de Extração de Dados

Use quando você tem um texto longo e precisa de informações específicas.

**Quando usar:** Você recebeu um documento extenso e quer apenas certos dados sem ler tudo.

**Exemplo:**
```
Leia o documento abaixo e extraia as seguintes informações,
apresentando em formato de tabela:

| Campo | Valor encontrado | Localização no texto |
|---|---|---|
| Prazo de vigência | | |
| Responsável indicado | | |
| Valor envolvido | | |
| Condições especiais | | |
| Cláusulas de rescisão | | |

Se alguma informação não estiver presente, indique "Não consta".
Não interprete — apenas extraia o que está escrito explicitamente.

Documento:
[cole aqui]
```

---

#### Prompt de Cenários

Use quando você precisa antecipar consequências ou preparar alternativas.

**Quando usar:** Antes de uma decisão importante, ao preparar uma reunião estratégica, ao planejar a resposta a uma situação delicada.

**Exemplo:**
```
Atue como analista estratégico experiente em gestão pública.

Apresentarei uma situação e quero que você simule três cenários:

SITUAÇÃO:
[descreva aqui]

Para cada cenário (otimista, provável e crítico), apresente:
- O que acontece
- Por que esse caminho
- Quais indicadores avisariam que estamos nele
- Quais ações preventivas ou responsivas fazem sentido

Ao final, dê uma recomendação técnica fundamentada.
```

---

#### Prompt de Controle de Qualidade

Use para revisar um output de IA antes de usar.

**Quando usar:** Sempre que for usar um texto gerado por IA em documento oficial ou comunicação institucional.

**Exemplo:**
```
Atue como verificador de qualidade de documentos institucionais.

Revise o texto abaixo e responda objetivamente:

1. Há alguma afirmação que parece inventada ou que precisa ser verificada
   em fonte primária?
2. O texto atende ao objetivo declarado? (objetivo: [insira aqui])
3. A linguagem está adequada ao público? (público: [insira aqui])
4. Há inconsistências internas (contradições, saltos lógicos)?
5. Há riscos jurídicos, operacionais ou reputacionais visíveis?
6. O que está faltando?

Responda em formato de lista, sendo direto sobre cada problema.
Ao final: o texto está pronto para uso? Sim / Não / Com ressalvas.

Texto:
[cole aqui]
```

---

### 3.5 Técnicas avançadas

#### Prompt em camadas — para resultados mais complexos

Em vez de pedir tudo de uma vez, divida em etapas na mesma conversa:

**Passo 1:** *"Antes de escrever o documento, me diga quais seriam os argumentos mais sólidos para defender a posição X. Liste apenas os pontos, sem elaborar."*

**Passo 2 (após ver a lista):** *"Agora use os pontos 1, 3 e 5 para construir o argumento central do despacho. Ponto 2 descarta — não é aplicável ao nosso caso."*

**Passo 3:** *"Agora transforme esse argumento em um despacho formal completo, com os componentes que discutimos."*

Esse método produz resultados mais precisos porque você valida o raciocínio antes de pedir o texto final.

---

#### Prompt com exemplo — mostre o que você quer

Se você tem um exemplo do tipo de resultado que espera, cole no prompt:

```
Preciso de um despacho no mesmo estilo do exemplo abaixo.

EXEMPLO:
[cole um despacho bem escrito que você já tem]

NOVO CASO:
[cole as informações do novo caso]

Produza o novo despacho mantendo a estrutura, o tom e o nível de
detalhamento do exemplo. Adapte apenas o conteúdo.
```

---

#### Prompt de contraditório — antecipe críticas

Antes de tomar uma decisão ou assinar um documento, peça para a IA defender o lado oposto:

```
Apresentarei minha posição sobre um assunto. Sua tarefa é argumentar
contra ela com a maior força possível — encontre as fraquezas, as
inconsistências e os pontos que um advogado adversário exploraria.

Minha posição:
[descreva aqui]
```

Se você não consegue rebater os argumentos que a IA levantou, sua posição precisa ser mais trabalhada.

---

### 3.6 Exercício 3 — Os três níveis de prompt

**O exercício:**

Você recebeu a seguinte demanda (simule como se fosse real):

> *Um prestador de serviço questiona por escrito a inclusão de uma multa de mora no cálculo do valor da rescisão contratual, alegando que o atraso foi causado por falha na comunicação da própria diretoria. Você precisa responder tecnicamente sustentando ou refutando o argumento.*

Crie três versões de prompt para essa demanda:

**Versão 1 — Prompt básico** (como a maioria das pessoas escreve hoje):
Apenas uma linha. Veja o que você recebe.

**Versão 2 — Prompt intermediário** (com contexto e objetivo):
Adicione papel, contexto e objetivo. Sem os outros componentes.

**Versão 3 — Prompt de alto desempenho** (todos os componentes relevantes):
Use o Modelo Base completo com papel, contexto, objetivo, público, restrições, formato e tom.

Compare os três resultados. A diferença de qualidade entre o prompt 1 e o 3 vai ser sua melhor aula do curso inteiro.

---

### ✅ Checklist do Módulo 3

- [ ] Entendo os 8 componentes de um bom prompt
- [ ] Tenho o Modelo Base salvo em algum lugar acessível
- [ ] Sei a diferença entre prompt de escrita, revisão, síntese e análise crítica
- [ ] Fiz o exercício dos três níveis de prompt
- [ ] Comecei a guardar meus prompts que funcionaram bem (no Obsidian ou num documento)

---

---

# Módulo 4
## Escrita de documentos com IA: despachos, notas e relatórios

**⏱ Tempo estimado: 3h**
**🎯 O que você vai conseguir fazer ao final:** Produzir qualquer documento administrativo padrão em menos tempo, com mais qualidade e consistência do que fazendo do zero.

---

### 4.1 O que mudou na produção de documentos com IA

Antes da IA, o processo típico era:

1. Receber a demanda
2. Abrir um documento em branco (ou um modelo antigo)
3. Lembrar do que precisava estar no despacho
4. Escrever do zero — com os dedos travando na frase inicial
5. Reler várias vezes para ver se estava bom
6. Pedir para um colega revisar

Com IA, o processo pode ser:

1. Receber a demanda
2. Organizar os fatos em tópicos (30 segundos)
3. Colar no prompt certo (2 minutos)
4. Receber a minuta estruturada
5. Revisar criticamente e ajustar (isso não muda — você ainda é responsável)
6. Assinar

O tempo cai. A consistência sobe. Mas a responsabilidade continua sendo sua.

---

### 4.2 Estrutura lógica que todo documento bem feito tem

Independente do tipo de documento, existe uma lógica que os melhores despachos e notas técnicas seguem. Quando você ensinar essa estrutura para a IA, ela vai seguir:

1. **Contexto** — De onde vem essa demanda? Qual é o processo? Qual é o número?
2. **Histórico** — O que já aconteceu antes? Quais atos administrativos existem?
3. **Problema** — Qual é a questão central que precisa ser tratada agora?
4. **Análise** — Qual é a avaliação técnica? O que os fatos indicam?
5. **Fundamentação** — Quais normas, resoluções ou precedentes embasam a análise?
6. **Providências** — O que já foi feito ou o que se propõe fazer?
7. **Encaminhamento** — Para onde vai o documento? O que se pede à autoridade?

Você não precisa de todos os componentes em todos os documentos. Mas quando um deles está faltando, o documento fica fraco.

---

### 4.3 Prompt para despacho — pronto para usar

```
Atue como assessor técnico especializado em redação administrativa
no âmbito da administração pública estadual de São Paulo.

Transforme as informações abaixo em um despacho claro, objetivo
e institucionalmente adequado.

O despacho deve conter (use apenas os que fizerem sentido para o caso):
1. Contextualização do processo
2. Síntese dos fatos relevantes
3. Análise técnica
4. Fundamentação (se houver base normativa aplicável)
5. Providências adotadas ou recomendadas
6. Encaminhamento final

Critérios:
— Use linguagem formal, mas direta e sem prolixidade.
— Não invente fatos. Se houver lacunas, indique explicitamente.
— Mantenha coerência entre histórico, análise e encaminhamento.
— Não inclua jargão técnico sem necessidade.

Informações disponíveis:
[Insira aqui os fatos, dados e contexto que você tem sobre o processo]
```

---

### 4.4 Prompt para nota técnica — pronto para usar

```
Atue como analista técnico sênior de uma diretoria de trânsito estadual.

Produza uma nota técnica sobre o tema abaixo.

A nota deve conter:
1. Objeto (do que trata esta nota)
2. Histórico e contexto
3. Análise técnica da situação
4. Base normativa aplicável (mencione apenas o que constar nas informações
   fornecidas — não invente normas)
5. Conclusão técnica
6. Recomendações

Critérios:
— Linguagem técnica, formal e objetiva.
— Estrutura numerada.
— Máximo de [X] palavras / páginas.
— Destinatário: [indique para quem vai a nota]

Informações disponíveis:
[Cole aqui os dados, contexto, normas relevantes e histórico do caso]
```

---

### 4.5 Prompt para e-mail corporativo — três variações

**Variação 1 — E-mail interno para a chefia:**
```
Produza um e-mail interno para minha chefia imediata informando o seguinte:

Fato: [descreva]
Contexto: [por que está acontecendo]
Impacto: [o que isso afeta]
Proposta ou próximo passo: [o que você sugere]

Tom: formal, direto, sem prolongamentos.
Formato: assunto + corpo em 3 parágrafos + encerramento.
```

**Variação 2 — E-mail para cidadão:**
```
Produza um e-mail de resposta ao cidadão que enviou a solicitação abaixo.

A resposta deve:
— Ser compreensível para alguém sem conhecimento técnico
— Ser cordial mas objetiva
— Conter a informação completa necessária para que o cidadão
   entenda o que fazer
— Não usar jargão administrativo

Solicitação do cidadão: [cole aqui]
Informação que precisa ser transmitida: [descreva aqui]
```

**Variação 3 — E-mail para órgão de controle:**
```
Produza um e-mail de encaminhamento de documentação para [nome do órgão].

O e-mail deve:
— Ter tom formal e institucional
— Identificar claramente o processo a que se refere
— Listar os documentos que estão sendo encaminhados
— Indicar a motivação do encaminhamento
— Disponibilizar canal para eventuais esclarecimentos

Informações:
Processo/assunto: [descreva]
Documentos: [liste]
Motivação: [explique]
```

---

### 4.6 Como melhorar um texto que você já tem

Às vezes o problema não é escrever do zero — é melhorar algo que já existe. Esses prompts cobrem os problemas mais comuns:

**Texto muito longo:**
```
O texto abaixo está prolixo. Reduza em aproximadamente 40% sem perder
nenhuma informação essencial. Mantenha o tom formal.

Texto:
[cole aqui]
```

**Tom errado para o público:**
```
Reescreva o texto abaixo para um público [leigo / técnico / executivo].
Adapte o vocabulário e o nível de detalhamento.
Não altere os fatos — apenas o tom e a linguagem.

Texto:
[cole aqui]
```

**Raciocínio confuso:**
```
O texto abaixo tem estrutura lógica confusa. Reorganize-o para que:
1. O problema seja apresentado primeiro
2. A análise venha depois, de forma progressiva
3. A conclusão e o encaminhamento fechem com coerência

Não altere o conteúdo — apenas a ordem e a estrutura.

Texto:
[cole aqui]
```

**Falta encaminhamento claro:**
```
O texto abaixo analisa bem a situação mas não tem um encaminhamento
claro. Adicione um parágrafo final que:
— Indique o que se pede ou propõe à autoridade destinatária
— Seja coerente com a análise apresentada
— Use linguagem direta: "propõe-se" / "encaminha-se" / "solicita-se"

Texto:
[cole aqui]
```

---

### 4.7 Exercício 4 — Despacho em três versões

**O exercício:**

Use o contexto abaixo (ou substitua por um caso real do seu trabalho, sem dados pessoais):

> *Processo de credenciamento de empresa para atuação junto ao órgão público. A empresa foi notificada por irregularidade na documentação em 15/02/2026. Em 28/02, apresentou os documentos faltantes. A análise técnica concluiu que os documentos estão conformes. Processo aguarda despacho de regularização para seguir para aprovação.*

Produza, com IA:

1. **Versão completa** — para o processo (todos os componentes da estrutura)
2. **Versão executiva** — para o diretor (máximo 3 parágrafos: o problema, o que foi feito, o encaminhamento)
3. **Versão sintética** — para comunicação ao interessado (1 parágrafo, linguagem clara, sem jargão)

Use prompts diferentes para cada versão. Salve os três prompts que funcionaram bem.

---

### ✅ Checklist do Módulo 4

- [ ] Conheço a estrutura lógica dos 7 componentes de um bom documento
- [ ] Tenho o prompt de despacho salvo e testado
- [ ] Tenho o prompt de nota técnica salvo e testado
- [ ] Sei produzir e-mails em pelo menos dois tons diferentes
- [ ] Fiz o exercício do despacho em três versões
- [ ] Salvei os prompts que funcionaram no Obsidian ou em documento separado

---

---

# Módulo 5
## Análise de planilhas e dados com IA

**⏱ Tempo estimado: 3h**
**🎯 O que você vai conseguir fazer ao final:** Extrair informações úteis de planilhas, identificar padrões e inconsistências, e gerar sínteses executivas sem precisar dominar fórmulas complexas de Excel.

---

### 5.1 O que a IA faz com dados que você não faz naturalmente

Quando você olha para uma planilha com 300 linhas, seu cérebro lê sequencialmente e tende a ver o que já espera ver. A IA lê tudo de uma vez, sem fadiga, e pode identificar:

- Campos que ficaram vazios quando não deveriam
- Valores que estão muito acima ou abaixo da média (anomalias)
- Padrões de distribuição (concentração em certas categorias)
- Inconsistências de nomenclatura ("São Paulo" / "SP" / "S. Paulo" como o mesmo campo)
- Tendências temporais que passariam despercebidas na leitura linha a linha

Isso não substitui a análise humana — mas economiza horas de trabalho preliminar e aponta onde olhar.

---

### 5.2 Antes de tudo: regras de segurança para dados

> ⚠️ **LEIA COM ATENÇÃO ANTES DE CONTINUAR**
>
> Planilhas institucionais frequentemente contêm dados pessoais (CPF, nome, endereço, dados de infração vinculados a pessoas identificáveis). Antes de colar qualquer dado em uma ferramenta de IA pública:
>
> **Remova ou substitua:**
> - Nomes completos → substitua por "Condutor A", "Empresa B"
> - CPF, RG, CNH → remova a coluna inteira ou substitua por códigos (ID001, ID002)
> - Endereços → mantenha apenas cidade/município se necessário
>
> **Pode manter:**
> - Datas, municípios, categorias de infração, valores agregados, status de processo
> - Dados que não identificam uma pessoa específica
>
> **Alternativa:** descreva a planilha para a IA sem colar os dados. Diga: "Tenho uma planilha com as colunas X, Y, Z. Os dados são: 320 linhas, sendo 45% com status 'pendente' e 30% com campos de prazo vazios..." A IA consegue ajudar mesmo sem ver os dados brutos.

---

### 5.3 Preparação dos dados antes da análise

Uma análise de IA é tão boa quanto os dados que você fornecer. Antes de colar qualquer coisa, faça esta verificação rápida:

| Verificação | O que fazer |
|---|---|
| Cabeçalhos claros | Certifique-se de que cada coluna tem nome descritivo |
| Formato consistente | Datas no mesmo formato, valores sem misturar R$ e números puros |
| Dados pessoais | Remova ou anonimize (veja seção 5.2) |
| Colunas irrelevantes | Remova o que não interessa para a análise em questão |
| Volume | Para planilhas muito grandes, cole uma amostra representativa (50-100 linhas) ou descreva a estrutura |

---

### 5.4 Prompt para análise de planilha — pronto para usar

```
Atue como analista de dados especializado em gestão pública.

Analise os dados abaixo considerando os seguintes objetivos:
1. Identificar os padrões mais relevantes
2. Apontar inconsistências ou anomalias nos dados
3. Indicar os 3 a 5 indicadores mais importantes para acompanhamento contínuo
4. Sugerir qual tipo de visualização seria mais útil para cada indicador
5. Gerar uma síntese executiva de até 5 linhas

Critérios:
— Separe claramente o que é observação objetiva do que é interpretação
— Indique quando os dados têm limitações para a análise
— Não presuma informações ausentes — aponte as lacunas
— Se encontrar inconsistências, descreva exatamente quais são

Contexto adicional:
[Explique para que serve essa planilha, qual área a produziu, com que periodicidade]

Dados:
[Cole aqui a planilha ou a descrição estruturada dos dados]
```

---

### 5.5 Prompts específicos para problemas comuns

**"Preciso saber onde estão as demoras":**
```
Analise a planilha abaixo e identifique:
1. Quais processos/demandas estão com prazo vencido (coluna [X])
2. Quais estão próximos do vencimento (nos próximos 10 dias úteis)
3. Em quais áreas/categorias se concentram os atrasos
4. Qual é o tempo médio de resolução por categoria

Responda em formato de tabela para os itens 1 e 2.
Para os itens 3 e 4, responda em texto corrido com dados concretos.

Dados:
[cole aqui]
```

**"Preciso apresentar esses dados para a diretoria":**
```
Leia os dados abaixo e produza:

1. Um parágrafo de diagnóstico (situação atual em 5 linhas)
2. 3 achados principais (o que mais chama atenção nos dados)
3. 2 alertas (o que pode se tornar um problema se não for tratado)
4. 1 recomendação de ação imediata

Escreva como se fosse uma nota de briefing para um diretor que tem
3 minutos para ler antes de uma reunião.

Dados:
[cole aqui]
```

**"Suspeito que há inconsistências":**
```
Analise os dados abaixo com foco exclusivo em inconsistências.
Procure por:

1. Campos que deveriam ser preenchidos mas estão vazios
2. Valores que contradizem outros campos da mesma linha
3. Categorias que parecem duplicadas com nomes diferentes
4. Datas que parecem fora de ordem ou impossíveis
5. Valores numéricos muito fora do padrão das outras linhas

Para cada inconsistência encontrada, indique:
— Linha ou registro afetado
— Natureza do problema
— Impacto potencial se não for corrigido

Dados:
[cole aqui]
```

---

### 5.6 O que fazer quando a planilha é grande demais para colar

Quando você tem centenas ou milhares de linhas, cole uma descrição estruturada em vez dos dados brutos:

```
Tenho uma planilha com as seguintes características:
— Total de linhas: [X]
— Colunas: [liste todas com nome e tipo de dado]
— Período coberto: [datas]
— Contexto: [para que serve essa planilha]

Distribuição que observei:
— Coluna "Status": [X]% pendente, [Y]% concluído, [Z]% cancelado
— Coluna "Prazo": [X] registros com prazo vencido, [Y] nos próximos 30 dias
— Coluna "Área": a maioria (X%) é da área Y

Com base nessa descrição:
1. Quais indicadores você recomendaria acompanhar?
2. Quais padrões isso sugere?
3. Quais perguntas de gestão esses dados poderiam responder?
4. Que análises adicionais eu deveria fazer?
```

---

### 5.7 Exercício 5 — Analisando dados de gestão

**O exercício:**

Crie (ou use uma planilha real anonimizada) uma tabela simples com ao menos 20 linhas e 5 colunas representando demandas de trabalho. Pode ser algo como:

| ID | Tipo de demanda | Data de entrada | Prazo | Status | Área responsável |
|---|---|---|---|---|---|
| 001 | Credenciamento | 10/01/2026 | 10/02/2026 | Pendente | DFT |
| ... | ... | ... | ... | ... | ... |

Agora use três prompts diferentes:

1. O **prompt de análise geral** (seção 5.4)
2. O **prompt de identificação de demoras** (seção 5.5)
3. O **prompt de apresentação para diretoria** (seção 5.5)

Compare o nível de informação que você teria sem a IA versus com ela. Avalie: o que a IA encontrou que você não teria percebido sozinho? O que ela errou ou interpretou incorretamente?

---

### ✅ Checklist do Módulo 5

- [ ] Conheço as regras de segurança para dados em ferramentas de IA
- [ ] Sei preparar uma planilha antes de enviá-la para análise
- [ ] Tenho o prompt de análise geral salvo e testado
- [ ] Sei o que fazer quando a planilha é grande demais para colar
- [ ] Fiz o exercício de análise de dados e avaliei os resultados criticamente

---

---

# Módulo 6
## Dashboards e indicadores de gestão

**⏱ Tempo estimado: 2h30**
**🎯 O que você vai conseguir fazer ao final:** Usar IA para estruturar a arquitetura de um dashboard de gestão — as perguntas certas, os indicadores certos, as visualizações certas — sem precisar abrir o Power BI ou contratar um analista de BI.

---

### 6.1 O erro mais comum em dashboards

A maioria dos dashboards corporativos começa com a pergunta errada: *"Que dados temos disponíveis?"*

E termina com 25 gráficos numa tela, nenhum com título claro, sem narrativa, sem alerta, sem o que importa destacado.

Um bom dashboard começa com a pergunta certa: *"Que decisões este painel precisa apoiar?"*

A IA pode ajudar muito nessa etapa — a de pensar a estrutura antes de implementar qualquer coisa.

---

### 6.2 Três tipos de dashboard — e qual você precisa

**Dashboard Operacional:**
Acompanha o dia a dia. Volume, status, prazos, alertas.
> *"Quantas demandas entraram hoje? Quantas estão vencidas? Quais precisam de atenção imediata?"*

**Dashboard Tático:**
Acompanha resultados de semana/mês. Tendências, comparativos, variações.
> *"O volume de credenciamentos aumentou em março? Por quê? Quais áreas estão com backlog crescente?"*

**Dashboard Estratégico:**
Monitora objetivos de médio e longo prazo. Metas, indicadores-chave, evolução.
> *"Estamos no caminho de atingir a meta anual? Qual é o risco de não atingir?"*

---

### 6.3 Cinco indicadores que fazem sentido para qualquer área da instituição

Você pode adaptar os nomes, mas esses tipos de indicador aparecem em praticamente toda área de gestão pública:

| Tipo de indicador | Exemplo aplicado à instituição |
|---|---|
| **Volume total** | Total de demandas recebidas no período |
| **Taxa de conclusão no prazo** | % de processos concluídos dentro do prazo legal |
| **Tempo médio de atendimento** | Dias médios entre entrada e conclusão |
| **Backlog acumulado** | Total de demandas abertas com mais de X dias |
| **Distribuição por categoria** | % de cada tipo de demanda (credenciamento, recurso, habilitação...) |

---

### 6.4 Prompt para estruturar um dashboard — pronto para usar

```
Atue como especialista em Business Intelligence e gestão estratégica
no setor público.

Com base nos dados e no objetivo abaixo, proponha a estrutura
completa de um dashboard de gestão.

Objetivo do dashboard:
[Descreva o que o gestor precisa monitorar e que decisões precisa apoiar]

Público-alvo:
[Diretoria / coordenação / equipe operacional / controle externo]

Dados disponíveis:
[Descreva as colunas principais, a origem e a periodicidade de atualização]

A resposta deve conter:

1. AS 3 PERGUNTAS DE GESTÃO que este painel deve responder
2. INDICADORES PRINCIPAIS (máximo 5, com fórmula ou lógica de cálculo)
3. INDICADORES SECUNDÁRIOS (máximo 5, para detalhamento)
4. FILTROS RECOMENDADOS (período, área, categoria, status)
5. TIPO DE VISUALIZAÇÃO para cada indicador (card, linha, barra, pizza, tabela)
6. ALERTAS E LIMITES (quando um indicador deve acionar alerta?)
7. NARRATIVA AUTOMÁTICA SUGERIDA (que texto o painel deveria gerar
   automaticamente para contextualizar os números?)

Para cada indicador, use o formato:
— Nome do indicador
— O que mede
— Como calcular
— Por que importa
— Visualização recomendada
— Alerta quando...
```

---

### 6.5 Prompt para gerar a narrativa executiva de um dashboard

Quando você já tem os dados, pode pedir para a IA escrever a narrativa do painel:

```
Atue como analista de gestão pública que está preparando o briefing
semanal para o diretor.

Com base nos números abaixo, produza uma narrativa executiva de
no máximo 10 linhas que:

1. Destaque o indicador mais relevante da semana
2. Aponte a variação em relação ao período anterior
3. Sinalize qualquer alerta ou anomalia
4. Contextualize brevemente o que os números significam
   (não apenas o que são)
5. Proponha UMA ação ou decisão que os números sugerem

Tom: executivo, direto, baseado nos dados. Sem introduções longas.

Dados da semana:
[Cole aqui os números: total de demandas, % concluídas, tempo médio, etc.]
```

---

### 6.6 Exercício 6 — Estruturando um dashboard com IA

**O exercício:**

Escolha uma área de trabalho que você conhece bem (pode ser sua própria área). Use o prompt da seção 6.4 para que a IA proponha a estrutura de um dashboard.

Avalie o resultado:
- As perguntas de gestão fazem sentido para a realidade da área?
- Os indicadores são mensuráveis com os dados que existem?
- As visualizações sugeridas seriam compreensíveis para o público real?
- Há algo que a IA sugeriu mas que não faz sentido na sua realidade? Por quê?

Refine o prompt com base nas lacunas que você identificou. Tente ao menos duas rodadas de refinamento.

---

### ✅ Checklist do Módulo 6

- [ ] Entendo a diferença entre dashboard operacional, tático e estratégico
- [ ] Sei identificar os 5 tipos de indicador mais comuns
- [ ] Tenho o prompt de estruturação de dashboard salvo e testado
- [ ] Sei pedir para a IA gerar narrativa executiva a partir de números
- [ ] Fiz o exercício de estruturação e avaliei o resultado criticamente

---

---

# Módulo 7
## Relatórios executivos e materiais de comunicação

**⏱ Tempo estimado: 2h**
**🎯 O que você vai conseguir fazer ao final:** Transformar qualquer projeto, resultado ou política em material claro para três públicos diferentes: diretoria, equipe técnica e cidadão.

---

### 7.1 O problema da comunicação em um nível só

A maioria dos documentos corporativos é escrita em um único tom para um único público imaginado. Na prática, o mesmo assunto precisa chegar de formas diferentes a:

- O **diretor** que tem 3 minutos e precisa entender o que decidir
- A **equipe técnica** que precisa saber como executar
- O **cidadão** que precisa entender o que isso significa para ele

A IA permite criar as três versões com rapidez — desde que você saiba pedir cada uma separadamente.

---

### 7.2 Prompt para relatório executivo — pronto para usar

```
Atue como consultor de gestão pública e redator executivo.

Com base nas informações abaixo, produza um relatório executivo.

O relatório deve conter:
1. RESUMO EXECUTIVO (máximo 5 linhas — o essencial para quem
   tem 3 minutos)
2. CONTEXTO E OBJETIVO (de onde vem esse projeto/assunto)
3. SITUAÇÃO ATUAL (o que está acontecendo agora)
4. PRINCIPAIS ENTREGAS DO PERÍODO (o que foi feito)
5. RISCOS E BLOQUEIOS ATIVOS (o que pode travar ou der errado)
6. PENDÊNCIAS (o que ainda precisa ser resolvido)
7. PRÓXIMOS PASSOS (o que acontece nas próximas semanas)
8. DECISÕES NECESSÁRIAS (o que o diretor precisa decidir agora)

Critérios:
— Linguagem direta e objetiva
— Priorize o que é relevante para decisão, não o que é mais trabalhoso
— Destaque riscos e bloqueios — não os minimize
— Não invente dados ou otimize artificialmente o status do projeto
— Tamanho ideal: 1 a 2 páginas

Informações do projeto/área:
[Insira aqui os dados disponíveis — tópicos, status, contexto]
```

---

### 7.3 Prompt para estrutura de landing page institucional

```
Atue como especialista em comunicação pública e experiência do usuário.

Crie a estrutura de conteúdo de uma página de serviço para o tema abaixo.

Tema:
[Descreva o serviço ou projeto]

Público-alvo:
[Cidadão comum / empresas / profissionais de trânsito]

Objetivo da página:
[Informar / orientar / convencer / permitir o acesso ao serviço]

A estrutura deve conter:
1. TÍTULO (claro, direto, sem jargão)
2. SUBTÍTULO (o que o cidadão consegue fazer ou saber aqui)
3. O PROBLEMA (por que esse serviço existe)
4. A SOLUÇÃO (o que a instituição oferece)
5. BENEFÍCIOS PARA O CIDADÃO (não para a instituição)
6. PASSO A PASSO (como usar o serviço — máximo 6 etapas)
7. PERGUNTAS FREQUENTES (as 5 dúvidas mais comuns)
8. CHAMADA PARA AÇÃO (o que o cidadão deve fazer agora)

Critérios:
— Linguagem simples, como se explicasse para alguém que nunca
  usou o serviço
— Sem siglas não explicadas
— Sem jargão técnico ou administrativo
```

---

### 7.4 Como criar três versões de um mesmo conteúdo

Use este prompt para criar versões adaptadas do mesmo assunto:

```
Tenho o seguinte conteúdo sobre [tema]:

[cole o texto base]

Produza três versões desse conteúdo:

VERSÃO 1 — PARA A DIRETORIA:
— Máximo 3 parágrafos
— Foco em: situação, risco, decisão necessária
— Tom: executivo, direto

VERSÃO 2 — PARA A EQUIPE TÉCNICA:
— Com todos os detalhes operacionais necessários
— Foco em: o que precisa ser feito, por quem, quando
— Tom: técnico, claro, sem ambiguidade

VERSÃO 3 — PARA O CIDADÃO / PARTE INTERESSADA:
— Máximo 1 parágrafo
— Foco em: o que muda para essa pessoa e o que ela precisa fazer
— Tom: simples, acessível, sem jargão

Mantenha os fatos iguais nas três versões. Adapte apenas o
nível de detalhe e o tom.
```

---

### 7.5 Exercício 7 — Kit de comunicação de um projeto

**O exercício:**

Escolha um projeto ou iniciativa da sua área (real ou simulado). Produza, com IA:

1. Relatório executivo completo (usando o prompt da seção 7.2)
2. Texto para comunicação ao cidadão / parte interessada
3. Estrutura de landing page (se o projeto tiver interface pública)

Salve os três prompts usados. Avalie: qual versão ficou melhor? Qual precisou de mais ajuste? Por quê?

---

### ✅ Checklist do Módulo 7

- [ ] Tenho o prompt de relatório executivo salvo e testado
- [ ] Sei criar três versões de um mesmo conteúdo para públicos diferentes
- [ ] Tenho o prompt de landing page salvo e testado
- [ ] Fiz o exercício do kit de comunicação

---

---

# Módulo 8
## Análise de cenários e apoio à decisão

**⏱ Tempo estimado: 3h**
**🎯 O que você vai conseguir fazer ao final:** Usar IA para estruturar problemas complexos, antecipar riscos, mapear atores e preparar subsídios sólidos para decisões estratégicas.

---

### 8.1 Por que este é o módulo mais avançado — e o mais valioso

Qualquer servidor consegue usar IA para redigir e-mails depois de um dia de prática. Mas usar IA para pensar estrategicamente — antecipar movimentos, mapear interesses, simular consequências antes de agir — é uma habilidade que separa quem usa IA de forma superficial de quem a usa como vantagem real.

Este módulo é especialmente relevante para quem:
- Está em posição de assessoria estratégica ou direção
- Precisa preparar subsídios para reuniões de alto impacto
- Está navegando situações institucionalmente complexas
- Quer estruturar um problema antes de decidir

---

### 8.2 O que a IA pode e o que ela não pode fazer aqui

**A IA PODE:**
- Organizar a análise — transformar informações dispersas em estrutura clara
- Listar riscos que você talvez não tenha considerado
- Simular o que acontece se cada alternativa for escolhida
- Identificar atores e seus prováveis interesses com base no que você descrever
- Questionar os pontos fracos do seu raciocínio

**A IA NÃO PODE:**
- Conhecer as relações de poder reais do seu ambiente institucional
- Saber o que está acontecendo nos bastidores que você não descreveu
- Ter julgamento político-institucional
- Assumir a responsabilidade pela decisão

**O modelo correto:** use a IA como um *interlocutor que leu muito e não tem medo de te contradizer* — mas cujo julgamento precisa ser filtrado pela sua experiência de campo.

---

### 8.3 Mapeando atores e interesses

Toda situação estratégica envolve pessoas e grupos com interesses diferentes. A IA pode ajudar a organizar esse mapa:

```
Atue como analista político-institucional especializado em gestão pública.

Descrevi abaixo uma situação em que precisarei tomar uma decisão ou
conduzir uma negociação.

SITUAÇÃO:
[Descreva a situação em detalhes — o contexto, o que está em jogo,
o que precisa ser decidido]

Com base nessa descrição, produza:

1. MAPA DE ATORES — liste todos os atores relevantes (pessoas,
   áreas, órgãos, partes externas) que têm interesse ou influência
   nesta situação

2. PARA CADA ATOR, indique:
   — Interesse principal (o que ele quer?)
   — Posição provável (favorável / contrário / neutro / incerto)
   — Capacidade de influência (alta / média / baixa)
   — Ponto de tensão com minha posição (se houver)

3. COALIZÕES PROVÁVEIS — quais atores provavelmente se alinharão?
   Quais se oporão juntos?

4. PONTOS CEGOS — quais aspectos do mapa de atores eu posso estar
   subestimando ou ignorando?

Nota: trabalhe apenas com o que descrevi. Não invente atores ou
dinâmicas que não constem na situação apresentada.
```

---

### 8.4 Prompt para análise de cenários — pronto para usar

```
Atue como analista estratégico experiente em gestão pública.

Analise o cenário abaixo e apresente alternativas de ação com
suas consequências.

CONTEXTO:
[Descreva a situação, os envolvidos e o histórico relevante]

OBJETIVO DA DECISÃO:
[O que precisamos decidir? Qual é o prazo?]

RESTRIÇÕES:
[O que não pode ser feito? Quais são os limites legais,
políticos, operacionais ou de relacionamento?]

A RESPOSTA DEVE CONTER:

1. DIAGNÓSTICO (máximo 3 parágrafos — situação atual de forma objetiva)

2. PRINCIPAIS RISCOS (liste com classificação: impacto alto/médio/baixo
   e probabilidade alta/média/baixa)

3. OPORTUNIDADES (o que essa situação abre que talvez não tenha sido notado?)

4. CENÁRIO PROVÁVEL (se nada mudar — o que acontece?)

5. CENÁRIO OTIMISTA (se as condições melhorarem — o que acontece?)

6. CENÁRIO CRÍTICO (se as condições piorarem — o que acontece?)

7. ALTERNATIVAS DE AÇÃO (liste 3 caminhos possíveis, com prós e contras)

8. RECOMENDAÇÃO TÉCNICA (qual alternativa você recomenda e por quê?)

9. PONTOS QUE EXIGEM VALIDAÇÃO HUMANA (o que nessa análise depende
   de informação que eu tenho e a IA não tem?)
```

---

### 8.5 Prompt para matriz de risco — pronto para usar

```
Com base na situação abaixo, crie uma matriz de risco.

Para cada risco identificado, preencha:

| Risco | Probabilidade (A/M/B) | Impacto (A/M/B) | Prioridade | Ação preventiva | Responsável sugerido |
|---|---|---|---|---|---|

Classifique os riscos por prioridade (Alta = probabilidade e impacto altos).
Liste no máximo 10 riscos. Foque nos que realmente importam.

Ao final, indique os 3 riscos que exigem atenção imediata.

SITUAÇÃO:
[Descreva o projeto, processo ou decisão]
```

---

### 8.6 Exercício 8 — Análise de decisão real

**O exercício:**

Escolha uma decisão real que você precisa tomar ou um processo complexo que está gerenciando (sem incluir dados pessoais ou sigilosos). Use os seguintes prompts em sequência:

**Passo 1:** Mapa de atores (seção 8.3)
**Passo 2:** Análise de cenários (seção 8.4)
**Passo 3:** Matriz de risco (seção 8.5)

Avalie:
- O mapa de atores capturou os players reais?
- Os cenários pareceram plausíveis para quem conhece o contexto?
- A recomendação da IA é viável dentro das restrições reais?
- Quais pontos a IA "acertou" que você não havia pensado?
- Quais pontos ela errou por falta de contexto que só você tem?

Esse exercício vai calibrar sua intuição sobre o que a IA consegue e o que precisa vir de você.

---

### ✅ Checklist do Módulo 8

- [ ] Entendo o que a IA pode e não pode fazer em análise estratégica
- [ ] Tenho o prompt de mapeamento de atores salvo e testado
- [ ] Tenho o prompt de análise de cenários salvo e testado
- [ ] Tenho o prompt de matriz de risco salvo e testado
- [ ] Fiz o exercício com uma situação real e avaliei criticamente o resultado

---

---

# Módulo 9
## Obsidian: sua base de conhecimento pessoal

**⏱ Tempo estimado: 2h30**
**🎯 O que você vai conseguir fazer ao final:** Ter um sistema funcional de organização pessoal que conecta projetos, reuniões, decisões e prompts úteis — e que funciona como memória persistente entre suas conversas de IA.

---

### 9.1 O problema que o Obsidian resolve

Toda semana você:
- Participa de reuniões onde decisões são tomadas
- Recebe demandas com contexto que vai se perder
- Usa prompts de IA que funcionaram bem e não vai lembrar depois
- Conduz projetos cujo histórico está em e-mails, WhatsApp e documentos dispersos

Três meses depois, quando alguém pergunta *"por que tomamos essa decisão?"* ou *"em que status está esse projeto?"*, você não sabe onde olhar.

O Obsidian é a resposta para esse problema. Não porque é o único aplicativo de notas — mas porque é offline, gratuito, não vende seus dados e tem uma filosofia de organização que combina com a forma como o trabalho corporativo funciona: por temas, projetos e relacionamentos, não por pastas hierárquicas.

---

### 9.2 Instalação — passo a passo

1. Acesse **obsidian.md** no seu navegador
2. Clique em **"Download"** e escolha a versão para o seu sistema (Windows, Mac, Linux)
3. Instale normalmente (como qualquer aplicativo)
4. Abra o Obsidian
5. Clique em **"Criar novo cofre"**
6. Escolha uma pasta no seu computador onde as notas serão salvas (ex: `Documentos/PROJETO-2026`)
7. Dê um nome ao cofre (ex: `DFT - 2026`)
8. Pronto — você está dentro do Obsidian

**Primeiros passos:**
- Para criar uma nota: `Ctrl+N`
- Para abrir uma nota existente: `Ctrl+O`
- Para criar um link para outra nota: digite `[[nome da nota]]`
- Para adicionar uma tag: use `#nome-da-tag` em qualquer lugar do texto

---

### 9.3 Estrutura de pastas sugerida

Crie as seguintes pastas dentro do seu vault (clique com botão direito na barra lateral > Nova pasta):

```
📁 01 — Entrada Rápida
📁 02 — Projetos Ativos
📁 03 — Reuniões
📁 04 — Demandas
📁 05 — Pessoas e Atores
📁 06 — Prompts Úteis
📁 07 — Referências e Normas
📁 08 — Lições Aprendidas
📁 09 — Arquivo
```

**Para que serve cada pasta:**

**01 — Entrada Rápida:** Tudo que chega e precisa ser processado. Ideias, recados, tarefas que surgiram numa conversa. Não organize aqui — só capture. Processe uma vez por semana.

**02 — Projetos Ativos:** Uma nota por projeto. Enquanto o projeto estiver ativo, fica aqui. Quando concluir, mova para o Arquivo.

**03 — Reuniões:** Uma nota por reunião relevante. Use o template de reunião (seção 9.4).

**04 — Demandas:** Uma nota por demanda em andamento com histórico, status e próximos passos.

**05 — Pessoas e Atores:** Notas sobre interlocutores relevantes. Histórico de contatos, posições em negociações, alinhamentos.

**06 — Prompts Úteis:** Todos os prompts de IA que funcionaram bem. Organizados por tipo: escrita, análise, dados, cenários.

**07 — Referências e Normas:** Links e trechos de normas, resoluções e referências que você consulta com frequência.

**08 — Lições Aprendidas:** O que deu certo, o que deu errado, o que você faria diferente. Registre logo depois que um projeto termina ou uma crise passa.

**09 — Arquivo:** Tudo que foi concluído. Não apague — archive.

---

### 9.4 Templates — copie e use diretamente no Obsidian

Para usar um template: crie uma nova nota com `Ctrl+N`, cole o template e preencha.

#### Template de Projeto

```markdown
# [Nome do Projeto]

**Status:** Em andamento | Pausado | Concluído
**Início:** 
**Prazo:**
**Responsável principal:** 
**Área:** 

---

## Objetivo
[O que esse projeto precisa entregar?]

## Contexto
[Por que esse projeto existe? Qual problema resolve?]

## Entregas previstas
- [ ] [Entrega 1] — prazo: 
- [ ] [Entrega 2] — prazo: 

## Riscos ativos
- 

## Pendências
- 

## Decisões tomadas
| Data | Decisão | Responsável |
|---|---|---|
| | | |

## Próximos passos
- 

## Documentos relacionados
- [[nome do documento]]

## Prompts úteis para este projeto
- [[Pasta Prompts Úteis/nome do prompt]]

## Histórico de atualizações
- [data]: [o que mudou]
```

---

#### Template de Reunião

```markdown
# Reunião — [Assunto] — [Data]

**Data e hora:** 
**Local / Canal:** 
**Participantes:** 

---

## Pauta
1. 
2. 
3. 

## O que foi discutido
[Pontos principais, não uma transcrição]

## Decisões tomadas
- 

## Encaminhamentos
| Ação | Responsável | Prazo |
|---|---|---|
| | | |

## O que ficou em aberto
- 

## Próxima reunião
**Data:** 
**Pauta prevista:** 

## Projetos relacionados
- [[nome do projeto]]
```

---

#### Template de Demanda

```markdown
# Demanda — [Assunto breve] — [Data de entrada]

**Status:** Nova | Em análise | Aguardando | Concluída | Cancelada
**Origem:** [quem pediu, por qual canal]
**Prazo:** 
**Responsável:** 
**Prioridade:** Alta | Média | Baixa

---

## O que foi pedido
[Descrição clara do que se quer]

## Contexto
[Por que essa demanda existe? Qual é o processo de fundo?]

## O que já foi feito
- [data]: [ação tomada]

## Pendências
- 

## Decisão ou encaminhamento final
[Quando concluído, registre o que foi decidido e feito]

## Notas
[Qualquer informação adicional relevante]
```

---

#### Template de Prompt Útil

```markdown
# Prompt — [Nome descritivo do prompt]

**Tipo:** Escrita | Revisão | Análise | Dados | Cenário | Outro
**Ferramenta testada:** ChatGPT | Claude | Gemini
**Data do último uso:** 

---

## Quando usar
[Em que situação este prompt é útil?]

## O prompt

```
[Cole aqui o prompt completo]
```

## Resultado esperado
[Que tipo de output este prompt gera?]

## Variações
[Ajustes que você testou e que também funcionaram bem]
```

---

### 9.5 Como o Obsidian resolve o problema de memória da IA

A IA não lembra de conversas anteriores. Toda sessão começa do zero.

A solução: use o Obsidian como o arquivo central de contexto. Antes de uma conversa de IA sobre um projeto, abra a nota do projeto no Obsidian e cole o conteúdo relevante no começo do prompt:

```
[CONTEXTO DO PROJETO — para dar memória à conversa:]

[Cole aqui o conteúdo da nota do projeto no Obsidian]

---

Com base nesse contexto, preciso que você [tarefa específica]:
```

Assim a IA "sabe" tudo que você sabe sobre o projeto — e pode dar respostas muito mais precisas e contextualizadas.

---

### 9.6 Exercício 9 — Montando seu vault

**O exercício:**

1. Crie a estrutura de pastas da seção 9.3
2. Crie uma nota de projeto para um projeto real seu, usando o template
3. Crie uma nota de reunião para uma reunião recente
4. Crie sua primeira nota de prompt útil (use um dos prompts que você testou nos módulos anteriores)
5. Conecte as notas: na nota de projeto, adicione um link `[[nome da reunião]]` e `[[nome do prompt]]`

Ao final: navegue pelo vault clicando nos links. Você deve conseguir ir do projeto à reunião e ao prompt sem usar nenhum menu de pasta.

---

### ✅ Checklist do Módulo 9

- [ ] Instalei o Obsidian e criei meu vault
- [ ] Criei a estrutura de 9 pastas
- [ ] Tenho pelo menos uma nota de projeto com o template preenchido
- [ ] Tenho pelo menos uma nota de reunião
- [ ] Tenho pelo menos dois prompts salvos na pasta de Prompts Úteis
- [ ] Testei links entre notas (conectei projeto com reunião)
- [ ] Entendo como usar o Obsidian para dar contexto às conversas de IA

---

---

# Módulo 10
## Fluxos integrados de trabalho

**⏱ Tempo estimado: 2h**
**🎯 O que você vai conseguir fazer ao final:** Executar um fluxo completo de trabalho combinando duas ou mais ferramentas de IA para resolver uma demanda real do início ao fim.

---

### 10.1 Por que integrar as ferramentas

Usar uma ferramenta para tudo é como cozinhar só com uma frigideira. Funciona, mas não é eficiente e algumas tarefas ficam mal feitas.

A produtividade real com IA acontece quando você:
1. Sabe qual ferramenta resolve cada etapa melhor
2. Conecta as ferramentas em sequência
3. Registra o que funciona para reusar

---

### 10.2 Fluxo 1 — Produção de despacho a partir de demanda recebida

```
DEMANDA CHEGA
      ↓
OBSIDIAN
— Cria nota da demanda com template
— Registra: fatos, prazo, contexto, o que já existe no processo

      ↓ (há documentos longos para consultar?)

NOTEBOOKLM
— Carrega os PDFs relevantes (normas, pareceres, relatórios)
— Faz perguntas específicas: "O que diz o art. X sobre Y?"
— Copia as respostas relevantes para a nota no Obsidian

      ↓

CLAUDE ou CHATGPT
— Usa o prompt de despacho (Módulo 4)
— Cola: contexto do Obsidian + achados do NotebookLM
— Recebe a minuta estruturada

      ↓

REVISÃO HUMANA OBRIGATÓRIA
— Verificar dados, fatos, coerência
— Ajustar o que a IA não sabe (contexto interno, relações políticas)
— Assinar ou encaminhar para assinatura

      ↓

OBSIDIAN
— Atualiza nota da demanda com status "Concluída"
— Registra decisão tomada e encaminhamento
— Salva prompt que funcionou bem
```

---

### 10.3 Fluxo 2 — Análise de dados para relatório gerencial

```
PLANILHA DISPONÍVEL
      ↓
PREPARAÇÃO DOS DADOS
— Anonimizar dados pessoais
— Conferir colunas e formatação
— Separar dados relevantes para a análise

      ↓

CHATGPT ou GEMINI (se planilha estiver no Google Sheets)
— Prompt de análise geral (Módulo 5)
— Prompt de identificação de anomalias
— Prompt de indicadores sugeridos

      ↓

REFINAMENTO
— Verificar quais achados fazem sentido
— Descartar o que a IA interpretou errado
— Pedir análises complementares se necessário

      ↓

PROMPT DE RELATÓRIO EXECUTIVO (Módulo 7)
— Gerar síntese executiva com base nos achados validados

      ↓

OBSIDIAN
— Registrar principais achados e metodologia usada
— Salvar prompts que funcionaram
— Registrar limitações dos dados para referência futura
```

---

### 10.4 Fluxo 3 — Preparação para reunião estratégica

```
REUNIÃO MARCADA
      ↓
OBSIDIAN
— Cria nota da reunião com template
— Lista: pauta, participantes, o que preciso levar

      ↓

NOTEBOOKLM (se houver documentos de referência)
— Carrega documentos relevantes para a pauta
— Extrai pontos-chave para cada item de pauta

      ↓

CLAUDE ou CHATGPT
— Prompt de análise de cenários (Módulo 8) para cada decisão relevante
— Prompt de mapeamento de atores (Módulo 8)
— "Que perguntas eu deveria fazer nessa reunião?"
— "Que objeções devo antecipar?"

      ↓

NA REUNIÃO
— Usa as notas do Obsidian como referência
— Registra decisões e encaminhamentos em tempo real (ou logo depois)

      ↓

PÓS-REUNIÃO
— Completa template de reunião no Obsidian
— Atualiza notas de projeto afetados
— Registra lições aprendidas
```

---

### 10.5 Fluxo 4 — Resposta a órgão de controle

Este fluxo é especialmente relevante para situações de alto risco institucional:

```
DEMANDA DO ÓRGÃO DE CONTROLE RECEBIDA
      ↓
NOTEBOOKLM
— Carrega: a demanda recebida + documentos do processo + normas aplicáveis
— Pergunta: "Quais são exatamente os pontos questionados?"
— Pergunta: "Quais documentos do processo respondem a cada ponto?"

      ↓

OBSIDIAN
— Registra: pontos questionados, documentos disponíveis, prazo

      ↓

CLAUDE (preferencialmente — para alta precisão argumentativa)
— Prompt de análise crítica: "Que pontos fracos existem na nossa resposta?"
— Prompt de escrita de manifestação institucional
— Prompt de contraditório: "Como o órgão de controle pode rebater nossa resposta?"

      ↓

REVISÃO JURÍDICA / HUMANA (obrigatória)
— Verificar cada afirmação
— Confirmar referências normativas
— Validar antes de enviar

      ↓

OBSIDIAN
— Registra a resposta enviada, data, e o racional da posição adotada
```

---

### 10.6 Exercício 10 — Fluxo completo

**O exercício:**

Escolha uma das demandas mais complexas que você tem no momento (sem dados sigilosos ou pessoais). Execute um dos quatro fluxos acima do começo ao fim, usando pelo menos duas ferramentas diferentes.

Documente no Obsidian:
- Qual fluxo você usou
- Quais ferramentas em quais etapas
- O que funcionou
- O que não funcionou
- O que faria diferente numa próxima vez

Esse registro vira sua primeira **Lição Aprendida** na pasta 08 do seu vault.

---

### ✅ Checklist do Módulo 10

- [ ] Entendo a lógica dos quatro fluxos principais
- [ ] Executei pelo menos um fluxo completo com uma demanda real
- [ ] Registrei no Obsidian o que funcionou e o que não funcionou
- [ ] Tenho pelo menos uma Lição Aprendida documentada

---

---

# Módulo 11
## Segurança, ética e qualidade no uso da IA

**⏱ Tempo estimado: 1h30**
**🎯 O que você vai conseguir fazer ao final:** Ter critérios claros para usar IA de forma segura, responsável e com qualidade — sem ingenuidade nem paranoia.

---

### 11.1 Por que este módulo vem no final — não no início

Em cursos tradicionais, segurança vem no começo — e costuma funcionar como uma parede de medo que impede as pessoas de experimentar.

Aqui, este módulo vem depois porque, agora que você já usou as ferramentas, as regras fazem muito mais sentido. Você não está mais imaginando os riscos em abstrato — você já sabe o que a IA faz, o que ela inventa, e onde a revisão humana é insubstituível.

---

### 11.2 Os cinco riscos reais — com o que fazer sobre cada um

**Risco 1: A IA inventou um dado que parece real**

*O que acontece:* A IA cita um artigo de lei com número errado, um prazo que não existe, um acordo que nunca foi feito.

*Como prevenir:* Para qualquer dado específico que vá para um documento oficial (número de norma, prazo, valor, data), sempre confirme na fonte primária. Use a IA para estruturar — não para fornecer dados críticos sem verificação.

---

**Risco 2: O texto tem viés ou inadequação institucional**

*O que acontece:* A IA produz um texto com tom político que você não percebeu, ou usa uma perspectiva que não reflete a posição institucional do órgão.

*Como prevenir:* Revise sempre o tom e a perspectiva, especialmente em documentos que serão públicos ou que chegam a órgãos externos. Use o Prompt de Controle de Qualidade (Módulo 3) antes de usar qualquer output em documento oficial.

---

**Risco 3: Você inseriu dados que não deveria**

*O que acontece:* Você colou uma planilha com CPFs, ou um processo com nome de investigado, ou dados de saúde de servidor.

*Como prevenir:* Antes de qualquer copy-paste para uma ferramenta de IA, leia o que você está copiando. Se houver dados pessoais ou sigilosos, anonimize primeiro.

---

**Risco 4: Excesso de confiança no output**

*O que acontece:* O texto ficou tão bom que você assinou sem reler. Mas havia uma inconsistência que a IA não notou e que um revisor humano teria pego.

*Como prevenir:* Nunca pule a revisão humana em documentos que têm consequência jurídica, institucional ou de relacionamento. A IA é o rascunho, você é o autor.

---

**Risco 5: Você não sabe de onde veio o que está no documento**

*O que acontece:* Meses depois, você não consegue explicar por que o documento diz o que diz ou de onde vieram os dados.

*Como prevenir:* Use o Obsidian para registrar a origem: qual ferramenta, qual prompt, quais fontes foram consultadas, que versão do documento foi gerada em que data.

---

### 11.3 Regras mínimas de uso seguro — o seu código pessoal

Copie, adapte e cole no seu vault do Obsidian. É o seu guia de conduta:

```
MEU CÓDIGO DE USO RESPONSÁVEL DE IA

1. Nunca insiro dados pessoais identificáveis em ferramentas de IA públicas.
   Anonimizo antes de qualquer análise.

2. Valido dados críticos em fonte primária.
   A IA não é fonte — é assistente de raciocínio.

3. Nunca uso um output de IA em documento oficial sem revisão humana.
   Eu sou o autor. A IA é o rascunho.

4. Registro no Obsidian o que usei, como usei e de onde vieram os dados.

5. Quando em dúvida se posso inserir algo numa ferramenta de IA,
   não insiro. Anonimizo ou descrevo sem identificar.

6. A responsabilidade pela decisão e pelo documento é sempre minha.
   A IA não assina.
```

---

### 11.4 Checklist de qualidade — use antes de cada documento oficial

Antes de usar qualquer texto gerado (total ou parcialmente) por IA em documento oficial, responda:

| Verificação | Resposta |
|---|---|
| Todos os dados específicos foram verificados em fonte primária? | Sim / Não / N/A |
| O texto está factualmente correto no que posso verificar? | Sim / Não |
| O tom está adequado ao público e ao canal? | Sim / Não |
| O encaminhamento é coerente com a análise apresentada? | Sim / Não |
| Há afirmações que a IA pode ter inventado ou confundido? | Não encontrei / Corrigi |
| O documento atende ao objetivo para o qual foi criado? | Sim / Parcialmente / Não |
| Há risco jurídico, operacional ou reputacional no texto? | Não identificado / Tratado |
| O conteúdo sigiloso ou pessoal foi tratado adequadamente? | Sim / N/A |
| **Conclusão: o texto está pronto para uso?** | Sim / Não / Com ressalvas |

Se algum item for "Não" ou "Não encontrei/Corrigi" sem resolução, o texto não vai.

---

### 11.5 Uma última coisa sobre ética

A IA pode ser usada para criar documentos persuasivos, simulações convincentes, argumentos muito bem estruturados. Isso é poder — e poder mal usado tem consequências.

A pergunta ética é simples: *você assinaria esse documento como seu, com plena responsabilidade pelo conteúdo, mesmo que alguém te perguntasse "isso é verdade?"*

Se a resposta for sim, use. Se for não ou talvez, revise.

---

### ✅ Checklist do Módulo 11

- [ ] Conheço os cinco riscos reais e o que fazer sobre cada um
- [ ] Tenho o meu código de uso responsável salvo no Obsidian
- [ ] Tenho o checklist de qualidade salvo e sei quando usá-lo
- [ ] Entendo que a responsabilidade pelo documento é sempre minha

---

---

# Módulo 12
## Oficina Final Aplicada

**⏱ Tempo estimado: 4h (pode ser dividida em sessões)**
**🎯 O que você vai conseguir fazer ao final:** Produzir um pacote completo de trabalho com apoio de IA — do contexto ao documento, da análise ao registro — com rastreabilidade e qualidade institucional.

---

### 12.1 Como funciona a oficina

A oficina final não é um exercício simulado. É a aplicação real de tudo que você aprendeu a uma demanda verdadeira do seu trabalho.

Você vai produzir, para um caso real (anonimizado onde necessário):

1. Uma **nota de contexto** no Obsidian
2. Um **prompt de alto desempenho** para o documento principal
3. Uma **análise documental ou de dados** (se aplicável)
4. O **documento principal** (despacho, nota, relatório — o que for mais relevante)
5. Uma **síntese executiva**
6. Uma **proposta de indicadores** para acompanhamento
7. Uma **análise de cenários** (se houver decisão estratégica envolvida)
8. O **checklist de qualidade** preenchido
9. O **registro final** no Obsidian com decisão, lição aprendida e prompts usados

---

### 12.2 Escolhendo o caso certo

Para a oficina, escolha um caso que:

- É real — você vai usar o output de alguma forma no trabalho
- Tem complexidade suficiente — não resolve em 5 minutos sem IA
- Pode ser anonimizado — sem dados pessoais ou informações sigilosas
- Tem pelo menos um documento a produzir e uma decisão a apoiar

**Exemplos de casos adequados:**
- Um processo de credenciamento com documentação incompleta
- Uma demanda recebida de órgão de controle que precisa de resposta técnica
- Um projeto de área com necessidade de relatório de status para a diretoria
- Uma análise de planilha de demandas com recomendação de indicadores
- Uma situação de negociação ou alinhamento com área parceira

---

### 12.3 Roteiro da oficina — passo a passo

**ETAPA 1 — Contexto (20 min)**

Abra o Obsidian e crie uma nota de demanda com o template do Módulo 9.
Preencha: o que foi pedido, contexto, prazo, atores envolvidos, o que já existe.

---

**ETAPA 2 — Consulta documental (30 min, se aplicável)**

Se houver documentos longos (normas, pareceres, relatórios), carregue no NotebookLM e faça as perguntas específicas que precisa responder.
Copie os achados relevantes para a nota no Obsidian.

---

**ETAPA 3 — Construção do prompt principal (20 min)**

Use o Modelo Base do Módulo 3. Construa o prompt para o documento principal com todos os componentes relevantes: papel, contexto, objetivo, público, restrições, formato, tom.

Não use um prompt genérico. Invista tempo aqui — é o que determina a qualidade do output.

---

**ETAPA 4 — Produção do documento (30 min)**

Execute o prompt no Claude ou ChatGPT.
Faça ajustes e refinamentos na mesma conversa.
Use o Prompt de Análise Crítica para revisar antes de sair da ferramenta.

---

**ETAPA 5 — Análise de dados (30 min, se aplicável)**

Se o caso envolve dados, use os prompts do Módulo 5.
Gere indicadores, diagnóstico e achados relevantes.

---

**ETAPA 6 — Análise de cenários (30 min, se aplicável)**

Se há decisão estratégica envolvida, use o prompt do Módulo 8.
Gere: diagnóstico, riscos, alternativas, recomendação.

---

**ETAPA 7 — Síntese executiva (15 min)**

Use o prompt de relatório executivo do Módulo 7 para produzir um resumo de 1 página para quem vai receber o produto do trabalho.

---

**ETAPA 8 — Checklist de qualidade (10 min)**

Preencha o checklist do Módulo 11 para o documento principal.
Corrija o que for necessário.

---

**ETAPA 9 — Registro final no Obsidian (15 min)**

Atualize a nota da demanda:
- Status: Concluída
- O que foi produzido
- Decisão ou encaminhamento
- Prompts que funcionaram bem (mova para a pasta 06 — Prompts Úteis)
- Uma linha de lição aprendida

---

### 12.4 Avaliando seu próprio trabalho

Ao final da oficina, responda honestamente:

| Critério | Autoavaliação (1-5) |
|---|---|
| O prompt foi claro e completo? | |
| A ferramenta escolhida foi a mais adequada? | |
| O documento está tecnicamente consistente? | |
| A síntese executiva comunica o essencial? | |
| O processo ficou registrado de forma rastreável? | |
| As regras de segurança foram seguidas? | |
| O resultado poderia ser usado no trabalho real? | |
| Eu entendo o que fazer de diferente na próxima vez? | |

Se algum item ficou abaixo de 3, identifique o que faltou e tente novamente com um caso diferente.

---

### ✅ Checklist do Módulo 12

- [ ] Escolhi um caso real adequado para a oficina
- [ ] Completei todas as 9 etapas do roteiro
- [ ] O documento principal passou pelo checklist de qualidade
- [ ] O processo está registrado no Obsidian com rastreabilidade
- [ ] Fiz a autoavaliação e identifiquei o que melhorar

---

---

# Apêndice A
## Biblioteca de Prompts

*Copie, adapte e salve no seu vault do Obsidian (pasta 06 — Prompts Úteis)*

---

### A.1 Prompts para escrita de documentos

**Despacho administrativo:**
```
Atue como assessor técnico especializado em redação administrativa
no âmbito da administração pública estadual de São Paulo.
Transforme as informações abaixo em um despacho claro e objetivo.
Estrutura: contextualização / fatos / análise técnica /
fundamentação / providências / encaminhamento.
Critérios: formal, direto, sem prolixidade, sem invenção de dados.
Informações: [insira aqui]
```

**Nota técnica:**
```
Atue como analista técnico sênior de diretoria de trânsito estadual.
Produza uma nota técnica sobre: [tema]
Estrutura: objeto / histórico / análise / base normativa / conclusão / recomendações.
Destinatário: [indique]
Tom: técnico, formal, objetivo.
Máximo: [X] páginas.
Informações: [insira aqui]
```

**E-mail para órgão de controle:**
```
Produza um e-mail de encaminhamento de documentação para [órgão].
Processo: [descreva] | Documentos: [liste] | Motivação: [explique]
Tom: formal, institucional, direto.
Formato: assunto + corpo estruturado + disponibilidade para esclarecimentos.
```

**E-mail para cidadão:**
```
Produza resposta ao cidadão sobre: [assunto]
A resposta deve ser compreensível por leigo, sem jargão,
cordial e conter toda informação necessária para o cidadão agir.
Informação a transmitir: [descreva]
```

---

### A.2 Prompts para análise e revisão

**Análise crítica de documento:**
```
Atue como auditor rigoroso de documentos administrativos.
Analise: (1) consistência lógica — a conclusão segue das premissas?
(2) lacunas — o que está faltando? (3) riscos — o que pode ser contestado?
Para cada problema: o que é, por que é problema, como corrigir.
Documento: [insira aqui]
```

**Redução de prolixidade:**
```
Reduza o texto abaixo em aproximadamente [X]% sem perder
informações essenciais. Mantenha o tom formal.
Texto: [insira aqui]
```

**Adaptação de tom:**
```
Reescreva para público [leigo / técnico / executivo].
Adapte vocabulário e profundidade. Não altere os fatos.
Texto: [insira aqui]
```

---

### A.3 Prompts para análise de dados

**Análise geral de planilha:**
```
Atue como analista de dados especializado em gestão pública.
Objetivos: (1) padrões relevantes (2) inconsistências (3) 3-5 indicadores
sugeridos (4) visualizações recomendadas (5) síntese executiva em 5 linhas.
Critérios: separar fato de interpretação / apontar limitações dos dados.
Dados: [insira aqui]
```

**Identificação de demoras:**
```
Identifique: processos com prazo vencido / próximos do vencimento /
concentração de atrasos por área / tempo médio por categoria.
Responda em tabela para os vencidos e próximos.
Dados: [insira aqui]
```

---

### A.4 Prompts para análise estratégica

**Mapeamento de atores:**
```
Atue como analista político-institucional em gestão pública.
Situação: [descreva]
Produza: (1) lista de atores relevantes (2) para cada ator: interesse,
posição provável, influência (A/M/B), ponto de tensão
(3) coalizões prováveis (4) pontos cegos.
```

**Análise de cenários:**
```
Atue como analista estratégico em gestão pública.
Contexto: [descreva] | Objetivo da decisão: [descreva] | Restrições: [liste]
Produza: diagnóstico / riscos com impacto e probabilidade / oportunidades /
cenário provável / cenário otimista / cenário crítico / alternativas de ação
com prós e contras / recomendação técnica / pontos para validação humana.
```

**Contraditório:**
```
Apresentarei minha posição. Argumente contra ela com máxima força —
encontre fraquezas, inconsistências e pontos vulneráveis.
Minha posição: [descreva]
```

---

### A.5 Prompts para relatórios e comunicação

**Relatório executivo:**
```
Atue como consultor de gestão pública e redator executivo.
Produza relatório com: resumo executivo (5 linhas) / contexto /
situação atual / entregas do período / riscos e bloqueios /
pendências / próximos passos / decisões necessárias.
Tom: direto, baseado em dados. Máximo 2 páginas.
Informações: [insira aqui]
```

**Três versões de um conteúdo:**
```
Produza três versões:
DIRETORIA: máx 3 parágrafos, foco em situação/risco/decisão, tom executivo.
EQUIPE TÉCNICA: detalhes operacionais, foco no que/quem/quando, tom técnico.
CIDADÃO: 1 parágrafo, foco no que muda para essa pessoa, tom simples.
Conteúdo base: [insira aqui]
```

---

---

# Apêndice B
## Checklists de Qualidade

*Copie para o Obsidian ou imprima para uso rápido*

---

### B.1 Checklist antes de usar output de IA em documento oficial

- [ ] Todos os dados específicos foram verificados em fonte primária
- [ ] O texto está factualmente correto no que posso verificar
- [ ] O tom está adequado ao público e ao canal
- [ ] O encaminhamento é coerente com a análise apresentada
- [ ] Não há afirmações inventadas ou sem fundamento verificável
- [ ] O documento atende ao objetivo para o qual foi criado
- [ ] Não há risco jurídico, operacional ou reputacional não tratado
- [ ] Não há dados pessoais ou sigilosos indevidos no texto
- [ ] **O texto está pronto para uso?** Sim / Não / Com ressalvas

---

### B.2 Checklist de preparação antes de análise de dados

- [ ] Removi ou anonimizei dados pessoais (CPF, nome, endereço)
- [ ] As colunas têm nomes claros e descritivos
- [ ] O formato dos dados está consistente (datas, valores)
- [ ] Removi colunas irrelevantes para esta análise
- [ ] Tenho contexto suficiente para explicar o que a planilha representa

---

### B.3 Checklist de segurança — antes de qualquer prompt

- [ ] O que vou inserir não contém dados pessoais identificáveis
- [ ] O que vou inserir não é de processo sob sigilo
- [ ] O que vou inserir não é informação estratégica que não deve vazar
- [ ] Se houver dúvida, vou anonimizar antes de prosseguir

---

---

# Apêndice C
## Matriz de Escolha de Ferramentas

*Cole essa tabela na nota de Referência Rápida do seu vault*

| Tarefa | ChatGPT | Claude | Gemini | NotebookLM | Obsidian |
|---|:---:|:---:|:---:|:---:|:---:|
| Redigir despacho/nota técnica | ✅ | ✅✅ | ✓ | — | — |
| Análise estratégica complexa | ✅ | ✅✅ | — | — | — |
| Estudar normas e PDFs extensos | — | — | — | ✅✅ | — |
| Trabalhar dentro do Google Docs | — | — | ✅✅ | — | — |
| Analisar planilha no Google Sheets | — | — | ✅✅ | — | — |
| Resumir e-mails no Gmail | — | — | ✅✅ | — | — |
| Simular cenários estratégicos | ✅ | ✅✅ | ✓ | — | — |
| Criar relatório executivo | ✅ | ✅✅ | ✓ | — | — |
| Revisar documento existente | ✅ | ✅✅ | ✓ | — | — |
| Analisar planilha (copiar e colar) | ✅✅ | ✅✅ | ✓ | — | — |
| Comparar documentos | ✓ | ✅✅ | — | ✅✅ | — |
| Organizar projetos e reuniões | — | — | — | — | ✅✅ |
| Guardar prompts úteis | — | — | — | — | ✅✅ |
| Registrar decisões com histórico | — | — | — | — | ✅✅ |
| Dar contexto para próxima conversa de IA | — | — | — | — | ✅✅ |

**Legenda:** ✅✅ = melhor opção / ✅ = boa opção / ✓ = funciona / — = não indicado

---

---

> **Uma última palavra antes de você fechar este material**
>
> A diferença entre quem usa IA bem e quem usa mal não é talento técnico. É disciplina de prática. Quem testa um prompt e refina, quem registra o que funcionou, quem combina as ferramentas em vez de depender de uma só — esses são os que transformam a ferramenta em vantagem real.
>
> Você tem agora tudo que precisa para começar. Comece pequeno — um despacho, uma planilha, uma análise. Mas comece hoje.
>
> **Gestão Pública — 2026**
