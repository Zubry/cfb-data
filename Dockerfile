FROM node:latest

RUN useradd --user-group --create-home --shell /bin/false app
ENV HOME=/home/app

COPY readme.md $HOME/

RUN chown -R app:app $HOME/*

USER app
WORKDIR $HOME/