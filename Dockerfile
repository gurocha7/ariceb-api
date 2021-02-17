FROM node:alpine

# diretório alvo
RUN mkdir -p /basic-api
WORKDIR /basic-api

# instalação de dependências
RUN apk update && apk upgrade
RUN apk add python3 g++ make

ADD . .
# RUN npm install
RUN yarn

# instalação dos pacotes para envio de email
# RUN apk add msmtp
# RUN ln -sf /usr/bin/msmtp /usr/sbin/sendmail

# abrindo a porta 3000
EXPOSE 3000

# inicializando a API
# CMD [ "npm", "run", "start" ]
# CMD ["yarn", "start"]