module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        "module-resolver",
         {
        root: ["."],
        alias: {
          "@Components":"./app/components",
          "@hooks":"./app/hooks",
          "@navigation":"./app/navigation",
          "@screens":"./app/screens",
          },
        },
      ],
    ],
  };
};
