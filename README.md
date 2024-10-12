# Arquitetura

1. Quais são as principais desvantagens de concentrar toda a lógica, interface e dados em um único arquivo?

Difícil de escalar

Baixa manutenibilidade

Impacto de falhas


2. Como a separação em camadas facilita a manutenção e a escalabilidade da aplicação?

Porque ela permite projetos baseados em níveis crescentes de abstração
 
3. Quais são os principais benefícios da arquitetura Pipe e Filtros para sistemas que precisam de flexibilidade nas transformações de dados?

Útil para aplicações de processamento de informação que interagem pouco 
com usuários
Rápida prototipação
Apóia reúso de transformações (filtros)
É fácil adicionar, recombinar, ou trocar, novas transformações (flexibilidade)
É relativamente simples implementar como sistema concorrente (vários filtros 
em paralelo) ou seqüencial
Eficiência em processamento
