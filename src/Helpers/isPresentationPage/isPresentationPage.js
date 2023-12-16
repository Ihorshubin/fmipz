/**
 * Checks if a given pathname corresponds to a presentation page.
 *
 * @param {string} [pathname=''] - The pathname to be checked.
 * @returns {boolean} Returns true if the pathname corresponds to a presentation page, otherwise false.
 */
export function isPresentationPage(pathname = '') {
  if (typeof pathname === 'string' && pathname) {
    // the first element is an empty string
    const [, mainPart, pageId, secondPart] = pathname.split('/');

    const isPresentationPage = [
      mainPart === 'presentation',
      secondPart === undefined,
    ].every(Boolean);

    if (isPresentationPage) {
      const pageIdNumber = +pageId;

      const firstPresentationId = 0;
      const lastPresentationId = 6;

      const isInRangeOfPresentationIds = [
        pageIdNumber >= firstPresentationId,
        pageIdNumber <= lastPresentationId,
      ].every(Boolean);

      if (isInRangeOfPresentationIds) {
        return true;
      }
    }
  }

  return false;
}

export default isPresentationPage;
