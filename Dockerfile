FROM alpine:3.11 as builder
RUN apk --no-cache add gcc g++ make python nodejs npm

WORKDIR /fm-rest-countries-api-with-color-theme-switcher
COPY package-lock.json ./package-lock.json
COPY package.json ./package.json
RUN npm ci
COPY . .
RUN npm run build && rm -rf node_modules && npm ci --production

FROM alpine:3.11
RUN apk --no-cache add nodejs
WORKDIR /fm-rest-countries-api-with-color-theme-switcher
RUN mkdir /fm-rest-countries-api-with-color-theme-switcher/dist
COPY --from=builder /fm-rest-countries-api-with-color-theme-switcher/node_modules ./node_modules
COPY --from=builder /fm-rest-countries-api-with-color-theme-switcher/dist ./dist
COPY --from=builder /fm-rest-countries-api-with-color-theme-switcher/server.js .

CMD ["node", "server"]
