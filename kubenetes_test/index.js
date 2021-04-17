const fs = require('fs')
const files = [
  './namespace.yaml',
  './key-json-secret.yaml',
  './backend/backend-configmap.yaml',
  './backend/backend.yaml',
  './frontend/frontend.yaml',
  './frontend/frontend-configmap.yaml',
  './upload/upload-configmap.yaml',
  './upload/upload.yaml',
  './ingress/issuers.yaml',
  './ingress/memorize-ingress.yaml',
]
const env = {
  MEMORIZE_NAMESPACE: 'memorize-production',
  MEMORIZE_NODE_ENV: 'production',
  MEMORIZE_DOCKER_TAG: 'latest',
  MEMORIZE_LET_ENCRYPT: 'letencrypt-prod',
  MEMORIZE_SERVER_URL: 'https://memorize-nf.com',
  MEMORIZE_SERVER_UPLOAD_URL: 'https://memorize-nf.com',
  MEMORIZE_MONGO_URI: 'mongodb://lertumpai:sorawit5171718@34.126.83.31:27017/memorize',
  MEMORIZE_SECRET_NAME: 'memorize-tls',
  MEMORIZE_HOST: 'memorize-nf.com',
}

let wrapFile = files.map(file => {
  const readFile = fs.readFileSync(file)
  return readFile.toString()
}).join('\n---\n')

Object
  .entries(env)
  .forEach(([key, value]) => {
    wrapFile = wrapFile.replaceAll('${' + key + '}', value)
  })

fs.writeFileSync('index.yaml', wrapFile)
