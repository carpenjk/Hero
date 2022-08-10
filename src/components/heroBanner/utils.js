// This function uses a position object containing 1 or many keys. The keys may include valid css position values,
// functions which return valid position values, or keywords as follows:

// -top: <value> || fn,
// -right: <value> || fn,
// -bottom: <value> || fn,
// -left: <value> || fn,
// -vertical: true,
// -horizontal: true

// vertical and horizontal keys void top/bottom and left/right positions respectively.
// This function can be useful to optimize some reusable components when using a memoized object and static function refs.
// It also provides horizontal and vertical centering abstractions

export const getNonStaticPosProps = (posObj) => {
  if (!posObj) {
    // use default positioning
    return undefined;
  }

  const { vertical, horizontal, ...pos } = posObj || {};
  function getCenterProps() {
    if (vertical && horizontal) {
      return { left: '50%', top: '50%', transform: 'translate(-50%, -50%)' };
    }
    if (vertical) {
      return { top: '50%', transform: 'translateY(-50%)' };
    }
    if (horizontal) {
      return { left: '50%', transform: 'translateX(-50%)' };
    }
  }
  if (vertical && horizontal) {
    // positions don't apply
    return getCenterProps();
  }
  const positions = Object.keys(pos).reduce(
    (obj, k) => (typeof pos[k] !== 'function' ? { ...obj, [k]: pos[k] } : obj),
    {}
  );
  return { ...positions, ...getCenterProps() };
};
