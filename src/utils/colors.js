export const colorsMap = [
  { color: '--white-color', description: 'Description should go here.....' },
  {
    color: '--white-grey-color',
    description: 'Description should go here.....',
  },
  { color: '--warm-grey-color', description: 'Description should go here....' },
  {
    color: '--frost-grey-color',
    description: 'Description should go here....',
  },
  { color: '--pale-grey-color', description: 'Description should go here....' },
  {
    color: '--silver-color',
    description: 'Description should go here....',
  },
  {
    color: '--medium-grey-color',
    description: 'Description should go here....',
  },
  {
    color: '--cool-grey-color',
    description: 'Description should go here....',
  },
  {
    color: '--sonic-grey-color',
    description: 'Description should go here....',
  },
  {
    color: '--onix-color',
    description: 'Description should go here....',
  },
  {
    color: '--jet-color',
    description: 'Description should go here....',
  },
  {
    color: '--icy-blue-color',
    description: 'Description should go here....',
  },
  {
    color: '--baby-blue-color',
    description: 'Description should go here....',
  },
  {
    color: '--uniphore-blue-color',
    description: 'Description should go here....',
  },
  {
    color: '--true-blue-color',
    description: 'Description should go here....',
  },
  {
    color: '--active-blue-color',
    description: 'Description should go here....',
  },
  {
    color: '--oxford-blue-color',
    description: 'Description should go here....',
  },
  {
    color: '--nav-blue-color',
    description: 'Description should go here....',
  },
  {
    color: '--honeydew-color',
    description: 'Description should go here....',
  },
  {
    color: '--emerald-color',
    description: 'Description should go here....',
  },
  {
    color: '--panton-green-color',
    description: 'Description should go here....',
  },
  {
    color: '--grass-green-color',
    description: 'Description should go here....',
  },
  {
    color: '--true-green-color',
    description: 'Description should go here....',
  },
  {
    color: '--cosmic-latte-color',
    description: 'Description should go here....',
  },
  {
    color: '--corn-silk-color',
    description: 'Description should go here....',
  },
  {
    color: '--marigold-color',
    description: 'Description should go here....',
  },
  {
    color: '--harvest-gold-color',
    description: 'Description should go here....',
  },
  {
    color: '--orange-color',
    description: 'Description should go here....',
  },
  {
    color: '--linen-color',
    description: 'Description should go here....',
  },
  {
    color: '--raw-silk-color',
    description: 'Description should go here....',
  },
  {
    color: '--pale-magenta-color',
    description: 'Description should go here....',
  },
  {
    color: '--ultra-red-color',
    description: 'Description should go here....',
  },
  {
    color: '--dark-candy-red-color',
    description: 'Description should go here....',
  },
  {
    color: '--bright-lav-color',
    description: 'Description should go here....',
  },
  {
    color: '--darl-lav-color',
    description: 'Description should go here....',
  },
];

export const colorsHashMap = colorsMap.reduce((map, current) => {
  const newColorName = current.color.substring(2);
  map.set(newColorName, current.description);
  return map;
}, new Map());
