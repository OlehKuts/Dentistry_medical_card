export const monoCounter = (pal, segm, eoz, limf) => {
  if (pal === null || segm === null || eoz === null || limf === null)
    return null;
  let pal1 = Number(pal);
  let segm1 = Number(segm);
  let eoz1 = Number(eoz);
  let limf1 = Number(limf);
  let sum = pal1 + segm1 + eoz1 + limf1;
  let mono = 100 - sum;
  if (isNaN(mono)) return null;
  if (mono > 50 || mono < 0) return null;
  return mono;
};
