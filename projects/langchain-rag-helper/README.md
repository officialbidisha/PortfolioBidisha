# LangChain Documentation Helper

A retrieval-augmented generation (RAG) chatbot that answers questions about the LangChain documentation, with a Streamlit chat UI.

## What it does

- Ingests LangChain docs into a vector store (`ingestion.py`).
- Retrieves relevant chunks for a user's question and feeds them to an LLM agent to produce a grounded answer with cited sources (`backend/core.py` — `run_llm` / `retrieve_context`).
- Exposes the whole thing as an interactive chat app (`app.py`) built with Streamlit.
- `real_rag.py` and `rag-tooling.py` are earlier standalone implementations of the RAG chain (LCEL-based) kept for reference alongside the current agent-based version in `backend/core.py`.

## Key tech

- **LangChain** / **LangGraph** — RAG chain and tool-calling agent orchestration
- **Pinecone** (and **Chroma** for local experiments) — vector store for document retrieval
- **OpenAI** — chat model + embeddings
- **Streamlit** — chat UI

## Running it

This folder is copied out of a larger personal learning repo, so it's runnable standalone:

```bash
uv sync
# add OPENAI_API_KEY / PINECONE_API_KEY to a .env file
streamlit run app.py
```

## Full history & context

This is a snapshot of one project pulled from a broader LangChain learning repo. For the full commit history, other LangChain concepts (tool calling, ReAct agents, etc.), and ongoing progress notes, see the original repo:

[github.com/officialbidisha/Langchain-In-Depth](https://github.com/officialbidisha/Langchain-In-Depth)
