 # image de départ
 FROM alpine:3.15
 #FROM alpine:3.15 as builder
 # chemin de travail
 #WORKDIR /V-rification_MiniProjet-CloudComputing-
WORKDIR /src

 # installation des paquets système
 RUN apk add --update nodejs npm && apk add --update npm

 # ajout utilisateur node et groupe node
 #RUN ...

 # downgrade des privilèges
 #USER ...

 # copie des fichiers du dépôt
 COPY . .

 # installation des dépendances avec npm
# RUN npm install

 # build avec npm
 RUN npm run build 

EXPOSE 8080


# stage exécution
 #FROM alpine:3.15 as runner

#COPY --from=builder . .

#COPY . .

 # exécution
 CMD ["npm","run","watch"]