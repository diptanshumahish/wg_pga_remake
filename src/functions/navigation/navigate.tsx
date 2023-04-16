import Router from "next/router";
interface Props {
  navigateTo: string;
  replace?: boolean;
}

export function navigate({ navigateTo, replace = false }: Props) {
  const router = Router;
  if (replace) {
    router.replace(navigateTo);
  } else {
    router.push(navigateTo);
  }
  return;
}
