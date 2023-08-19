export const NAVIGATE = 'NAVIGATE';
export const PUSH = 'PUSH';
export const POP = 'POP';

export const navigate = (routeName, params) => ({
  type: NAVIGATE,
  payload: { routeName, params },
});

export const push = (routeName, params) => ({
  type: PUSH,
  payload: { routeName, params },
});

export const pop = () => ({
  type: POP,
});
