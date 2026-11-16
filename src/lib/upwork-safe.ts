/** Routes shared in Upwork proposals. Nothing that shows contact details may render on them. */
const upworkSafeRoutes = ["/upwork-portfolio", "/portfolio-upwork"];

export function isUpworkSafePath(pathname: string | null) {
  if (!pathname) return false;
  return upworkSafeRoutes.some(
    (route) => pathname === route || pathname.startsWith(`${route}/`),
  );
}
