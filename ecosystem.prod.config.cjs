// eslint-disable-next-line no-undef
module.exports = {
  apps: [
    {
      name: "vms-admin",
      script: "npm",
      args: ["run", "prod:start"],
      watch: false,
      env: {
        NODE_ENV: "production",
        PORT: 3000,
      },
    },
  ],
};
