# Backend-API

```markdown
# 🚀 Projeto API REST - Estudos de Backend

Bem-vindo ao repositório do meu projeto de estudos em desenvolvimento backend! O objetivo principal deste projeto é compreender e aplicar na prática os conceitos fundamentais da arquitetura **REST**, explorando a manipulação de dados por meio dos verbos HTTP e seguindo as melhores práticas do mercado.

---

## 🎯 Objetivos do Projeto

- ciclo de requisição e resposta (Request/Response).
- Implementar uma arquitetura limpa e organizada para APIs.
- Praticar a manipulação de recursos utilizando os métodos HTTP padrão.
- Entender a importância e aplicação dos códigos de status HTTP (Status Codes).

---

## 🌐 Verbos HTTP Implementados

Nesta API, cada operação do CRUD (Create, Read, Update, Delete) está mapeada para um método HTTP específico, respeitando a semântica do protocolo:

| Método | Endpoint | Ação | Status Code Comum |
| :--- | :--- | :--- | :--- |
| **GET** | `/recursos` | Retorna a lista de todos os registros | `200 OK` |
| **GET** | `/recursos/:id` | Retorna os detalhes de um registro específico | `200 OK` / `404 Not Found` |
| **POST** | `/recursos` | Cria um novo registro no sistema | `201 Created` |
| **PUT** | `/recursos/:id` | Atualiza completamente um registro existente | `200 OK` / `204 No Content` |
| **PATCH** | `/recursos/:id` | Atualiza parcialmente as informações de um registro | `200 OK` |
| **DELETE** | `/recursos/:id` | Remove um registro do sistema | `204 No Content` |

---

## 🛠️ Tecnologias e Conceitos Estudados

- **Protocolo HTTP/1.1:** Estrutura de Headers, Body, Query Params e Path Params.
- **Formato JSON:** Padronização para envio e recebimento de dados.
- **RESTful Design:** Boas práticas de nomenclatura de endpoints (utilizando substantivos no plural).

---

## 🚀 Como Executar o Projeto

*(Instruções para rodar o projeto localmente)*

1. Clone este repositório:
   ```bash
   git clone [https://github.com/seu-usuario/nome-do-repositorio.git](https://github.com/seu-usuario/nome-do-repositorio.git)
