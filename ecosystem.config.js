module.exports = {
  apps : [{
    name: 'API01',
    script: 'dist/index.js',
    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    args: 'one two',
    instances: 'max',
    exec_mode: 'cluster',
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development',
      PORT: 3000
    },
    env_production: {
      NODE_ENV: 'production',
      PORT: 3000,
    }
  },
  {
    name: 'API02',
    script: 'dist/index.js',

    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    args: 'one two',
    instances: 'max',
    exec_mode: 'cluster',
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development',
      PORT: 3001
    },
    env_production: {
      NODE_ENV: 'production',
      PORT: 3001,
    }
  }],

  deploy : {
    production : {
      key : '~/pem-keys/demo_app.pem',
      user : 'ubuntu',
      host : ['ec2-18-219-66-51.us-east-2.compute.amazonaws.com', 'ec2-3-17-133-193.us-east-2.compute.amazonaws.com'],
      ref  : 'origin/master',
      repo : 'git@github.com:OfirGMoveo/demo-ts-server.git',
      path : '/home/ubuntu/demo-ts-server/',
      "post-deploy" : './install-build-del-source.sh && pm2 reload ecosystem.config.js  --env production',
      "pre-deploy-local" : "echo 'Deploying code to servers'",
    },
    // production : {
    //   key : '~/pem_files/skill-test.pem',
    //   user : 'ubuntu',
    //   host : ['ec2-18-222-122-29.us-east-2.compute.amazonaws.com'],
    //   ref  : 'origin/master',
    //   repo : 'git@github.com:OfirGMoveo/test-repo.git',
    //   path : '/home/ubuntu/test-server/',
    //   "post-deploy" : 'npm install && pm2 reload ecosystem.config.js --env production',
    //   "pre-deploy-local" : "echo 'Deploying code to servers'"
    // }
  }
};
