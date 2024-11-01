const parseEnv = () => {
  const prefix = 'RSS_';

  const result = Object.entries(process.env)
    .filter(([name]) => name.startsWith(prefix))
    .map(([name, value]) => `${name}=${value}`)
    .join('; ');

  console.log(result);
};

parseEnv();
