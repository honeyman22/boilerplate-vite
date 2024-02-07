// eslint-disable-next-line no-undef
module.exports = {
  apps: [
    {
      name: "vms-admin",
      script: "npm",
      args: ["run", "dev:start"],
      watch: false,
      env: {
        NODE_ENV: "development",
        PORT: 3000,
      },
    },
  ],
};
