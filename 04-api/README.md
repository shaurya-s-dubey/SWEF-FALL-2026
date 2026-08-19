# Lesson 4: APIs & REST

**Date:** Mar 2nd, 2026

> The [pre](pre/README.md) **is** the lecture. Class is a short review, then you build. Insomnia + `npm install` must be done beforehand.

## Overview

You already read how REST, Express, FastAPI, and Insomnia fit together. In class we only **review**, then you finish a small Books REST API (`POST`, `PUT`, `DELETE`) and test it in Insomnia. Homework is separate: research and wrap **OpenAI** (we’ll preview that in wrap-up; you read their docs to implement it).

## Agenda

1. **Review (~10–15 min)** — APIs, REST verbs, status codes, Express vs FastAPI, calling someone else’s API. Questions from [pre](pre/README.md)
2. **Activity (~60 min)** — run the starter, hit the GETs, implement `POST` / `PUT` / `DELETE`, send each from Insomnia
3. **Wrap-up (~5 min)** — homework is OpenAI: we’ll sketch the idea (your route vs their API, keys in `.env`). You research Chat Completions and implement it.

## What you should know coming in

- What a REST API is (resources, methods, JSON, status codes)
- How Insomnia sends GET/POST with a JSON body
- That FastAPI is the Python counterpart to Express
- That homework will call an external API (OpenAI) — details are in [hw](hw/README.md), not required to finish class

## Class Activity

[activity/BOOKS_API.md](activity/BOOKS_API.md)

## Homework

[hw/README.md](hw/README.md) — wrap the OpenAI API behind one of your own routes
