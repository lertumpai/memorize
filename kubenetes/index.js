const fs = require('fs')
const files = [
  './namespace.yaml',
  './key-json-secret.yaml',
  './redis/redis.yaml',
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
  MEMORIZE_LET_ENCRYPT: 'letencrypt-production',
  MEMORIZE_SERVER_URL: 'https://memorize-nf.com',
  MEMORIZE_SERVER_UPLOAD_URL: 'https://memorize-nf.com',
  MEMORIZE_MONGO_URI: 'mongodb://lertumpai:sorawit5171718@34.87.156.163:27017/memorize',
  MEMORIZE_SECRET_NAME: 'memorize-tls-production',
  MEMORIZE_HOST: 'memorize-nf.com',
  MEMORIZE_GCP_PROJECT_ID: 'crested-lexicon-312308',
}

let wrapFile = files.map(file => {
  const readFile = fs.readFileSync(file)
  return readFile.toString()
}).join('\n---\n')

Object
    .entries(env)
    .forEach(([key, value]) => {
      wrapFile = wrapFile.replace(new RegExp('{' + key + '}', 'g'), value)
    })

fs.writeFileSync('memorize.yaml', wrapFile)
