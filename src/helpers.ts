import { useLocation } from 'react-router-dom';

export function getPathWithoutLng(): string {
  const pathWithoutFirstSlash: string = useLocation().pathname.substring(1);
  const firstSlashLocation: number = pathWithoutFirstSlash.indexOf('/');
  if (firstSlashLocation === -1) {
    return '';
  }
  return pathWithoutFirstSlash.substring(firstSlashLocation + 1);
}

/**
 * From a path like localhost:3000/en/projects/slurp, takes only
 * the word after the language, in this case project.
 * Also works with localhost:3000/en/projects.
 */
export function getActiveSection(): string {
  const pathWithoutFirstSlash: string = useLocation().pathname.substring(1);
  const secondSlashLocation: number = pathWithoutFirstSlash.indexOf('/');
  const pathWithoutSecondSlash: string = pathWithoutFirstSlash.substring(secondSlashLocation + 1);
  const thirdSlashLocation: number = pathWithoutSecondSlash.indexOf('/');
  if (thirdSlashLocation === -1) {
    return pathWithoutSecondSlash;
  }
  return pathWithoutSecondSlash.substring(0, thirdSlashLocation);
}

export function capitalise(string: string): string {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
