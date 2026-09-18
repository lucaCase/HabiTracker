import { execSync } from 'node:child_process';

execSync('ng build', { stdio: 'inherit' });
