import fs from 'fs';
import ini from 'ini';

const config = ini.parse(fs.readFileSync('./.git/config', 'utf-8'))

const remoteOrigin = config['remote "origin"']

if (remoteOrigin) {
  const remoteUrl = config['remote "origin"'].url.replace('.git', '');
  const stackBlitzUrl = remoteUrl.replace('https://', 'https://pr.new/');
} else {
  console.warn('no remote origin set');
}